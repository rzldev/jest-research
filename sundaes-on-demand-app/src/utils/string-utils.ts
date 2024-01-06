export function formatCurrency(num: number): string {
  let moneyFormattingOption = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  };

  return num.toLocaleString("en-US", moneyFormattingOption);
}
