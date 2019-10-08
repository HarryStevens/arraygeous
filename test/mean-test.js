const tape = require("tape"),
    arr = require("../");

tape("mean returns the mean of an array according to an option accessor function", test => {
  test.equal(arr.mean([1, 2, 3]), 2);
  test.equal(arr.mean([{value: 1}, {value: 2}, {value: 3}], d => d.value), 2);
  test.equal(isNaN(arr.mean([{value: 1}, {value: 2}, {value: 3}])), true);
  test.equal(arr.mean([{value: null}, {value: 1}, {value: 2}, {value: 3}], d => d.value), 2);
  test.end();
});