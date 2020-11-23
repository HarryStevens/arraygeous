import { find } from "./find";
import { includes } from "./includes";

// Returns an array of objects, where each object represents a unique value from an input array, according to an optional accessor, and the number of items that value appears in the array.
export function count(arr, fn){
  let out = [];
  
  for (let i = 0, n = arr.length; i < n; i++){
    const key = fn ? fn(arr[i], i, arr) : arr[i];
    const f = find(out, d0 => d0.key === key);
    
    if (!f) {
      out.push({ key, count: 1});
    }
    else {
      f.count++;
    }
  }
  
  return out;
}