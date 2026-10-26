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

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "Contact Thinketh — Talk to Us About Your Child",
      "Tell us your child's class and what you hope for. A member of the Thinketh team will call you back within two working days.",
    ),
  component: Contact,
});

const schema = z.object({
  parent_name: z.string().trim().min(1, "Please enter your name").max(120),
  contact: z.string().trim().min(3, "Please enter a phone number or email").max(200),
  child_class: z.string().min(1, "Please choose a class"),
  message: z.string().trim().max(2000).nullable(),
  consent: z.literal(true, { errorMap: () => ({ message: "Please confirm consent" }) }),
});

function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      parent_name: f.get("parent_name"),
      contact: f.get("contact"),
      child_class: f.get("child_class"),
      message: (f.get("message") as string) || null,
      consent: f.get("consent") === "on",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSending(true);
    const { error } = await supabase.from("contact_enquiries").insert(parsed.data);
    setSending(false);
    if (error) {
      toast.error("Couldn't send. Please try again.");
      return;
    }
    setSent(true);
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Talk to us about your child</h1>
        <p className="mt-4 text-muted-foreground">Tell us your child's class and what you hope for. A member of our team will call you back within two working days.</p>
      </div>
      {sent ? (
        <div className="rounded-2xl border border-primary bg-card p-8" role="status">
          <h2 className="text-2xl font-bold">Thank you.</h2>
          <p className="mt-2 text-muted-foreground">We'll be in touch within two working days.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl border border-border bg-card p-7" noValidate>
          <div className="grid gap-2"><Label htmlFor="parent_name">Parent name</Label><Input id="parent_name" name="parent_name" required maxLength={120} autoComplete="name" /></div>
          <div className="grid gap-2"><Label htmlFor="contact">Phone or email</Label><Input id="contact" name="contact" required maxLength={200} /></div>
          <div className="grid gap-2">
            <Label htmlFor="child_class">Child's class</Label>
            <select id="child_class" name="child_class" required defaultValue="" className="h-10 rounded-md border border-input bg-background px-3 text-sm">
              <option value="" disabled>Choose…</option>
              <option>Class 5 to 8</option><option>Class 9 to 10</option><option>Class 11 to 12</option>
            </select>
          </div>
          <div className="grid gap-2"><Label htmlFor="message">Message (optional)</Label><Textarea id="message" name="message" maxLength={2000} rows={4} /></div>
          <label className="flex gap-3 text-sm text-muted-foreground">
            <input type="checkbox" name="consent" className="mt-1 accent-primary" />
            I am the parent or guardian and I agree to be contacted about my child's learning.
          </label>
          <Button type="submit" size="lg" disabled={sending}>{sending ? "Sending…" : "Request a call"}</Button>
        </form>
      )}
    </div>
  );
}
