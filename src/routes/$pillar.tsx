import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { QuizCard } from "@/components/quiz-card";
import { Button } from "@/components/ui/button";
import { getPillar } from "@/data/questions";

export const Route = createFileRoute("/$pillar")({
  loader: ({ params }) => {
    const p = getPillar(params.pillar);
    if (!p) throw notFound();
    return { slug: p.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData && getPillar(loaderData.slug);
    if (!p) return { meta: [{ title: "Page not found | Thinketh" }, { name: "robots", content: "noindex" }] };
    const title = `${p.title} | Thinketh`;
    return {
      meta: [
        { title },
        { name: "description", content: p.description },
        { property: "og:title", content: title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PillarPage,
});

function PillarPage() {
  const { slug } = Route.useLoaderData();
  const p = getPillar(slug)!;
  return (
    <article className="mx-auto max-w-4xl px-5 py-16">
      <Link to="/pillars" className="text-sm text-muted-foreground hover:text-primary">← All pillars</Link>
      <p className="eyebrow mt-8">{p.name}</p>
      <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">{p.title}</h1>
      <p className="mt-6 text-lg text-muted-foreground">{p.intro}</p>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Why it matters</h2>
          <p className="mt-3 text-muted-foreground">{p.why}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">What students learn</h2>
          <ul className="mt-3 space-y-2">
            {p.topics.map((t) => (
              <li key={t} className="flex gap-3 text-muted-foreground"><span className="text-primary">—</span>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Try it: three questions</h2>
        <p className="mt-2 text-sm text-muted-foreground">Pick an answer to see the reasoning.</p>
        <div className="mt-6 grid gap-5">
          {p.questions.map((q, i) => <QuizCard key={`${slug}-${q.id}`} question={q} label={`Question ${i + 1}`} />)}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-xl font-bold">Keep exploring</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {p.related.map((r) => {
            const rp = getPillar(r)!;
            return <Button key={r} asChild variant="outline"><Link to="/$pillar" params={{ pillar: r }}>{rp.name}: {rp.tagline}</Link></Button>;
          })}
          <Button asChild><Link to="/assessment">Take the full assessment</Link></Button>
        </div>
      </section>
    </article>
  );
}
