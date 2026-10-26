import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, MessagesSquare, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuizCard } from "@/components/quiz-card";
import { PillarGrid } from "@/components/pillar-grid";
import { pillars } from "@/data/questions";
import { learningPromises } from "@/data/mission";
import { seo } from "@/lib/seo";
import mentorship from "@/assets/mentorship.jpg";

export const Route = createFileRoute("/")({
  head: () => seo("Thinketh — Learning, Life Skills & Mentorship for Class 5–12", "Affordable live online learning with approachable young mentors. Thinketh connects school subjects, confidence, curiosity and life skills, with financial assistance available."),
  component: Home,
});
const all = pillars.flatMap(p => p.questions);
function Home() {
  const day = Math.floor(Date.now() / 86_400_000);
  const qod = all[day % all.length];
  return <>
    <section className="mentor-cover relative isolate overflow-hidden border-b border-border">
      <img src={mentorship} width={1264} height={848} fetchPriority="high" alt="Abstract artwork of soft warm and cool shapes leaning toward one another, suggesting a conversation" className="mentor-photo absolute inset-0 -z-20 h-full w-full object-cover object-right" />
      <div className="mentor-wash absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="max-w-xl fade-up"><p className="eyebrow">Learning + mentorship · Class 5–12</p><h1 className="mt-4 text-5xl font-extrabold md:text-7xl">Thinketh.</h1><h2 className="mt-5 max-w-lg text-3xl font-bold leading-tight md:text-4xl">Don't just learn what to think.<br /><span className="text-primary">Learn how to think.</span></h2><p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">More than tuition. Live online learning that connects school subjects with curiosity, confidence and life — guided by young mentors who listen.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/courses">Explore courses<ArrowRight /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/assessment">Try the free challenge</Link></Button></div><p className="mt-6 text-xs font-semibold text-muted-foreground">Learn from home · Financial aid available · No sign-up to explore</p></div>
        <p className="mt-5 text-right text-[10px] text-muted-foreground">Abstract artwork · Not a photograph</p>
      </div>
    </section>
    <section className="border-b border-border"><div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">{[{icon: MessagesSquare, title: "A question is always welcome", text: "Respectful discussion. No fear of being wrong."}, {icon: Compass, title: "Learning with direction", text: "Strong basics and a wider world of possibilities."}, {icon: HeartHandshake, title: "Opportunity for more families", text: "Affordable stages, financial aid and instalments."}].map(({icon: Icon, title, text}) => <div key={title} className="flex gap-3"><Icon className="mt-1 size-5 shrink-0 text-primary" /><div><h3 className="text-sm font-bold">{title}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p></div></div>)}</div></section>
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2"><div><p className="eyebrow">The Thinketh approach</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">A mentor beside you.<br />A mind of your own.</h2><p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">Children don’t need another reason to fear a wrong answer. They need someone to ask, “What made you think that?” We build understanding through conversation, challenges and the confidence to try again.</p><Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Meet the idea behind Thinketh<ArrowRight className="size-4" /></Link></div>{qod && <QuizCard key={qod.id} question={qod} label="Question of the day" />}</section>
    <section className="border-y border-border bg-secondary/40"><div className="mx-auto max-w-6xl px-5 py-14"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Six connected pillars</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Beyond the textbook.</h2></div><Link to="/pillars" className="text-sm font-semibold text-primary">Explore all pillars →</Link></div><PillarGrid /></div></section>
    <section className="mx-auto max-w-6xl px-5 py-14"><p className="eyebrow">What grows with learning</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Understanding. Character. Possibility.</h2><div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">{learningPromises.map((p, i) => <div key={p.title} className="border-t border-border pt-5"><span className="font-mono text-xs text-primary">0{i + 1}</span><h3 className="mt-3 text-xl font-bold">{p.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p></div>)}</div></section>
    <section className="border-y border-border bg-secondary"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-5 py-12"><div><p className="eyebrow">A fairer starting point</p><h2 className="mt-3 max-w-xl text-3xl font-bold">Talent is everywhere.<br />Guidance should be, too.</h2><p className="mt-4 max-w-xl text-muted-foreground">For families in small towns, rural communities and cities alike. Financial assistance of up to 70% is available, subject to approval.</p></div><Button asChild size="lg"><Link to="/contact">Talk to us about your child<ArrowRight /></Link></Button></div></section>
  </>;
}
