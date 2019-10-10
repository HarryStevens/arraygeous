const tape = require("tape"),
    arr = require("../");

tape("flatten returns a single array from an array of arrys", test => {
  test.deepEqual(arr.flatten([[1, 1], [2, 2], [3]]), [1, 1, 2, 2, 3]);
  test.end();
});