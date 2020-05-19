import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn} from './_types';

function groupCompare<T>(x: Iterable<T>, fn: compareFn<T>=null): T[][] {
  var fn = fn||cmp;
  var a = [], b = [];
  var u: T, i = -1;
  for(var v of x) {
    if(++i===0 || fn(u, v)===0) b.push(v);
    else { a.push(b); b = [v]; }
    u = v;
  }
  a.push(b);
  return a;
}

function groupMap<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null): T[][] {
  var fn = fn||id;
  var a = [], b = [];
  var u1: T|U, i = -1;
  for(var v of x) {
    var v1 = fn(v, ++i, x);
    if(i===0 || u1===v1) b.push(v);
    else { a.push(b); b = [v]; }
    u1 = v1;
  }
  a.push(b);
  return a;
}

/**
 * Breaks array keeping similar values together.
 * @param x an array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function group<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): T[][] {
  var fc = fc||cmp, fm = fm||id;
  var a = [], b = [];
  var u1: T|U, i = -1;
  for(var v of x) {
    var v1 = fm(v, ++i, x);
    if(i===0 || fc(u1, v1)===0) b.push(v);
    else { a.push(b); b = [v]; }
    u1 = v1;
  }
  a.push(b);
  return a;
}
export default group;
