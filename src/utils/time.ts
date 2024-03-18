/**
 * Parse milliseconds to minutes:seconds
 * @param {number} ms - Milliseconds to parse.
 * @return {string} String with parsed time.
 */
export function millisToMinutesAndSeconds(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  let seconds = ((ms % 60000) / 1000).toFixed(0);
  if (parseInt(seconds) < 10) {
    seconds = "0" + seconds;
  }
  if (seconds === "60") {
    seconds = "00";
  }
  return minutes + ":" + seconds;
}

export function mapRange(
  value: number,
  minA: number,
  maxA: number,
  minB: number,
  maxB: number
) {
  value = Math.min(Math.max(value, minA), maxA);
  const percentage = (value - minA) / (maxA - minA);
  const result = percentage * (maxB - minB) + minB;
  return result;
}