export function millisToMinutesAndSeconds(ms: number) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (parseInt(seconds) < 10 ? "0" : "") + seconds;
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