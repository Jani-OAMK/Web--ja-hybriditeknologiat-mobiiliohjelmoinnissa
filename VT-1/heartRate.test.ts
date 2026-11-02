import { describe, expect, it } from "vitest";
import { calculateHeartRateLimits } from "./heartRate";

describe("calculateHeartRateLimits", () => {
  it("calculates lower and upper limits from a positive age", () => {
    expect(calculateHeartRateLimits("20")).toEqual({
      lower: 130,
      upper: 170,
    });
  });

  it("returns zero limits when the age is empty, invalid, or non-positive", () => {
    expect(calculateHeartRateLimits("")).toEqual({ lower: 0, upper: 0 });
    expect(calculateHeartRateLimits("abc")).toEqual({ lower: 0, upper: 0 });
    expect(calculateHeartRateLimits("-1")).toEqual({ lower: 0, upper: 0 });
  });
});
