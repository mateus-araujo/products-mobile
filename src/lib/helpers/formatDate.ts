export function formatDate(date: string) {
  const dateFormatted = new Date(date).toLocaleString('en-US');

  return dateFormatted;
}
