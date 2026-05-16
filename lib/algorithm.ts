export type Trait = 'valor' | 'honor' | 'oath' | 'justice' | 'loyalty' | 'mercy';

export type RawScores = Record<Trait, number>;

export interface SoulResult {
  trait: Trait;
  percentage: number;
  label: string;
}

const TRAIT_LABELS: Record<Trait, string> = {
  valor: '英勇',
  honor: '荣誉',
  oath: '誓约',
  justice: '公义',
  loyalty: '忠诚',
  mercy: '怜悯',
};

export function calculateChivalry(rawScores: RawScores): SoulResult[] {
  const effectiveScores: Record<Trait, number> = {
    valor: Math.max(0, rawScores.valor - 8),
    honor: Math.max(0, rawScores.honor - 8),
    oath: Math.max(0, rawScores.oath - 8),
    justice: Math.max(0, rawScores.justice - 8),
    loyalty: Math.max(0, rawScores.loyalty - 8),
    mercy: Math.max(0, rawScores.mercy - 8),
  };

  const totalCapacity = Object.values(effectiveScores).reduce(
    (sum, score) => sum + score,
    0,
  );

  if (totalCapacity === 0) {
    return Object.keys(effectiveScores).map((key) => ({
      trait: key as Trait,
      percentage: 0,
      label: TRAIT_LABELS[key as Trait],
    }));
  }

  const results = Object.entries(effectiveScores).map(([trait, score]) => {
    const rawPercent = (score / totalCapacity) * 100;
    return {
      trait: trait as Trait,
      label: TRAIT_LABELS[trait as Trait],
      percentage: Math.floor(rawPercent),
      remainder: rawPercent - Math.floor(rawPercent),
    };
  });

  const currentTotal = results.reduce((sum, r) => sum + r.percentage, 0);
  const shortfall = 100 - currentTotal;

  results.sort((a, b) => b.remainder - a.remainder);

  for (let i = 0; i < shortfall; i++) {
    results[i].percentage += 1;
  }

  return results
    .map(({ trait, percentage, label }) => ({ trait, percentage, label }))
    .sort((a, b) => b.percentage - a.percentage);
}
