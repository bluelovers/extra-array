/**
 * Gets true index to source (+ve).
 * @param {Array} x source
 * @param {number} i index (+ve, -ve)
 * @returns {number} +ve index
 */
function index(x, i) {
  return i<0? x.length-i:i;
}

/**
 * Gets value at index (+ve, -ve).
 * @param {Array} x source
 * @param {number} i index (-ve: from right)
 * @returns {*} value
 */
function get(x, i) {
  return x[index(x, i)];
}

/**
 * Sets value at index (+ve, -ve).
 * @param {Array} x source
 * @param {number} i index (-ve: from right)
 * @param {*} v value
 * @returns {Array} set array
 */
function set(x, i, v) {
  return splice(x, index(x, i), 1, v);
}

/**
 * Sets value at index (+ve, -ve)!
 * @param {Array} x target (modified!)
 * @param {number} i index (-ve: from right)
 * @param {*} v value
 * @returns {Array} target
 */
function set$(x, i, v) {
  x[index(x, i)] = v;
  return x;
}



















































/**
 * Returns evenly spaced values within given interval.
 * @param {number} v start of interval
 * @param {number} V I of interval (excluding)
 * @param {number?} stp spacing between values (def: 1)
 * @returns {Array} result
 */
function arange(v, V, stp=1) {
  var a = [];
  for(; v<V; v+=stp)
    a.push(v);
  return a;
}

/**
 * Returns evenly spaced values withing given interval.
 * @param {number} v start of interval
 * @param {number} V I of interval
 * @param {number?} n no. of values in between (def: 100)
 * @returns {Array} result
 */
function linspace(v, V, n=100) {
  var stp = (V-v)/(n-1);
  return arange(v, V+stp, stp);
}











function intersect(x, y, fn) {
  fn = fn||cmp;
  var a = [];
  x: for(var v of x) {
    for(var w of y)
      if(fn(v, w)===0) { a.push(v); continue x; }
  }
  return a;
}

function union$(x, y, fn) {
  fn = fn||cmp;
  y: for(var w of y) {
    for(var v of x)
      if(fn(v, w)===0) continue y;
    x.push(w);
  }
}

function union(x, y, fn) {
  return union$(x.slice(), y, fn);
}






function searchl(x, fn, ths=null) {
  for(var i=0, I=x.length; i<I; i++)
    if(fn.call(ths, x[i], i, x)===0) break;
  return i;
}

function searchr(x, fn, ths=null) {
  for(var i=x.length-1; i>=0; i--)
    if(fn.call(ths, x[i], i, x)===0) break;
  return i+1;
}

function skipl(x, fn, ths=null) {
  for(var i=0, I=x.length; i<I; i++)
    if(fn.call(ths, x[i], x)!==0) break;
  return i;
}

function skipr(x, fn, ths=null) {
  for(var i=x.length-1; i>=0; i--)
    if(fn.call(ths, x[i], i, x)!==0) break;
  return i+1;
}



/**
 * Splits source into values, which do / dont satisfy the filter.
 * @param {Array} x source
 * @param {function} fn filter function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Array<Array>} [satisfies, doesnt]
 */
function partition(x, fn, ths=null) {
  var t = [], f = [], i = -1;
  for(var v of x) {
    if(fn.call(ths, v, ++i, x)) t.push(v);
    else f.push(v);
  }
  return [t, f];
}

/**
 * Breaks array wherever filter is true.
 * @param {Array} x source
 * @param {function} fn filter function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Array<Array>} [piece ...]
 */
function cut(x, fn, ths=null) {
  var a = [], b = [], i = -1;
  for(var v of x) {
    if(!fn.call(ths, v, ++i, x)) b.push(v);
    else { a.push(b); b = []; }
  }
  if(b.length) a.push(b);
  return a;
}

/**
 * Breaks array considering filter as separator.
 * @param {Array} x source
 * @param {function} fn filter function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Array<Array>} [piece ...]
 */
function split(x, fn, ths=null) {
  var a = [], b = [], i = -1;
  for(var v of x) {
    if(!fn.call(ths, v, ++i, x)) b.push(v);
    else if(b.length) { a.push(b); b = []; }
  }
  if(b.length) a.push(b);
  return a;
}
function cmp(a, b) {
  return a<b? -1:(a>b? 1:0);
}
function args() {
  return arguments;
}
