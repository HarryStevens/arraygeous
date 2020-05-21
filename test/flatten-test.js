const tape = require("tape"),
    arr = require("../");

tape("flatten returns a single array from an array of arryas", test => {
  test.deepEqual(arr.flatten([[1, 1], [2, 2], [3]]), [1, 1, 2, 2, 3]);
  test.end();
});

tape("flatten accepts an accessor", test => {
  test.deepEqual(arr.flatten([{data: [1, 1]}, {data: [2, 2]}, {data: [3]}], d => d.data), [1, 1, 2, 2, 3]);
  test.end();
});