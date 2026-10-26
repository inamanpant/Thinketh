import { describe, expect, it } from "vitest";
import { getAssessment, scoreAssessment, levels } from "@/data/assessment";

describe("assessment", () => {
  it("has 15 questions for every class level", () => {
    for (const l of levels) expect(getAssessment(l.id)).toHaveLength(15);
  });
  it("scores correct answers and counts unanswered as wrong", () => {
    const qs = getAssessment("5-8");
    const answers = qs.map((q, i) => (i < 10 ? q.answer : null));
    expect(scoreAssessment(qs, answers).score).toBe(10);
  });
});
