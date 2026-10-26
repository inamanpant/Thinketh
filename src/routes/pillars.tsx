import { createFileRoute } from "@tanstack/react-router";
import { PillarGrid } from "@/components/pillar-grid";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/pillars")({
  head: () =>
    seo(
      "Six Learning Pillars: Think, Life, Money, Civic, Tech, World | Thinketh",
      "Explore Thinketh's six learning pillars for students: critical thinking, life skills, financial literacy, civics, digital safety and general knowledge.",
    ),
  component: () => (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow">Explore</p>
      <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">Six pillars of thinking well</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">Each pillar has free practice questions with the reasoning explained. No sign-up needed.</p>
      <div className="mt-10"><PillarGrid /></div>
    </div>
  ),
});
