// Returns a boolean representing whether an array includes a value.
export function some(arr, fn){
  let out = false,
      i = 0;
  
  for (let i = 0, l = arr.length; i < l; i++){
    if (fn(arr[i], i, arr)) {
      out = true;
      break;
    }
  }
  
  return out;
}