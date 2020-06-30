import { map } from "./map";

// Returns lagged and iterated differences of an array of numbers.
// You can map each item in the array to a new value with an optional accessor function.
// You can pass a third a third argument, lag, which is an integer indicating how many indices back to calculate the lag
export function diff(arr, fn, lag = 1){
  const input = fn ? map(arr, fn) : arr,
        out = [],
        n = arr.length;
  
  for (let i = 0; i < n; i++){
    const d = input[i];
    out[i] = i < lag ? d : d - input[i - lag];
  }
  
  return out;
}