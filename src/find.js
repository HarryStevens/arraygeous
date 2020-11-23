// Returns the value of the first element in an array that passes a test, specified as a function.
export function find(arr, fn){
  let out;
  
  for (let i = 0, l = arr.length; i < l; i++){
    const d = arr[i];
    if (fn(d, i, arr)) {
      out = d;
      break;
    }
  }

  return out;
}