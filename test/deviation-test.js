const tape = require("tape"),
    arr = require("../");

tape("deviation returns the standard deviation of an array according to an option accessor function", test => {
  test.equal(arr.deviation([1, 2, 3]), 1);
  test.equal(arr.deviation([1, 2, 3, null, undefined, Infinity]), 1);
  test.equal(arr.deviation([9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4]), 3.0607876523260447);
  test.equal(arr.deviation([{"x":9},{"x":2},{"x":5},{"x":4},{"x":12},{"x":7},{"x":8},{"x":11},{"x":9},{"x":3},{"x":7},{"x":4},{"x":12},{"x":5},{"x":4},{"x":10},{"x":9},{"x":6},{"x":9},{"x":4}], d => d.x), 3.0607876523260447);
  test.equal(arr.deviation([null, undefined, Infinity]), undefined);
  test.end();
});