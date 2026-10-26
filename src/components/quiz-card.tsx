import { useState } from "react";
import type { Question } from "@/data/questions";
import { cn } from "@/lib/utils";

export function QuizCard({ question, label, onAnswer }: { question: Question; label?: string; onAnswer?: (i: number) => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const done = picked !== null;
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      {label && <p className="eyebrow mb-3">{label}</p>}
      <h3 className="text-lg font-semibold leading-snug md:text-xl">{question.prompt}</h3>
      <div className="mt-5 grid gap-2" role="group" aria-label="Answer options">
        {question.options.map((o, i) => {
          const correct = i === question.answer;
          return (
            <button
              key={o}
              type="button"
              disabled={done}
              onClick={() => {
                setPicked(i);
                onAnswer?.(i);
              }}
              className={cn(
                "rounded-xl border px-4 py-3 text-left text-sm transition-colors md:text-base",
                !done && "border-border hover:border-primary hover:bg-secondary",
                done && correct && "border-success bg-success/10 text-foreground",
                done && !correct && picked === i && "border-destructive bg-destructive/10",
                done && !correct && picked !== i && "border-border opacity-50",
              )}
            >
              {o}
            </button>
          );
        })}
      </div>
      <div aria-live="polite">
        {done && (
          <div className="fade-up mt-5 rounded-xl bg-secondary p-4 text-sm leading-relaxed">
            <p className="font-semibold">{picked === question.answer ? "Correct." : "Not quite."}</p>
            <p className="mt-1 text-muted-foreground">{question.why}</p>
          </div>
        )}
      </div>
    </div>
  );
}
