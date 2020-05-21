import { map } from "./map";

// Flattens an array of arrays into a single array.
export function flatten(arr, fn){
  return [].concat.apply([], fn ? map(arr, fn) : arr);
}