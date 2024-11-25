export const formatTimetotal = (minutes: number) => {
  const hours = Math.floor(minutes / 3600);
  const mins = Math.floor((minutes % 3600) / 60);
  return `${hours} ${hours > 1 ? "Horas" : "hora"} e 
    ${mins} ${mins > 1 ? "minutos." : "minuto."}`;
};
