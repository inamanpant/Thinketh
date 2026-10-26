import { describe, expect, it } from "vitest";
import { courseStages, fullFeeFor, maximumAidPercent } from "../data/courses";

describe("confirmed course pricing", () => {
  it("offers up to 70 percent financial assistance", () => {
    expect(maximumAidPercent).toBe(70);
    expect(fullFeeFor(4499) * 0.3).toBeCloseTo(4499, 8);
    expect(fullFeeFor(4999) * 0.3).toBeCloseTo(4999, 8);
  });
  it("sets Foundation assisted total to 4499", () => {
    expect(courseStages.find(s => s.name === "Foundation")?.assistedFee).toBe(4499);
  });
  it("sets Intermediate assisted total to 4999", () => {
    expect(courseStages.find(s => s.name === "Intermediate")?.assistedFee).toBe(4999);
  });
  it("sets Advanced assisted total to 4999", () => {
    expect(courseStages.find(s => s.name === "Advanced")?.assistedFee).toBe(4999);
  });
  it("makes instalments available for all three stages", () => {
    expect(courseStages.map(s => [s.name, s.instalments])).toEqual([["Foundation", true], ["Intermediate", true], ["Advanced", true]]);
  });
});