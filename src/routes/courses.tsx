import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { activities, courseStages, formatRupees, fullFeeFor, maximumAidPercent, subjects } from "@/data/courses";

export const Route = createFileRoute("/courses")({
  head: () => seo("Thinketh Courses & Financial Aid — Learning with Mentorship", "Explore Foundation, Intermediate and Advanced live online courses for Class 5–12. Financial aid up to 70%, with instalments available for every stage."),
  component: Courses,
});

function Courses() {
  const [flipped, setFlipped] = useState<string | null>(null);
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="eyebrow">Class 5–12 · Live online</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Thinketh courses.<br /><span className="text-primary">A foundation for life.</span></h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">School subjects, practical skills and a mentor who listens. Three stages to build understanding, confidence and a clearer sense of direction — from home.</p>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold"><span>Connected learning</span><span>Young, approachable mentors</span><span>Instalments at every stage</span></div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">The learning journey</p><h2 className="mt-3 text-3xl font-bold">Start strong. Grow with purpose.</h2></div><p className="max-w-xs text-sm text-muted-foreground">Take one stage on its own, or progress through all three.</p></div>
        <ol className="mt-8 grid gap-4 lg:grid-cols-3">
          {courseStages.map((s, i) => (
            <li key={s.name} className="flex flex-col rounded-lg border border-border bg-card p-6 md:p-7">
              <div className="flex items-center justify-between font-mono text-xs text-primary"><span>0{i + 1} / {s.months} MONTHS</span><ArrowRight className="size-4" /></div>
              <h3 className="mt-6 text-3xl font-bold">{s.name}</h3><p className="mt-2 font-semibold">{s.focus}</p><p className="mt-3 min-h-24 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-5 space-y-3 text-sm">{s.outcomes.map(o => <li key={o} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{o}</li>)}</ul>
              <div className="mt-7 border-t border-border pt-5">
                <p className="text-xs text-muted-foreground">Calculated full fee <s>{formatRupees(fullFeeFor(s.assistedFee))}</s></p>
                <p className="mt-2 text-3xl font-bold">{formatRupees(s.assistedFee)} <span className="text-sm font-normal text-muted-foreground">/ stage</span></p>
                <p className="mt-2 text-sm text-primary">With maximum {maximumAidPercent}% financial aid</p><p className="mt-2 text-xs text-muted-foreground">Instalments available · Aid subject to approval</p>
              </div>
              <Button asChild variant="outline" className="mt-6 w-full"><Link to="/contact">Enquire about {s.name}<ArrowRight /></Link></Button>
            </li>
          ))}
        </ol>
        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground">Full fees above are calculated from the assisted total at 70% aid, rounded to the nearest paisa — not previous sale prices. Your final fee depends on approved aid. Payment amounts and dates will be confirmed before enrolment.</p>
      </section>
      <section className="border-y border-border bg-secondary/50"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr]"><div><p className="eyebrow">Opportunity should not depend on income</p><h2 className="mt-3 text-3xl font-bold">Financial support, not a closed door.</h2></div><div><p className="leading-relaxed text-muted-foreground">Families who cannot afford the full fee can apply for assistance of up to 70%. Every stage can be paid in instalments. Talk to us about your circumstances and we’ll discuss the options.</p><Button asChild className="mt-5"><Link to="/contact">Ask about financial aid<ArrowRight /></Link></Button></div></div></section>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="eyebrow">Beyond memorising</p><h2 className="mt-3 text-3xl font-bold">School subjects. Real-world connections.</h2><p className="mt-3 max-w-2xl text-muted-foreground">Build the basics, then connect them with our six pillars: Think, Life, Money, Civic, Tech and World.</p>
        <ul className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">{subjects.map(s => <li key={s} className="border-b-2 border-primary/30 pb-2">{s}</li>)}</ul>
        <h2 className="mt-14 text-3xl font-bold">A little challenge. A lot of discovery.</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{activities.map(a => { const on = flipped === a.name; return <li key={a.name}><Button variant="outline" aria-expanded={on} onClick={() => setFlipped(on ? null : a.name)} className={cn("h-48 w-full flex-col items-start justify-start whitespace-normal p-6 text-left", on && "border-primary bg-secondary")}><span className="flex w-full items-center justify-between gap-2 font-display text-xl font-bold">{a.name}{on ? <Minus /> : <Plus />}</span><span className="mt-4 text-sm font-normal leading-relaxed text-muted-foreground">{on ? a.prompt : "Explore a class challenge"}</span></Button></li>; })}</ul>
        <div className="mt-12 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Find the right stage<ArrowRight /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/assessment">Try the free assessment</Link></Button></div>
      </section>
    </>
  );
}
