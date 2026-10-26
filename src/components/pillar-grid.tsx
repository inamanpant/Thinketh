import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "@/data/questions";
import { cn } from "@/lib/utils";

const toneText = { primary: "text-primary", accent: "text-accent", highlight: "text-highlight" } as const;

export function PillarGrid() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((p, i) => (
        <li key={p.slug} className="bg-background">
          <Link to="/$pillar" params={{ pillar: p.slug }} className="group flex h-full flex-col p-7 transition-colors hover:bg-card">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>
            <h3 className={cn("mt-8 text-4xl font-extrabold uppercase", toneText[p.tone])}>{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
