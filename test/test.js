import assert from 'power-assert';

import maximumJoin from '../src/maximum-join';

describe('maximumJoin()', () => {

  it('case 1', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    assert(maximumJoin(arr) === 87654321);
  });

  it('case 2', () => {
    let arr = [4, 25, 92, 0, 1, 9, 970, 7];
    assert(maximumJoin(arr) === 997092742510);
  });

  it('case 3', () => {
    let arr = [4, 25, 92, -1, 1, 9, 7];
    assert(maximumJoin(arr) === arr);
  });

  it('case 4', () => {
    let arr = [];
    assert(maximumJoin(arr) === 0);
  });

});
