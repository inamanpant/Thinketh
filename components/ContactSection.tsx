"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    function receiveMessage(event: Event) {
      const custom = event as CustomEvent<string>;
      if (typeof custom.detail === "string") setMessage(custom.detail);
    }
    window.addEventListener("thinketh:contact-message", receiveMessage);
    return () => window.removeEventListener("thinketh:contact-message", receiveMessage);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      parentName: String(data.get("parentName") || "").trim(),
      contact: String(data.get("contact") || "").trim(),
      childClass: String(data.get("childClass") || ""),
      message: String(data.get("message") || "").trim(),
      consent: data.get("consent") === "on",
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not submit your request.");
      setStatus("success");
      form.reset();
      setMessage("");
    } catch (error) {
      setStatus("error");
    }
  }

  return <section id="connect"><div className="wrap contact-grid">
    <div>
      <h2>Talk to us about your child</h2>
      <p className="muted top-gap max-copy">Tell us your child&apos;s class and what you hope for. A member of our team will call you back within two working days.</p>
    </div>
    <div>
      {status === "success" ? <div className="form-message success" role="status"><h3>Thank you.</h3><p>We have received your request. The Thinketh team will follow up with you.</p><button className="btn ghost top-gap" onClick={() => setStatus("idle")}>Send another enquiry</button></div> : <>
        <form className="contact-form" onSubmit={submit}>
          <label>Parent name<input name="parentName" autoComplete="name" required maxLength={120} /></label>
          <label>Phone or email<input name="contact" autoComplete="email" required maxLength={200} placeholder="Phone number or email address" /></label>
          <label>Child&apos;s class<select name="childClass" defaultValue="Class 5 to 8"><option>Class 5 to 8</option><option>Class 9 to 10</option><option>Class 11</option></select></label>
          <label>Message<textarea name="message" rows={4} maxLength={3000} value={message} onChange={e => setMessage(e.target.value)} /></label>
          <label className="consent"><input name="consent" type="checkbox" required /> <span>I am the parent or guardian and I agree to be contacted about my child&apos;s learning.</span></label>
          {status === "error" && <p className="error-text" role="alert">We couldn&apos;t submit your request. Please check your connection and try again.</p>}
          <button className="btn" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request a call"}</button>
        </form>
      </>}
    </div>
  </div></section>;
}
