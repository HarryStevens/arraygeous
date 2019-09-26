# arraygeous
A JavaScript library for lightning fast Array manipulation. [![Build Status](https://travis-ci.org/HarryStevens/arraygeous.svg?branch=master)](https://travis-ci.org/HarryStevens/arraygeous)

## API
<a name="includes" href="#includes">#</a> arr.<b>includes</b>(<i>array</i>, <i>value</i>[, <i>start</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/includes.js)

Tests whether an <i>array</i> includes a <i>value</i>. You can specify where in the array to begin the seach with an optional <em>start</em> index. Returns a boolean.

<a name="random" href="#random">#</a> arr.<b>random</b>(<i>array</i>) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/random.js)

Returns a random item from an <i>array</i>.

<a name="sum" href="#sum">#</a> arr.<b>sum</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/sum.js)

Returns the sum of an <i>array</i>. You can map each item in the array to the value returned by an optional <i>accessor</i> function.

<a name="unique" href="#unique">#</a> arr.<b>unique</b>(<i>array</i>[, <i>accessor</i>]) · [Source](https://github.com/HarryStevens/arraygeous/tree/master/src/unique.js)

Returns the unique values of an <i>array</i>. You can map each item in the array to the value returned by an optional <i>accessor</i> function.