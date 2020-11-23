const tape = require("tape"),
    arr = require("../");

tape("sort sorts an array", test => {
  test.deepEqual(arr.sort([1, 3, 0, 2, 6, 0, 5, 4]), [0, 0, 1, 2, 3, 4, 5, 6]);
  test.deepEqual(arr.sort([1, 3, 0, 2, 6, 0,  5, 4], null, "desc"), [6, 5, 4, 3, 2, 1, 0, 0]);
  test.deepEqual(arr.sort([{value: 1}, {value: 3}, {value: 2}, {value: 6}, {value: 5}, {value: 4}], d => d.value), [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}]);
  test.deepEqual(arr.sort([{value: 1}, {value: 3}, {value: 2}, {value: 6}, {value: 5}, {value: 4}], d => d.value, "desc"), [{value: 6}, {value: 5}, {value: 4}, {value: 3}, {value: 2}, {value: 1}]);
  test.deepEqual(arr.sort(["a", "c", "b"]), ["a", "b", "c"]);
  test.deepEqual(arr.sort(["a", "c", "b"]), ["a", "b", "c"]);
  test.deepEqual(arr.sort(["a", "c", "b"], null, "desc"), ["c", "b", "a"]);
  test.deepEqual(arr.sort([{letter: "a"}, {letter: "c"}, {letter: "b"}], d => d.letter), [{letter: "a"}, {letter: "b"}, {letter: "c"}]);
  test.deepEqual(arr.sort([{letter: "a"}, {letter: "c"}, {letter: "b"}], d => d.letter, "desc"), [{letter: "c"}, {letter: "b"}, {letter: "a"}]);

  // Distinguish between numbers and strings
  test.deepEqual(arr.sort(["10", "2", "1"]), ["1", "10", "2"]);
  test.deepEqual(arr.sort([10, 2, 1]), [1, 2, 10]);

  test.end();
});

tape("sort puts invalid values at the end", test => {
  test.deepEqual(arr.sort([1, null, undefined, 6, 0, 5, 0, 4]), [0, 0, 1, 4, 5, 6, null, undefined]);
  test.deepEqual(arr.sort([1, null, undefined, 6, 0, 5, 0, 4], null, "desc"), [6, 5, 4, 1, 0, 0, null, undefined]);
  test.deepEqual(arr.sort([{value: 1}, {value: null}, {value: undefined}, {value: 6}, {value: 5}, {value: 4}], d => d.value), [{value: 1}, {value: 4}, {value: 5}, {value: 6}, {value: null}, {value: undefined}]);
  test.deepEqual(arr.sort([{value: 1}, {value: null}, {value: undefined}, {value: 6}, {value: 5}, {value: 4}], d => d.value, "desc"), [{value: 6}, {value: 5}, {value: 4}, {value: 1}, {value: null}, {value: undefined}]);
  test.deepEqual(arr.sort(["a", null, undefined, "c", "b"]), ["a", "b", "c", null, undefined]);
  test.deepEqual(arr.sort(["a", null, undefined, "c", "b"], null, "desc"), ["c", "b", "a", null, undefined]);
  test.deepEqual(arr.sort([1, null, undefined, 6, 5, 4, -Infinity, Infinity], null, "desc"), [Infinity, 6, 5, 4, 1, -Infinity, null, undefined]);
  test.end();
});