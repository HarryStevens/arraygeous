const tape = require("tape"),
    arr = require("../");

tape("max returns the maximum value of an array according to an option accessor function", test => {
  test.equal(arr.max([1, 1, 2, 2, 3]), 3);
  test.equal(arr.max([{value: 1}, {value: 1}, {value: 2}, {value: 2}, {value: 3}], d => d.value), 3);
  test.equal(arr.max([{value: 1}, {value: null}, {noValue: 2}, {value: 2}, {value: 3}], d => d.value), 3);
  test.end();
});