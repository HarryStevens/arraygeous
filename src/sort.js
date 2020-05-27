// Sorts an array according to an optional accessor function.
// Defaults to ascending order, but you can return descending order by specifying the third argument, order, as the string "desc".
// Dependencies: every, filter
import { every } from "./every";
import { flatten } from "./flatten";

export function sort(arr, fn, order){
  const copy = arr.slice(),
        invalid = [],
        valid = [];

  let numSort = true;

  // Separate invalid values
  for (let iter = 0, len = copy.length; iter < len; iter++){
    const d = copy[iter], value = fn ? fn(d, iter, copy) : d;
    if (fn ? fn(d, iter, copy) : d) {
      valid.push(d);

      if (typeof val !== "number") numSort = false;
    }
    else {
      invalid.push(d);
    }
  }

  // Sort valid objects
  let i = 0, output = [];
  
  if (numSort){
    output = valid.sort((a, b) => {
      const da = fn ? fn(a, i + 1, valid) : a;
      const db = fn ? fn(b, i, valid) : b;
      i++;
      
      return order === "desc" ? db - da : da - db;
    });
  }
  
  else {
    output = valid.sort((a, b) => {
      const da = fn ? fn(a, i + 1, valid) : a;
      const db = fn ? fn(b, i, valid) : b;
      i++;
      
      if (order === "desc"){
        return da < db ? 1 : da > db ? -1 : 0;
      }
      else {
        return da < db ? -1 : da > db ? 1 : 0;
      }
    });
  }

  return flatten([output, invalid]);
}