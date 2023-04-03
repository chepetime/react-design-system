/**
 * Generates an array of numbers from `start` to `end` inclusive
 * @param start 
 * @param end
 */
export function range(start : number, end : number) : number[] {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}