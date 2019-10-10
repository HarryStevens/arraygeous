// Flattens an array of arrays into a single array.
export function flatten(arr){
  return [].concat.apply([], arr);
}