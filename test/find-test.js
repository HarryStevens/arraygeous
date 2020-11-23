const tape = require("tape"),
    arr = require("../");

tape("filter returns a new array with every element in an array that passes a test", test => {
  const start = [1, 1, 2, 2, 3];
  test.equal(arr.find(start, d => d === 1), 1);
  test.equal(arr.find(start, d => d === 2), 2);
  test.equal(arr.find(start, d => d === 3), 3);
  test.equal(arr.find(start, d => d === 4), undefined);
  test.deepEqual(start, start); // start is unmodified
  test.deepEqual(arr.find([{value: 1, name: "Bob"}, {value: 1, name: "Joe"}, {value: 2, name: "Steve"}], d => d.value < 2), {value: 1, name: "Bob"});
  test.deepEqual(arr.find([{value: 1, name: "Bob"}, {value: 1, name: "Joe"}, {value: 2, name: "Steve"}], d => d.value > 1), {value: 2, name: "Steve"});
  test.end();
});