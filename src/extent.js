// Returns the minimum and maximum values, represented as [min, max], of an array according to an optional accessor function.
export function extent(arr, fn){
  let min = Infinity,
      max = -Infinity;
  
  for (let i = 0, n = arr.length; i < n; i++){
    const d = fn ? fn(arr[i], i, arr) : arr[i];
    if (d != null && isFinite(d)){
      if (d < min) min = d;
      if (d > max) max = d;      
    }
  }
  
  return [min, max];
}