import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn} from './_types';

function searchAllCompare<T>(x: T[], v: T, fn: compareFn<T>=null): number[] {
  var fn = fn||cmp, a = [];
  for(var i=0, I=x.length; i<I; i++)
    if(fn(x[i], v)===0) a.push(i);
  return a;
}

/**
 * Searches a value throughout.
 * @param x an array
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns indices of value
 */
function searchAll<T, U=T>(x: Iterable<T>, v: T, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): number[] {
  var fc = fc||cmp, fm = fm||id;
  var v1 = fm(v, 0, null);
  var a = [], i = -1;
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    if(fc(u1, v1)===0) a.push(i);
  }
  return a;
}
export default searchAll;
