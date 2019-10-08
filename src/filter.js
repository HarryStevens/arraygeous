// Returns a new array with every element in an array that passes a test, specified as a function.
export function filter(arr, fn){
  let out = [];
  
  for (let i = 0, l = arr.length; i < l; i++){
    const d = arr[i];
    if (fn(d, i, arr)) out.push(d);
  }

  return out;
}