const tape = require("tape"),
    arr = require("../");

tape("every returns true or false depending on whether every item in an array passes a test", test => {
  test.equal(arr.some([1, 1, 2, 2, 3], d => d === 1), true);
  test.equal(arr.some([1, 1, 2, 2, 3], d => d < 0), false);
  test.equal(arr.some([{value: 1}, {value: 1}, {value: 2}, {value: 2}, {value: 3}], d => d.value === 1), true);
  test.equal(arr.some([{value: 1}, {value: 1}, {value: 2}, {value: 2}, {value: 3}], d => d.value < 0), false);
  test.end();
});