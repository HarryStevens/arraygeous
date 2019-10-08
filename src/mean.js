// Returns the mean of an array of values. You can map each item in the array to a value with an optional accessor function.
export function mean(arr, fn){
  let sum = 0,
      n = 0;
  
  for (let i = 0, l = arr.length; i < l; i++){
    const val = fn ? fn(arr[i], i, arr) : arr[i];
    if (val != null && isFinite(val)) {
      sum += val;
      n++;
    }
  }
  
  return sum / n;
}