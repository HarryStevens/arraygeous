// Returns the index of the first element in an array that passes a test, specified as a function.
// Returns -1 if no element passes the test.
export function findIndex(arr, fn){
  let out = -1;
  
  for (let i = 0, l = arr.length; i < l; i++){
    const d = arr[i];
    if (fn(d, i, arr)) {
      out = i;
      break;
    }
  }

  return out;
}