// https://github.com/HarryStevens/arraygeous#readme Version 0.0.6. Copyright 2019 Harry Stevens.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.arr = {})));
}(this, (function (exports) { 'use strict';

  // Returns a boolean representing whether all items in an array pass a test, provided as an accessor function.
  function every(arr, fn) {
    var out = true;

    for (var i = 0, l = arr.length; i < l; i++) {
      if (!fn(arr[i], i, arr)) {
        out = false;
        break;
      }
    }

    return out;
  }

  // Returns the minimum and maximum values, represented as [min, max], of an array according to an optional accessor function.
  function extent(arr, fn) {
    var min = Infinity,
        max = -Infinity;

    for (var i = 0, n = arr.length; i < n; i++) {
      var d = fn ? fn(arr[i], i, arr) : arr[i];

      if (d != null && isFinite(d)) {
        if (d < min) min = d;
        if (d > max) max = d;
      }
    }

    return [min, max];
  }

  // Determines whether an array contains a specified element.
  // This method returns true if the array contains the element, and false if not.
  // The optional start parameter, which defaults 0, specifies at which position in the array to start the search.
  function includes(arr, value) {
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var includes = false;

    for (var i = start; i < arr.length; i++) {
      if (arr[i] === value) {
        includes = true;
        break;
      }
    }

    return includes;
  }

  // Returns the maximum value of an array according to an optional accessor function.
  function max(arr, fn) {
    var max = -Infinity;

    for (var i = 0, n = arr.length; i < n; i++) {
      var d = fn ? fn(arr[i], i, arr) : arr[i];
      if (d != null && isFinite(d) && d > max) max = d;
    }

    return max;
  }

  // Returns the minimum value of an array according to an optional accessor function.
  function min(arr, fn) {
    var min = Infinity;

    for (var i = 0, n = arr.length; i < n; i++) {
      var d = fn ? fn(arr[i], i, arr) : arr[i];
      if (d != null && isFinite(d) && d < min) min = d;
    }

    return min;
  }

  // Returns a random item from an array
  function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Sorts an array according to an optional accessor function.
  function sort(arr, fn, order) {
    var copy = arr.slice(),
        numSort = every(copy, function (d, i, e) {
      return typeof (fn ? fn(d, i, e) : d) === "number";
    });
    var i = 0;

    if (numSort) {
      return copy.sort(function (a, b) {
        var da = fn ? fn(a, i + 1, copy) : a;
        var db = fn ? fn(b, i, copy) : b;
        i++;
        return order === "desc" ? db - da : da - db;
      });
    } else {
      return copy.sort(function (a, b) {
        var da = fn ? fn(a, i + 1, copy) : a;
        var db = fn ? fn(b, i, copy) : b;
        i++;

        if (order === "desc") {
          return da < db ? 1 : da > db ? -1 : 0;
        } else {
          return da < db ? -1 : da > db ? 1 : 0;
        }
      });
    }
  }

  // Returns the sum of an array of numbers.
  // You can pass an optional accessor.
  // Ignores null values.
  function sum(arr, fn) {
    var sum = 0;

    for (var i = 0, n = arr.length; i < n; i++) {
      var val = fn ? fn(arr[i], i, arr) : arr[i];
      if (val != null && isFinite(val)) sum += val;
    }

    return sum;
  }

  function unique(arr, fn) {
    var out = [];

    for (var i = 0, n = arr.length; i < n; i++) {
      var d = fn ? fn(arr[i], i, arr) : arr[i];
      if (!includes(out, d)) out.push(d);
    }

    return out;
  }

  exports.every = every;
  exports.extent = extent;
  exports.includes = includes;
  exports.max = max;
  exports.min = min;
  exports.random = random;
  exports.sort = sort;
  exports.sum = sum;
  exports.unique = unique;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
