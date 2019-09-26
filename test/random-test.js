const tape = require("tape"),
    arr = require("../");

// This doesn't test if the output is truly random, but it does test
// that random will never return a value outside of the array and that
// it can return any item in the array.
tape("random returns an item randomly from an array", test => {
  const myArray = [0, 1, 2];
  let has0 = false, has1 = false, has2 = false, outputs = [];

  for (let i = 0; i < 1000; i++){
    const o = arr.random(myArray);
    if (o === 0) has0 = true;
    if (o === 1) has1 = true;
    if (o === 2) has2 = true;
    outputs[i] = myArray.includes(o);
  }
  
  test.equal(has0, true);
  test.equal(has1, true);
  test.equal(has2, true);
  test.equal(outputs.includes(false), false);
  test.end();
});