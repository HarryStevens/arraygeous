// Returns a new array with the result of calling an accessor function for each array element.
export function map(arr, fn){
  let out = [];
  
  for (let i = 0, l = arr.length; i < l; i++){
    out.push(fn(arr[i], i, arr));
  }
  
  return out;
}