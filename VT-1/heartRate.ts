export type HeartRateLimits = {
  lower: number;
  upper: number;
};

export function calculateHeartRateLimits(ageInput: string): HeartRateLimits {
  const age = Number(ageInput);

  if (age <= 0 || !Number.isFinite(age)) {
    return { lower: 0, upper: 0 };
  }

  const estimatedMaximum = 220 - age;
  return {
    lower: estimatedMaximum * 0.65,
    upper: estimatedMaximum * 0.85,
  };
}
