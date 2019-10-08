// Sorts an array according to an optional accessor function.
// Defaults to ascending order, but you can return descending order by specifying the third argument, order, as the string "desc".
// Dependencies: every
import { every } from "./every";

export function sort(arr, fn, order){
  const copy = arr.slice(),
        numSort = every(copy, (d, i, e) => typeof (fn ? fn(d, i, e) : d) === "number");
  
  let i = 0;
  
  if (numSort){
    return copy.sort((a, b) => {
      const da = fn ? fn(a, i + 1, copy) : a;
      const db = fn ? fn(b, i, copy) : b;
      i++;
      
      return order === "desc" ? db - da : da - db;
    });
  }
  
  else {
    return copy.sort((a, b) => {
      const da = fn ? fn(a, i + 1, copy) : a;
      const db = fn ? fn(b, i, copy) : b;
      i++;
      
      if (order === "desc"){
        return da < db ? 1 : da > db ? -1 : 0;
      }
      else {
        return da < db ? -1 : da > db ? 1 : 0;
      }
    });
  }
}