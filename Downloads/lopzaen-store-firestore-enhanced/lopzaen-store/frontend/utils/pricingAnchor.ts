export function pricingAnchor(base: number) {
  const anchor = base + 20;
  return { original: anchor.toFixed(2), current: base.toFixed(2) };
}
