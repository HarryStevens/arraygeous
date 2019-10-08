const tape = require("tape"),
    arr = require("../");

tape("every returns true or false depending on whether every item in an array passes a test", test => {
  test.equal(arr.every([1, 1, 2, 2, 3], d => d === 1), false);
  test.equal(arr.every([1, 1, 2, 2, 3], d => d > 0), true);
  test.equal(arr.every([{value: 1}, {value: 1}, {value: 2}, {value: 2}, {value: 3}], d => d.value === 1), false);
  test.equal(arr.every([{value: 1}, {value: 1}, {value: 2}, {value: 2}, {value: 3}], d => d.value > 0), true);
  test.end();
});