const tape = require("tape"),
    arr = require("../");

tape("unique returns the unique values of an array", test => {
  test.deepEqual(arr.unique([1, 1, 2, 2, 3]), [1, 2, 3]);
  test.deepEqual(arr.unique([{ value: 1 }, { value: 1 }, { value: 2 }, { value: 2 }, { value: 3 }], d => d.value), [1, 2, 3]);
  test.end();
});