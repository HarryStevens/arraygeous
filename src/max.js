// Returns the maximum value of an array according to an optional accessor function.
export function max(arr, fn){
  let max = -Infinity;
  
  for (let i = 0, n = arr.length; i < n; i++){
    const d = fn ? fn(arr[i], i, arr) : arr[i];
    if (d != null && isFinite(d) && d > max) max = d;
  }
  
  return max;
}