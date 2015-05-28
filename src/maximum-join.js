/*!
 * @license maximum-join
 * (c) sugarshin
 * License: MIT
 */

export default function maximumJoin(array) {
  if (!Array.isArray(array)) {
    throw new Error('Argument should be an Array.');
  }

  for (let i = 0, l = array.length; i < l; i++) {
    let el = array[i];
    if (typeof el !== 'number' || el < 0) {
      return array;
    }
  }

  let result = array.slice()
                    .sort((a, b) => {
                      return +('' + b).slice(0, 1) - +('' + a).slice(0, 1);
                    })
                    .reduce((prev, current) => {
                      return ('' + prev) + ('' + current);
                    }, '');

  return +result;
}
