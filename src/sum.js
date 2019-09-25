// Returns the sum of an array of numbers.
// You can pass an optional accessor.
// Ignores null values.
export function sum(arr, fn){
  let sum = 0;
  
  for (let i = 0, n = arr.length; i < n; i++){
    const val = fn ? fn(arr[i], i, arr) : arr[i];
    if (val != null && isFinite(val)) sum += val;
  }
  
  return sum;
}