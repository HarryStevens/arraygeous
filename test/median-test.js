const tape = require("tape"),
    arr = require("../");

tape("median returns the median of an array according to an option accessor function", test => {
  test.equal(arr.median([2, 1, 400]), 2);
  test.equal(arr.median([2, 1, 3, 400]), 2.5);
  test.equal(isNaN([{value: 2}, {value: 1}, {value: 3}]), true);
  test.equal(arr.median([{value: 1}, {value: 2}, {value: 3}], d => d.value), 2);
  test.equal(arr.median([{value: 2}, {value: 1}, {value: 3}, {value: 400}], d => d.value), 2.5);
  test.equal(arr.median([{value: 2}, {value: 1}, {value: 3}, {value: null}], d => d.value), 2);
  test.end();
});