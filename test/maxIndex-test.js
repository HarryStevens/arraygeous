const tape = require("tape"),
    arr = require("../");

tape("maxIndex returns the index of the maximum value of an array according to an option accessor function", test => {
  test.equal(arr.maxIndex([1, 1, 2, 2, 3]), 4);
  test.equal(arr.maxIndex([{value: 1}, {value: 1}, {value: 2}, {value: 2}, {value: 3}], d => d.value), 4);
  test.equal(arr.maxIndex([{value: 1}, {value: null}, {noValue: 2}, {value: 2}, {value: 3}], d => d.value), 4);
  test.end();
});