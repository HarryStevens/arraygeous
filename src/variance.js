import { mean } from "./mean";

// Returns the variance of an array of values.
// You can map each item in the array to a value with an optional accessor function.
// Ignores invalid values (null, undefined, NaN, Infinity).
export function variance(arr, fn){
  let n = 0, m = mean(arr, fn), s = 0;
  
  for (let i = 0; i < arr.length; i++){
    const d = fn ? fn(arr[i], i, arr) : arr[i];
    if (d != null && isFinite(d)){
      s += (d - m) ** 2;
      n++;
    }
  }
  
  if (n > 1) return s / (n - 1);
}