function cmp(a, b) {
  return a<b? -1:(a>b? 1:0);
}

/**
 * Sorts based on map function (once per value)!
 * @param {Array} x target (modified!)
 * @param {function} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Array} target (sorted)
 */
function sortOn$(x, fn, ths=null) {
  var m = new Map(), i = -1;
  for(var v of x)
    m.set(v, fn.call(ths, v, ++i, x));
  return x.sort((a, b) => cmp(m.get(a), m.get(b)));
}
module.exports = sortOn$;