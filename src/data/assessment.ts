import { pillars, type PillarSlug, type Question } from "./questions";

export type Level = "5-8" | "9-10" | "11-12";
export const levels: { id: Level; label: string }[] = [
  { id: "5-8", label: "Class 5–8" },
  { id: "9-10", label: "Class 9–10" },
  { id: "11-12", label: "Class 11–12" },
];

export type AssessmentQuestion = Question & { pillar: PillarSlug };

const q = (pillar: PillarSlug, id: string, prompt: string, options: string[], answer: number, why: string): AssessmentQuestion => ({ pillar, id, prompt, options, answer, why });

const base: AssessmentQuestion[] = pillars.flatMap((p) => p.questions.map((x) => ({ ...x, pillar: p.slug })));

const senior: AssessmentQuestion[] = [
  q("think", "s1", "A survey of gym members finds most people exercise daily. What's the problem with saying 'most Indians exercise daily'?", ["Nothing", "The sample isn't representative", "Surveys are always fake", "The number is too small to read"], 1, "Gym members are already likely to exercise. A biased sample can't describe everyone."),
  q("money", "s2", "An app offers a loan 'at just 2% a month'. Roughly what is that per year?", ["2%", "12%", "About 27% with compounding", "0.2%"], 2, "Monthly rates add up fast. 2% a month compounds to about 26.8% a year."),
  q("tech", "s3", "Why do recommendation feeds often show you more of what you already like?", ["They are random", "They are optimised to keep you watching", "The government decides", "Your phone is broken"], 1, "Feeds learn what holds your attention. That can narrow what you see — a 'filter bubble'."),
  q("civic", "s4", "What does the Right to Information (RTI) Act let citizens do?", ["Read anyone's private messages", "Request information from public authorities", "Skip taxes", "Make new laws"], 1, "RTI lets citizens ask government offices for records, usually within 30 days."),
  q("world", "s5", "If the RBI raises interest rates, what usually happens to borrowing?", ["It rises", "It becomes more expensive, so it slows", "Nothing", "Loans become free"], 1, "Higher rates make loans costlier, which cools spending and helps control inflation."),
];

/** 15 questions per level. Senior levels swap in harder questions. */
export function getAssessment(level: Level): AssessmentQuestion[] {
  if (level === "5-8") return base.slice(0, 15);
  if (level === "9-10") return [...base.slice(0, 10), ...senior];
  return [...senior, ...base.slice(5, 15)];
}

export type Result = {
  score: number;
  total: number;
  byPillar: Record<string, { correct: number; total: number }>;
  weakest: PillarSlug[];
};

export function scoreAssessment(questions: AssessmentQuestion[], answers: (number | null)[]): Result {
  const byPillar: Result["byPillar"] = {};
  let score = 0;
  questions.forEach((qq, i) => {
    const b = (byPillar[qq.pillar] ??= { correct: 0, total: 0 });
    b.total++;
    if (answers[i] === qq.answer) {
      b.correct++;
      score++;
    }
  });
  const weakest = (Object.entries(byPillar) as [PillarSlug, { correct: number; total: number }][])
    .sort((a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total)
    .slice(0, 2)
    .map(([k]) => k);
  return { score, total: questions.length, byPillar, weakest };
}
