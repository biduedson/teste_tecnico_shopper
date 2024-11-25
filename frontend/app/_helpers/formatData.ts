export const formatData = (date: Date): string => {
  const valiDate = new Date(date);

  if (isNaN(valiDate.getTime())) {
    throw new Error("Data inválida");
  }
  return valiDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
