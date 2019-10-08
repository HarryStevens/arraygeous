import { filter } from "./filter";
import { map } from "./map";
import { sort } from "./sort";

// Returns the median of an array of values. You can map each item in the array to a value with an optional accessor function.
export function median(arr, fn){
  const copy = filter(sort(fn ? map(arr, fn) : arr.slice()), d => d != null && isFinite(d)),
        i = copy.length / 2;
  
  return i % 1 == 0 ? (copy[i - 1] + copy[i]) / 2 : copy[Math.floor(i)];
}