export function adjustedPrice(p: number, q: number) {
  const price = p * (Math.log(q + 1) / Math.log(p + q + 1));

  return price.toFixed(2);
}
