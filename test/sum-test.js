const tape = require("tape"),
    arr = require("../");

tape("sum returns the sum of an array of values", test => {
  test.equal(arr.sum([1, 1, 2, 2, 3]), 9);
  test.equal(arr.sum([{ value: 1 }, { value: 1 }, { value: 2 }, { value: 2 }, { value: 3 }], d => d.value), 9);
  test.equal(arr.sum([1, 1, 2, 2, 3, null, undefined]), 9);
  test.equal(arr.sum([{value: null}, {val: 3}, { value: 1 }, { value: 1 }, { value: 2 }, { value: 2 }, { value: 3 }], d => d.value), 9);
  test.end();
});