const tape = require("tape"),
    arr = require("../");

tape("cumsum returns the cumulative sum of an array according to an optional accessor function", test => {
  test.deepEqual(arr.cumsum([1, 2, 3]), [1, 3, 6]);
  test.deepEqual(arr.cumsum([1, 2, 3], d => d * 2), [2, 6, 12]);
  test.deepEqual(arr.cumsum([{value: 1}, {value: 2}, {value: 3}], d => d.value), [1, 3, 6]);

  test.end();
});

tape("cumsum ignores invalid values", test => {
  test.deepEqual(arr.cumsum([1, null, 2, Infinity, 3, NaN]), [1, 1, 3, 3, 6, 6]);

  test.end();
});