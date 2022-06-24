export function currencyFormat(value: number): string {
  return `R$ ${value.toFixed(2)}`;
}
