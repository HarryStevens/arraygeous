const tape = require("tape"),
    arr = require("../");

tape("includes returns true or false depending on whether an array includes a value", test => {
  test.equal(arr.includes([1, 1, 2, 2, 3], 1), true);
  test.equal(arr.includes([1, 1, 2, 2, 3], "Hello"), false);
  test.equal(arr.includes([1, 1, 2, 2, 3], 4), false);
  test.equal(arr.includes([1, 1, 2, 2, 3], 2, 3), true);
  test.equal(arr.includes([1, 1, 2, 2, 3], 2, 4), false);
  test.end();
});