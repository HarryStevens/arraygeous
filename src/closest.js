// Finds the closest element in an array to a value.
// The array can be mapped to an optional accessor function.
export function closest(arr, val, fn){
  let min = Infinity, minI = null;
  
  for (let i = 0, n = arr.length; i < n; i++){
    const d = fn ? fn(arr[i]) : arr[i];
    if (d != null && isFinite(d)){
      const diff = Math.abs((d) - val);
      if (diff < min){
        min = diff;
        minI = i;
      }
    }
  }
  
  return minI !== null ? arr[minI] : minI;
}