const tape = require("tape"),
    arr = require("../");

tape("extent returns the extent of an array according to an option accessor function", test => {
  test.deepEqual(arr.extent([1, 1, 2, 2, 3]), [1, 3]);
  test.deepEqual(arr.extent([{value: 1}, {value: 1}, {value: 2}, {value: 2}, {value: 3}], d => d.value), [1, 3]);
  test.deepEqual(arr.extent([{value: 1}, {value: null}, {noValue: 2}, {value: 2}, {value: 3}], d => d.value), [1, 3]);
  test.end();
});