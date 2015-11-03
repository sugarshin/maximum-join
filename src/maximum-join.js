/*!
 * @license maximum-join
 * (c) sugarshin
 * License: MIT
 */

const toString = 'toString';

export default function maximumJoin(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('should be an Array.');
  }

  let result = array.filter(el => (
    typeof el === 'number' &&
    !isNaN(el) &&
    el !== Infinity &&
    el !== -Infinity
  ))
  .map(n => Math.abs(Math.floor(n)))
  .sort((a, b) => {
    if (a - b === 0) {
      return 0;
    }

    let strA = a[toString]();
    let strB = b[toString]();

    let aLen = strA.length;
    let bLen = strB.length;

    let biggerLenNum, smallerLenNum, smallerLen;

    if (aLen > bLen) {
      biggerLenNum = strA;
      smallerLenNum = strB;
      smallerLen = bLen;
    } else if (aLen < bLen) {
      biggerLenNum = strB;
      smallerLenNum = strA;
      smallerLen = aLen;
    } else if (aLen === bLen) {
      smallerLen = aLen;
    }

    for (let i = 0; i < smallerLen; i++) {
      let _b = +strB.slice(i, i + 1);
      let _a = +strA.slice(i, i + 1);
      if (_b !== _a) {
        return _b - _a;
      }
    }

    if (aLen === 1) {
      return -1;
    }
    if (bLen === 1) {
      return 1;
    }

    return +biggerLenNum.slice(smallerLen, smallerLen + 1) - +smallerLenNum.slice(0, 1);

  })
  .join('');

  return +result;
}
