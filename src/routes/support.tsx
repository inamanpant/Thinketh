import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/support")({
  head: () =>
    seo(
      "Support a Student's Learning | Thinketh",
      "Help a student access Thinketh's live classes. Sponsor a seat, volunteer as a mentor, or partner with us.",
    ),
  component: Support,
});

const ways = [
  { t: "Sponsor a seat", d: "Cover a student's place in a live course stage." },
  { t: "Mentor", d: "Give an hour to talk about your profession or skill." },
  { t: "Partner", d: "Schools and organisations bringing Thinketh to more students." },
];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  contact: z.string().trim().min(3, "Please enter a phone number or email").max(200),
  support_type: z.string().min(1).max(60),
  message: z.string().trim().max(2000).nullable(),
});

function Support() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const parsed = schema.safeParse({ name: f.get("name"), contact: f.get("contact"), support_type: f.get("support_type"), message: (f.get("message") as string) || null });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSending(true);
    const { error } = await supabase.from("support_interest").insert(parsed.data);
    setSending(false);
    if (error) {
      toast.error("Couldn't send. Please try again.");
      return;
    }
    setSent(true);
  }
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow">Student support</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-6xl">Every child deserves the chance to learn.</h1>
      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {ways.map((w) => (
          <li key={w.t} className="rounded-2xl border border-border p-7"><h2 className="text-xl font-bold">{w.t}</h2><p className="mt-2 text-muted-foreground">{w.d}</p></li>
        ))}
      </ul>
      <div className="mt-12 max-w-xl">
        {sent ? (
          <p role="status" className="rounded-2xl border border-primary bg-card p-8 text-lg">Thank you — we'll be in touch soon.</p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-2xl border border-border bg-card p-7">
            <h2 className="text-2xl font-bold">Interested in supporting?</h2>
            <div className="grid gap-2"><Label htmlFor="name">Your name</Label><Input id="name" name="name" maxLength={120} /></div>
            <div className="grid gap-2"><Label htmlFor="contact">Phone or email</Label><Input id="contact" name="contact" maxLength={200} /></div>
            <div className="grid gap-2">
              <Label htmlFor="support_type">How you'd like to help</Label>
              <select id="support_type" name="support_type" defaultValue="Sponsor a seat" className="h-10 rounded-md border border-input bg-background px-3 text-sm">
                {ways.map((w) => <option key={w.t}>{w.t}</option>)}
              </select>
            </div>
            <div className="grid gap-2"><Label htmlFor="message">Message (optional)</Label><Textarea id="message" name="message" maxLength={2000} rows={3} /></div>
            <Button type="submit" size="lg" disabled={sending}>{sending ? "Sending…" : "Send"}</Button>
          </form>
        )}
      </div>
    </div>
  );
}
