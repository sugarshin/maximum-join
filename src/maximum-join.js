/*!
 * @license maximum-join
 * (c) sugarshin
 * License: MIT
 */

const toS = 'toString';

export default function maximumJoin(array) {
  if (!Array.isArray(array)) {
    throw new Error('Argument should be an Array.');
  }

  let result = array.slice()
                    .map(el => {
                      if (typeof el !== 'number') {
                        return false;
                      }
                      return Math.abs(parseInt(el));
                    })
                    .filter(el => {
                      return el !== false;
                    })
                    .sort((a, b) => {
                      if (a - b === 0) {
                        return 0;
                      }

                      let strA = a[toS]();
                      let strB = b[toS]();

                      let a1stDegit = +strA.slice(0, 1);
                      let b1stDegit = +strB.slice(0, 1);
                      if (a1stDegit !== b1stDegit) {
                        return b1stDegit - a1stDegit;
                      }

                      let aLen = strA.length;
                      let bLen = strB.length;

                      if (aLen === 1) {
                        return -1;
                      }
                      if (bLen === 1) {
                        return 1;
                      }

                      for (let i = 2; i < Infinity; i++) {
                        if ( +strB.slice(0, i) !== +strA.slice(0, i) ) {
                          return +strB.slice(0, i) - +strA.slice(0, i);
                        }
                      }

                    })
                    .join('');

  return +result;
}
