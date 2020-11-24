// Returns the index of the minimum value of an array according to an optional accessor function.
export function minIndex(arr, fn){
  let min = Infinity, minIndex = -1;
  
  for (let i = 0, n = arr.length; i < n; i++){
    const d = fn ? fn(arr[i], i, arr) : arr[i];
    if (d != null && isFinite(d) && d < min) {
      min = d;
      minIndex = i;
    }
  }
  
  return minIndex;
}