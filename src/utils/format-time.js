/**
 * Format a datetime string into 24 hour time
 * @param {String} dateString The datetime that needs converting (E.G. 2020-10-31T17:00)
 * @returns {String} A 24 hour timestamp (E.G. 12:34)
 */
export default function formatTime(dateString) {
  const parsedDate = new Date(dateString);
  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}
