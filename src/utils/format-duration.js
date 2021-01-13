/**
 * Format the duration of a flight
 * @param {Number} duration The flight duration (in minutes)
 * @returns {String} A flight duration (E.G. "0h 55" or "1h 00")
 */
export default function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}h ${minutes < 10 ? `0${minutes}` : minutes}`;
}
