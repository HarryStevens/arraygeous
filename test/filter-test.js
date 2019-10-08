const tape = require("tape"),
    arr = require("../");

tape("filter returns a new array with every element in an array that passes a test", test => {
  const start = [1, 1, 2, 2, 3];
  test.deepEqual(arr.filter(start, d => d === 1), [1, 1]);
  test.deepEqual(start, start); // start is unmodified
  test.deepEqual(arr.filter([{value: 1, name: "Bob"}, {value: 1, name: "Joe"}, {value: 2, name: "Steve"}], d => d.value < 2), [{value: 1, name: "Bob"}, {value: 1, name: "Joe"}]);
  test.end();
});