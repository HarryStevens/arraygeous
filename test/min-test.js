const tape = require("tape"),
    arr = require("../");

tape("min returns the minimum value of an array according to an option accessor function", test => {
  test.equal(arr.min([1, 1, 2, 2, 3]), 1);
  test.equal(arr.min([{value: 1}, {value: 1}, {value: 2}, {value: 2}, {value: 3}], d => d.value), 1);
  test.equal(arr.min([{value: 1}, {value: null}, {noValue: 2}, {value: 2}, {value: 3}], d => d.value), 1);
  test.end();
});