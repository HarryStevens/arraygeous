const tape = require("tape"),
    arr = require("../");

tape("sort sorts an array", test => {
  test.deepEqual(arr.sort([1, 3, 2, 6, 5, 4]), [1, 2, 3, 4, 5, 6]);
  test.deepEqual(arr.sort([1, 3, 2, 6, 5, 4], null, "desc"), [6, 5, 4, 3, 2, 1]);
  test.deepEqual(arr.sort([{value: 1}, {value: 3}, {value: 2}, {value: 6}, {value: 5}, {value: 4}], d => d.value), [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}]);
  test.deepEqual(arr.sort([{value: 1}, {value: 3}, {value: 2}, {value: 6}, {value: 5}, {value: 4}], d => d.value, "desc"), [{value: 6}, {value: 5}, {value: 4}, {value: 3}, {value: 2}, {value: 1}]);
  test.deepEqual(arr.sort(["a", "c", "b"]), ["a", "b", "c"]);
  test.deepEqual(arr.sort(["a", "c", "b"], null, "desc"), ["c", "b", "a"]);
  test.deepEqual(arr.sort([{letter: "a"}, {letter: "c"}, {letter: "b"}], d => d.letter), [{letter: "a"}, {letter: "b"}, {letter: "c"}]);
  test.deepEqual(arr.sort([{letter: "a"}, {letter: "c"}, {letter: "b"}], d => d.letter, "desc"), [{letter: "c"}, {letter: "b"}, {letter: "a"}]);
  test.end();
});