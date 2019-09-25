// https://github.com/HarryStevens/arraygeous#readme Version 0.0.1. Copyright 2019 Harry Stevens.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('includes')) :
  typeof define === 'function' && define.amd ? define(['exports', 'includes'], factory) :
  (factory((global.arr = {}),global.includes));
}(this, (function (exports,includes) { 'use strict';

  // Determines whether an array contains a specified element.
  // This method returns true if the array contains the element, and false if not.
  // The optional start parameter, which defaults 0, specifies at which position in the array to start the search.
  function includes$1(arr, value) {
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var includes$$1 = false;

    for (var i = start; i < arr.length; i++) {
      if (arr[i] === value) {
        includes$$1 = true;
        break;
      }
    }

    return includes$$1;
  }

  function unique(arr, fn) {
    var out = [];

    for (var i = 0, n = arr.length; i < n; i++) {
      var d = fn ? fn(arr[i], i, arr) : arr[i];
      if (!includes.includes(out, d)) out.push(d);
    }

    return out;
  }

  exports.includes = includes$1;
  exports.unique = unique;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
