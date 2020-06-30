// Returns the cumulative sum of an array.
// You can map each item in the array to a value with an optional accessor function.
// Ignores invalid values (null, undefined, NaN, Infinity).
export function cumsum(arr, fn){
  const out = [],
        n = arr.length;
  
  for (let i = 0; i < n; i++){
    let d = fn ? fn(arr[i], i, arr) : arr[i];
    if (d == null || !isFinite(d)) d = 0;
    out[i] = i === 0 ? d : d + out[i - 1];
  }
  
  return out;
}