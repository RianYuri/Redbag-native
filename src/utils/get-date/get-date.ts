export const getDate = () => {
  const date = new Date();
  const day = date.getDate();

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ] as string[];
  const monthName = months[date.getMonth()];

  return `${day} de ${monthName}`;
};
