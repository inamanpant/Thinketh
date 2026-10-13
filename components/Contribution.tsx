
"use client";

import { useState } from "react";

export default function Contribution() {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("1000");
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const selectedAmount =
    amount === "other" ? Number(customAmount) : Number(amount);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contributions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          amount: selectedAmount,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed.");
      }

      setStatus("success");
      setName("");
      setPhone("");
      setAmount("1000");
      setCustomAmount("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section id="contribute" className="band">
        <div className="wrap contribution-simple">
          <p className="eyebrow">STUDENT SUPPORT</p>
          <h2>Every child deserves the chance to learn.</h2>
          <p className="muted max-copy top-gap">
            Your support could help a student access learning
            opportunities they might otherwise miss. If you believe
            in our vision, we would love to hear from you.
          </p>

          <button
            className="btn ghost top-gap"
            type="button"
            onClick={() => {
              setStatus("idle");
              setIsOpen(true);
            }}
          >
            Interested in supporting?
          </button>
        </div>
      </section>

      {isOpen && (
        <div
          className="contribution-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            className="contribution-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contribution-title"
          >
            <button
              className="contribution-close"
              type="button"
              aria-label="Close popup"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            {status === "success" ? (
              <div className="contribution-success">
                <p className="eyebrow">THANK YOU</p>
                <h2 id="contribution-title">We appreciate your interest.</h2>
                <p className="muted top-gap">
                  Your details have been received. The Thinketh team
                  will contact you to discuss the next steps.
                </p>
                <button
                  className="btn top-gap"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow">MAKE LEARNING ACCESSIBLE</p>
                <h2 id="contribution-title">
                  How would you like to help?
                </h2>
                <p className="muted top-gap">
                  Share an amount you're considering and your contact
                  details. We'll reach out to discuss it with you.
                </p>

                <form
                  className="contact-form contribution-form"
                  onSubmit={submit}
                >
                  <fieldset className="contribution-amounts">
                    <legend>Intended contribution (₹)</legend>

                    <div className="amounts">
                      {["500", "1000", "2500", "other"].map((value) => (
                        <button
                          key={value}
                          type="button"
                          className={`amount ${
                            amount === value ? "selected" : ""
                          }`}
                          aria-pressed={amount === value}
                          onClick={() => setAmount(value)}
                        >
                          {value === "other"
                            ? "Other amount"
                            : `₹${Number(value).toLocaleString("en-IN")}`}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {amount === "other" && (
                    <label>
                      Enter amount (₹)
                      <input
                        type="number"
                        min="1"
                        max="1000000"
                        step="1"
                        required
                        value={customAmount}
                        onChange={(event) =>
                          setCustomAmount(event.target.value)
                        }
                        placeholder="Enter amount"
                      />
                    </label>
                  )}

                  <label>
                    Your name
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={120}
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Enter your name"
                    />
                  </label>

                  <label>
                    Phone number
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      minLength={7}
                      maxLength={20}
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="Number we can reach you on"
                    />
                  </label>

                  {status === "error" && (
                    <p className="error-text" role="alert">
                      We couldn't save your details. Please try again.
                    </p>
                  )}

                  <button
                    className="btn"
                    type="submit"
                    disabled={
                      status === "sending" ||
                      !Number.isInteger(selectedAmount) ||
                      selectedAmount < 1 ||
                      selectedAmount > 1000000
                    }
                  >
                    {status === "sending"
                      ? "Submitting…"
                      : "Request a conversation"}
                  </button>

                  <p className="note">
                    This is an expression of interest, not a payment.
                    There's no obligation to contribute.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
