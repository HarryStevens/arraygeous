// Returns a boolean representing whether all items in an array pass a test, provided as an accessor function.
export function every(arr, fn){
  let out = true;
  
  for (let i = 0, l = arr.length; i < l; i++){
    if (!fn(arr[i], i, arr)) {
      out = false;
      break;
    }
  }
  
  return out;
}