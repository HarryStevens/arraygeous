const tape = require("tape"),
    arr = require("../");

tape("mode returns the mode or modes, represented as an array of numbers, of an array of values mapped to an optional accessor function", test => {
  test.equal(arr.mode([1, 2, 3]), undefined);
  test.equal(arr.mode([{value: 1}, {value: 2}, {value: 3}], d => d.value), undefined);
  test.deepEqual(arr.mode([1, 2, 3, 2]), [2]);
  test.deepEqual(arr.mode([1, 2, 3, 2, 1]), [1, 2]);
  test.equal(arr.mode([1, 2, 3, 2, 1, 3]), undefined);
  test.deepEqual(arr.mode([1, 2, 3, 2, 1, null, undefined, "foo"]), [1, 2]);
  test.deepEqual(arr.mode([{value: 1}, {value: 2}, {value: 3}, {value: 2}], d => d.value), [2]);

  test.end();
});