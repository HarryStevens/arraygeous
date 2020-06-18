import { map } from "./map";
import { mean } from "./mean";

// For each item in an array of values, calculates the rolling average of n items.
// You can optionally map an array of objects to an array of values with an accessor function.
export function meanroll(arr, n, fn){
  const output = [];
  
  if (fn) arr = map(arr, fn);
  
  for (let i = 1, l = arr.length; i <= l; i++){
    output[i - 1] = mean(arr.slice(Math.max(0, i - n), i));
  }
  
  return output;
}