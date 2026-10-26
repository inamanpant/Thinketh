import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getAssessment, levels, scoreAssessment, type Level } from "@/data/assessment";
import { getPillar } from "@/data/questions";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/assessment")({
  head: () =>
    seo(
      "Free Critical Thinking Test for Students by Class | Thinketh",
      "A free 15-question thinking assessment for Class 5–8, 9–10 and 11–12, covering reasoning, money, civics, technology and the world. Every answer explained.",
    ),
  component: Assessment,
});

function Assessment() {
  const [level, setLevel] = useState<Level | null>(null);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const questions = level ? getAssessment(level) : [];

  if (!level)
    return (
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="eyebrow">Thinketh assessment</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">How well do you think things through?</h1>
        <p className="mt-4 text-muted-foreground">15 questions across five pillars. You'll see why each answer is right as you go. No sign-up.</p>
        <h2 className="mt-10 text-lg font-semibold">Choose your class level</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {levels.map((l) => (
            <Button key={l.id} size="lg" variant="outline" className="h-16 text-base" onClick={() => { setLevel(l.id); setAnswers(Array(15).fill(null)); setI(0); }}>
              {l.label}
            </Button>
          ))}
        </div>
      </div>
    );

  if (i >= questions.length) {
    const r = scoreAssessment(questions, answers);
    return (
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="eyebrow">Your result</p>
        <h1 className="mt-3 text-5xl font-extrabold">{r.score}<span className="text-muted-foreground">/{r.total}</span></h1>
        <ul className="mt-8 grid gap-3">
          {Object.entries(r.byPillar).map(([k, v]) => (
            <li key={k} className="flex items-center gap-4">
              <span className="w-16 text-sm font-semibold">{getPillar(k)?.name}</span>
              <Progress value={(v.correct / v.total) * 100} className="flex-1" />
              <span className="w-10 text-right text-sm text-muted-foreground">{v.correct}/{v.total}</span>
            </li>
          ))}
        </ul>
        <h2 className="mt-12 text-2xl font-bold">Explore next</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {r.weakest.map((s) => <Button key={s} asChild><Link to="/$pillar" params={{ pillar: s }}>{getPillar(s)?.name} pillar</Link></Button>)}
          <Button variant="outline" onClick={() => setLevel(null)}>Try another level</Button>
        </div>
      </div>
    );
  }

  const q = questions[i]!;
  const picked = answers[i];
  const done = picked !== null;
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Question {i + 1} of {questions.length}</span>
        <span className="eyebrow">{getPillar(q.pillar)?.name}</span>
      </div>
      <Progress value={(i / questions.length) * 100} className="mt-3" />
      <h1 className="mt-8 text-2xl font-bold leading-snug md:text-3xl">{q.prompt}</h1>
      <div className="mt-6 grid gap-2">
        {q.options.map((o, k) => (
          <button key={o} type="button" disabled={done}
            onClick={() => setAnswers((a) => a.map((x, j) => (j === i ? k : x)))}
            className={cn("rounded-xl border px-4 py-3 text-left transition-colors",
              !done && "border-border hover:border-primary hover:bg-secondary",
              done && k === q.answer && "border-success bg-success/10",
              done && k !== q.answer && picked === k && "border-destructive bg-destructive/10",
              done && k !== q.answer && picked !== k && "border-border opacity-50")}>
            {o}
          </button>
        ))}
      </div>
      <div aria-live="polite">
        {done && (
          <div className="fade-up mt-6 rounded-xl bg-secondary p-4">
            <p className="font-semibold">{picked === q.answer ? "Correct." : "Not quite."}</p>
            <p className="mt-1 text-sm text-muted-foreground">{q.why}</p>
          </div>
        )}
      </div>
      <div className="mt-8 flex justify-end">
        <Button disabled={!done} onClick={() => setI(i + 1)}>{i === questions.length - 1 ? "See results" : "Next question"}</Button>
      </div>
    </div>
  );
}
