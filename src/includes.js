// Determines whether an array contains a specified element.
// This method returns true if the array contains the element, and false if not.
// The optional start parameter, which defaults 0, specifies at which position in the array to start the search.
export function includes(arr, value, start = 0){
  let includes = false;

  for (let i = start; i < arr.length; i++){
    if (arr[i] === value){
      includes = true;
      break;
    }
  }

  return includes;
}