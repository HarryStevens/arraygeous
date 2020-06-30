const tape = require("tape"),
    arr = require("../");

tape("diff returns the lagged and iterated difference of an array of values according to an optional accessor function and lag integer", test => {
  test.deepEqual(arr.diff([1, 2, 3]), [1, 1, 1]);
  test.deepEqual(arr.diff([1, 2, 3], d => d * 2), [2, 2, 2]);
  test.deepEqual(arr.diff([{value: 1}, {value: 2}, {value: 3}], d => d.value), [1, 1, 1]);
  test.deepEqual(arr.diff([1, 2, 3], null, 2), [1, 2, 2]);

  test.end();
});