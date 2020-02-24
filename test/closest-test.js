const tape = require("tape"),
    arr = require("../");

tape("closest returns the closest element of an array to a value", test => {
  test.equal(arr.closest([1, 2, 3], 1), 1);
  test.equal(arr.closest([1, 2, 3], 1.1), 1);
  test.equal(arr.closest([1, 2, 3], 1.5), 1);
  test.equal(arr.closest([2, 1, 3], 1.5), 2);
  test.equal(arr.closest([{x: 1}, {x: 2}, {x: 3}], 1), null);
  test.equal(arr.closest([{x: 1}, {x: 2}, {x: 3}], 1, d => d.x).x, 1);
  test.equal(arr.closest([{x: 1}, {x: 2}, {x: 3}], 1.1, d => d.x).x, 1);
  test.equal(arr.closest([{x: 1}, {x: 2}, {x: 3}], 1.5, d => d.x).x, 1);
  test.equal(arr.closest([{x: 2}, {x: 1}, {x: 3}], 1.5, d => d.x).x, 2);
  test.equal(arr.closest([1, null, 3], 0), 1);

  test.end();
});