const tape = require("tape"),
    arr = require("../");

tape("meanroll returns the rolling average for each item in an array according to an optional accessor function", test => {
  test.deepEqual(arr.meanroll([1, 2, 3], 1), [1, 2, 3]);
  test.deepEqual(arr.meanroll([{value: 1}, {value: 2}, {value: 3}], 1, d => d.value), [1, 2, 3]);
  test.deepEqual(arr.meanroll([1, 2, 3, 4], 3), [1, 1.5, 2, 3]);
  test.end();
});