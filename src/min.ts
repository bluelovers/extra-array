import min from '@extra-iterable/min';
import type {compareFn, mapFn} from './_types';

/**
 * Finds smallest value.
 * @param x an array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function minDeclare<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): T {
  return min(x, fc, fm);
}
export default min;
