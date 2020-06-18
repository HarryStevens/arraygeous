// https://github.com/HarryStevens/arraygeous#readme Version 0.1.12. Copyright 2020 Harry Stevens.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.arr = {})));
}(this, (function (exports) { 'use strict';

  // Finds the closest element in an array to a value.
  // The array can be mapped to an optional accessor function.
  function closest(arr, val, fn) {
    var min = Infinity,
        minI = null;

    for (var i = 0, n = arr.length; i < n; i++) {
      var d = fn ? fn(arr[i]) : arr[i];

      if (d != null && isFinite(d)) {
        var diff = Math.abs(d - val);

        if (diff < min) {
          min = diff;
          minI = i;
        }
      }
    }

    return minI !== null ? arr[minI] : minI;
  }

  // Returns the correlation coefficient for an array given optional x- and y-accessors
  function cor(arr, x, y) {
    var n = arr.length,
        xfn = x || function (d) {
      return d[0];
    },
        yfn = y || function (d) {
      return d[1];
    },
        xSum = 0,
        ySum = 0,
        xySum = 0,
        x2Sum = 0,
        y2Sum = 0;

    for (var i = 0; i < n; i++) {
      var d = arr[i],
          dx = xfn(d, i, arr),
          dy = yfn(d, i, arr);
      xSum += dx;
      ySum += dy;
      xySum += dx * dy;
      x2Sum += dx * dx;
      y2Sum += dy * dy;
    }

    return (n * xySum - xSum * ySum) / Math.sqrt((n * x2Sum - xSum * xSum) * (n * y2Sum - ySum * ySum));
  }

  // Returns the maximum of an array of values.
  // You can map each item in the array to a value with an optional accessor function.
  // Ignores invalid values (null, undefined, NaN, Infinity).
  function deviation(arr, fn) {
    var delta,
        count = 0,
        sum = 0,
        mean = 0;

    for (var i = 0; i < arr.length; i++) {
      var d = fn ? fn(arr[i], i, arr) : arr[i];

      if (d != null && isFinite(d)) {
        delta = d - mean;
        mean += delta / ++count;
        sum += delta * (d - mean);
      }
    }

    if (count > 1) return Math.sqrt(sum / (count - 1));
  }

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

  // Returns a new array with every element in an array that passes a test, specified as a function.
  function filter(arr, fn) {
    var out = [];

    for (var i = 0, l = arr.length; i < l; i++) {
      var d = arr[i];
      if (fn(d, i, arr)) out.push(d);
    }

    return out;
  }

  // Returns a new array with the result of calling an accessor function for each array element.
  function map(arr, fn) {
    var out = [];

    for (var i = 0, l = arr.length; i < l; i++) {
      out.push(fn(arr[i], i, arr));
    }

    return out;
  }

  function flatten(arr, fn) {
    return [].concat.apply([], fn ? map(arr, fn) : arr);
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

  // Returns the mean of an array of values. You can map each item in the array to a value with an optional accessor function.
  function mean(arr, fn) {
    var sum = 0,
        n = 0;

    for (var i = 0, l = arr.length; i < l; i++) {
      var val = fn ? fn(arr[i], i, arr) : arr[i];

      if (val != null && isFinite(val)) {
        sum += val;
        n++;
      }
    }

    return sum / n;
  }

  // You can optionally map an array of objects to an array of values with an accessor function.

  function meanroll(arr, n, fn) {
    var output = [];
    if (fn) arr = map(arr, fn);

    for (var i = 1, l = arr.length; i <= l; i++) {
      output[i - 1] = mean(arr.slice(Math.max(0, i - n), i));
    }

    return output;
  }

  // Sorts an array according to an optional accessor function.
  function sort(arr, fn, order) {
    var copy = arr.slice(),
        invalid = [],
        valid = [];
    var numSort = true; // Separate invalid values

    for (var iter = 0, len = copy.length; iter < len; iter++) {
      var d = copy[iter],
          value = fn ? fn(d, iter, copy) : d;

      if (fn ? fn(d, iter, copy) : d) {
        valid.push(d);
        if (typeof val !== "number") numSort = false;
      } else {
        invalid.push(d);
      }
    } // Sort valid objects


    var i = 0;
    valid.sort(function (a, b) {
      var da = fn ? fn(a, i + 1, valid) : a;
      var db = fn ? fn(b, i, valid) : b;
      i++;

      if (numSort) {
        return order === "desc" ? db - da : da - db;
      } else {
        if (order === "desc") {
          return da < db ? 1 : da > db ? -1 : 0;
        } else {
          return da < db ? -1 : da > db ? 1 : 0;
        }
      }
    });
    return flatten([valid, invalid]);
  }

  function median(arr, fn) {
    var copy = filter(sort(fn ? map(arr, fn) : arr.slice()), function (d) {
      return d != null && isFinite(d);
    }),
        i = copy.length / 2;
    return i % 1 == 0 ? (copy[i - 1] + copy[i]) / 2 : copy[Math.floor(i)];
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

  // Returns a boolean representing whether an array includes a value.
  function some(arr, fn) {
    var out = false;

    for (var _i = 0, l = arr.length; _i < l; _i++) {
      if (fn(arr[_i], _i, arr)) {
        out = true;
        break;
      }
    }

    return out;
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

  var fns = [closest, deviation, every, extent, filter, flatten, includes, map, max, mean, median, min, random, some, sort, sum, unique];
  function pipe(arr) {
    var plummer = {};
    plummer.curr = arr;
    fns.forEach(function (fn) {
      plummer[fn.name] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        plummer.curr = fn.apply(void 0, [plummer.curr].concat(args));
        return plummer;
      };
    });

    plummer.result = function (_) {
      return plummer.curr;
    };

    return plummer;
  }

  exports.closest = closest;
  exports.cor = cor;
  exports.deviation = deviation;
  exports.every = every;
  exports.extent = extent;
  exports.filter = filter;
  exports.flatten = flatten;
  exports.includes = includes;
  exports.map = map;
  exports.max = max;
  exports.mean = mean;
  exports.meanroll = meanroll;
  exports.median = median;
  exports.min = min;
  exports.random = random;
  exports.some = some;
  exports.sort = sort;
  exports.sum = sum;
  exports.unique = unique;
  exports.pipe = pipe;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
