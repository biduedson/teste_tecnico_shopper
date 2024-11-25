export const formatKm = (value: number): string => {
  return `Km: ${(value / 1000).toFixed(2)}`;
};
