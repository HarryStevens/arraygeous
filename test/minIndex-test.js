const tape = require("tape"),
    arr = require("../");

tape("minIndex returns the index of the minimum value of an array according to an option accessor function", test => {
  test.equal(arr.minIndex([1, 1, 2, 2, 3]), 0);
  test.equal(arr.minIndex([{value: 1}, {value: 1}, {value: 2}, {value: 2}, {value: 3}], d => d.value), 0);
  test.equal(arr.minIndex([{value: 1}, {value: null}, {noValue: 2}, {value: 2}, {value: 3}], d => d.value), 0);
  test.end();
});