// Returns the index of the maximum value of an array according to an optional accessor function.
export function maxIndex(arr, fn){
  let max = -Infinity, maxIndex = -1;
  
  for (let i = 0, n = arr.length; i < n; i++){
    const d = fn ? fn(arr[i], i, arr) : arr[i];
    if (d != null && isFinite(d) && d > max) {
      max = d;
      maxIndex = i;
    }
  }
  
  return maxIndex;
}