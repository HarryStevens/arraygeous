import { includes } from "./includes";

// Returns the unique values of an array of objects according to an optional accessor.
export function unique(arr, fn){
  let out = [];
  
  for (let i = 0, n = arr.length; i < n; i++){
    const d = fn ? fn(arr[i], i, arr) : arr[i];
    if (!includes(out, d)) out.push(d);
  }
  
  return out;
}