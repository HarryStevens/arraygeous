# arraygeous
A JavaScript library for lightning fast array manipulation. [![Build Status](https://travis-ci.org/HarryStevens/arraygeous.svg?branch=master)](https://travis-ci.org/HarryStevens/arraygeous)

## Installation

### Web browser
In vanilla, a `arr` global is exported. You can use the latest version from unpkg.
```html
<script src="https://unpkg.com/arraygeous@0.1.22/build/arraygeous.js"></script>
<script src="https://unpkg.com/arraygeous@0.1.22/build/arraygeous.min.js"></script>
```
If you'd rather host it yourself, download the latest release from the [`build` directory](https://github.com/HarryStevens/arraygeous/tree/master/build).

### npm

```bash
npm i arraygeous -S
```
```js
const arr = require("arraygeous");
```

## API

arraygeous provides three types of functions.
- [Native](#native) JavaScript functions that run faster because arraygeous uses for loops.
- [Special](#special) functions that are not included among JavaScript's native array functions.
- [Math](#math) functions that perform arithmetic on arrays.

You can also call multiple functions on the same array by using arr.<b>pipe</b>(<i>array</i>). Return the result of the pipe with <i>pipe</i>.<b>result</b>().

### Native

<a name="every" href="#every">#</a> arr.<b>every</b>(<i>array</i>, <i>test</i>) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/every.js)

Returns a boolean representing whether every item in an <i>array</i> passes a <i>test</i> function.

<a name="filter" href="#filter">#</a> arr.<b>filter</b>(<i>array</i>, <i>test</i>) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/filter.js)

Returns a new array with every element in an <i>array</i> that passes a <i>test</i>, specified as a function.

<a name="find" href="#find">#</a> arr.<b>find</b>(<i>array</i>, <i>test</i>) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/find.js)

Returns the value of the first element in an <i>array</i> that passes a <i>test</i>, specified as a function.

<a name="findIndex" href="#findIndex">#</a> arr.<b>findIndex</b>(<i>array</i>, <i>test</i>) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/findIndex.js)

Returns the index of the first element in an <i>array</i> that passes a <i>test</i>, specified as a function. Returns -1 if no element passes the test.

<a name="includes" href="#includes">#</a> arr.<b>includes</b>(<i>array</i>, <i>value</i>[, <i>start</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/includes.js)

Returns a boolean representing whether an <i>array</i> includes a <i>value</i>. You can specify where in the array to begin the seach with an optional <i>start</i> index.

<a name="map" href="#map">#</a> arr.<b>map</b>(<i>array</i>, <i>accessor</i>) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/map.js)

Returns a new array with the result of calling an <i>accessor</i> function for each <i>array</i> element.

<a name="some" href="#some">#</a> arr.<b>some</b>(<i>array</i>, <i>test</i>) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/some.js)

Returns a boolean representing whether any item in an <i>array</i> passes a <i>test</i> function.

### Special

<a name="closest" href="#closest">#</a> arr.<b>closest</b>(<i>array</i>, <i>value</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/closest.js)

Returns the closest element in an <i>array</i> to a <i>value</i>, ignoring invalid values (null, undefined, NaN, Infinity) in the array. The array can be mapped to an optional <i>accessor</i> function.

<a name="count" href="#count">#</a> arr.<b>count</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/count.js)

Returns an array of objects, where each object represents a unique value from an input <i>array</i>, according to an optional <i>accessor</i> function, and the number of items that value appears in the array.

<a name="flatten" href="#flatten">#</a> arr.<b>flatten</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/flatten.js)

Returns a single array from an <i>array</i> of arrays. You can map each item in the array to the value returned by an optional <i>accessor</i> function.

<a name="random" href="#random">#</a> arr.<b>random</b>(<i>array</i>) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/random.js)

Returns a random item from an <i>array</i>.

<a name="sort" href="#sort">#</a> arr.<b>sort</b>(<i>array</i>[, <i>accessor</i>[, <i>order</i>]]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/sort.js)

Sorts an <i>array</i>. You can map each item in the array to the value returned by an optional <i>accessor</i> function. Defaults to ascending order, but you can return descending order by specifying the third argument, order, as the string "desc". Invalid values other than Infinity and -Infinity (null, undefined, NaN) will be moved to the end.

<a name="unique" href="#unique">#</a> arr.<b>unique</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/unique.js)

Returns the unique values of an <i>array</i>. You can map each item in the array to the value returned by an optional <i>accessor</i> function.

### Math

<a name="cor" href="#cor">#</a> arr.<b>cor</b>(<i>array</i>[, <i>x</i>, <i>y</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/cor.js)

Returns the [correlation coefficient](https://en.wikipedia.org/wiki/bivariate_correlation) of an <i>array</i> of paired values, where each pair is an array of two values. If your data is an array of objects, you can map each item in the array to a pair of values with optional <i>x-</i> and <i>y-</i>accessor functions.

<a name="cumsum" href="#cumsum">#</a> arr.<b>cumsum</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/cumsum.js)

Returns the iterated cumulative sum of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity).

<a name="deviation" href="#deviation">#</a> arr.<b>deviation</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/deviation.js)

Returns the standard deviation of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity).

<a name="diff" href="#diff">#</a> arr.<b>diff</b>(<i>array</i>[, <i>accessor</i>[, <i>lag</i>]]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/diff.js)

Returns lagged and iterated differences of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. You can pass a third a third argument, <i>lag</i>, which is an integer indicating how many indices back to calculate the lag

<a name="extent" href="#extent">#</a> arr.<b>extent</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/extent.js)

Returns the minimum and maximum, represented as [minimum, maximum], of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity).

<a name="max" href="#max">#</a> arr.<b>max</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/max.js)

Returns the maximum of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity).

<a name="maxIndex" href="#maxIndex">#</a> arr.<b>maxIndex</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/maxIndex.js)

Returns the index of the maximum of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity).

<a name="mean" href="#mean">#</a> arr.<b>mean</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/mean.js)

Returns the mean of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity).

<a name="meanroll" href="#meanroll">#</a> arr.<b>meanroll</b>(<i>array</i>, <i>n</i>, [, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/meanroll.js)

For each item in an <i>array</i> of values, calculates the trailing rolling average of <i>n</i> items. If the index of the item is less than n, calculates the avereage of the item's value and all previous values. You can map each item in the array to a value with an optional <i>accessor</i> function.

<a name="median" href="#median">#</a> arr.<b>median</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/median.js)

Returns the median of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity).

<a name="min" href="#min">#</a> arr.<b>min</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/min.js)

Returns the minimum of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity).

<a name="minIndex" href="#minIndex">#</a> arr.<b>minIndex</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/minIndex.js)

Returns the index of the minimum of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity).

<a name="mode" href="#mode">#</a> arr.<b>mode</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/mode.js)

Returns the mode or modes, represented as an array of numbers, of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity). If there is no mode, returns undefined.

<a name="sum" href="#sum">#</a> arr.<b>sum</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/sum.js)

Returns the sum of an <i>array</i>. You can map each item in the array to the value returned by an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity).

<a name="variance" href="#variance">#</a> arr.<b>variance</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/variance.js)

Returns the [variance](https://en.wikipedia.org/wiki/Variance) of an <i>array</i> of values. You can map each item in the array to a value with an optional <i>accessor</i> function. Ignores invalid values (null, undefined, NaN, Infinity).