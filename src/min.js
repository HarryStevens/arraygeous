// Returns the minimum value of an array according to an optional accessor function.
export function min(arr, fn){
  let min = Infinity;
  
  for (let i = 0, n = arr.length; i < n; i++){
    const d = fn ? fn(arr[i], i, arr) : arr[i];
    if (d != null && isFinite(d) && d < min) min = d;
  }
  
  return min;
}