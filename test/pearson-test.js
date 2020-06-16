const tape = require("tape"),
    arr = require("../");

tape("pearson returns the Pearson correlation coefficient from an array according to optional x- and y- accessor functions", test => {
  test.equal(arr.pearson([
    [1, 1],
    [2, 2]
  ]), 1);
  
  test.equal(arr.pearson([
    [1, 2],
    [2, 1]
  ]), -1);

  test.equal(arr.pearson([
    [50, 58],
    [80, 97],
    [95, 81],
    [33, 51],
    [61, 67],
    [43, 15],
    [55, 61],
    [48, 24],
    [50, 75],
    [5, 16]
  ]), 0.7686905046342282);

  test.equal(arr.pearson([
    {sales: 10, temperature: 50},
    {sales: 20, temperature: 60}
  ], d => d.sales, d => d.temperature), 1);

  test.equal(arr.pearson([
    {sales: 20, temperature: 50},
    {sales: 10, temperature: 60}
  ], d => d.sales, d => d.temperature), -1);

  test.equal(arr.pearson([
    {sales: 50, temperature: 58},
    {sales: 80, temperature: 97},
    {sales: 95, temperature: 81},
    {sales: 33, temperature: 51},
    {sales: 61, temperature: 67},
    {sales: 43, temperature: 15},
    {sales: 55, temperature: 61},
    {sales: 48, temperature: 24},
    {sales: 50, temperature: 75},
    {sales: 5, temperature: 16}
  ], d => d.sales, d => d.temperature), 0.7686905046342282);

  test.end();
});