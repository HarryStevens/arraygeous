const tape = require("tape"),
    arr = require("../");

tape("unique returns the unique values of an array and how many tims each appears", test => {
  test.deepEqual(arr.count([1, 1, 2, 2, 3]), [{key: 1, count: 2}, {key: 2, count: 2}, {key: 3, count: 1}]);
  test.deepEqual(arr.count([{ value: 1 }, { value: 1 }, { value: 2 }, { value: 2 }, { value: 3 }], d => d.value), [{key: 1, count: 2}, {key: 2, count: 2}, {key: 3, count: 1}]);
  test.end();
});