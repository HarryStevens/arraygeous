// Returns the maximum of an array of values.
// You can map each item in the array to a value with an optional accessor function.
// Ignores invalid values (null, undefined, NaN, Infinity).
export function deviation(arr, fn){
  let delta, count = 0, sum = 0, mean = 0;
  
  for (let i = 0; i < arr.length; i++){
    const d = fn ? fn(arr[i], i, arr) : arr[i];
    if (d != null && isFinite(d)){
      delta = d - mean;
      mean += delta / ++count;
      sum += delta * (d - mean);
    }
  }
  
  if (count > 1) return Math.sqrt(sum / (count - 1));
}