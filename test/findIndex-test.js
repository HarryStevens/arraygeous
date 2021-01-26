const tape = require("tape"),
    arr = require("../");

tape("findIndex returns the index of the first element in an array that passes a test, specified as a function.", test => {
  const start = [1, 1, 2, 2, 3];
  test.equal(arr.findIndex(start, d => d === 1), 0);
  test.equal(arr.findIndex(start, d => d === 2), 2);
  test.equal(arr.findIndex(start, d => d === 3), 4);
  test.equal(arr.findIndex(start, d => d === 4), -1);
  test.deepEqual(start, start); // start is unmodified
  test.deepEqual(arr.findIndex([{value: 1, name: "Bob"}, {value: 1, name: "Joe"}, {value: 2, name: "Steve"}], d => d.value < 2), 0);
  test.deepEqual(arr.findIndex([{value: 1, name: "Bob"}, {value: 1, name: "Joe"}, {value: 2, name: "Steve"}], d => d.value > 1), 2);
  test.end();
});