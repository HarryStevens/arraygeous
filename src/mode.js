import { filter } from "./filter";
import { findIndex } from "./findIndex";
import { map } from "./map";
import { unique } from "./unique";

// Returns the mode or modes, represented as an array of numbers, of an array of values mapped to an optional accessor function.
// If there is no mode, returns undefined.
export function mode(arr, fn){
  let vals = [],
      max = 0,
      n = 0;
  
  for (let i = 0, l = arr.length; i < l; i++){
    const val = fn ? fn(arr[i], i, arr) : arr[i];
    
    if (val != null && isFinite(val)) {
      let count = 1;
      const index = findIndex(vals, v => v[0] === val);
      
      if (index === -1) vals.push([val, count]);
      else count = ++vals[index][1];
      
      if (count > max) max = count;
    }
  }
  
  return unique(vals, d => d[1]).length == 1 ?
         undefined :
         map(filter(vals, d => d[1] === max), d => d[0]);
}