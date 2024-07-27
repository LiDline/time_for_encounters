export default function createDate(s: string) {
  const [hour, min] = s.split(':').map(Number);

  const date = new Date(1970, 0, 1, hour, min);

  return date.getTime();
}
