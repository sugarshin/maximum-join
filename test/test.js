import assert from 'power-assert';

import maximumJoin from '..';

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
    assert(maximumJoin(arr) === 992742511);
  });

  it('case 4', () => {
    let arr = [];
    assert(maximumJoin(arr) === 0);
  });

  it('case 5', () => {
    let arr = [4, 62, {}, NaN, -10, 66, '2', -Infinity, 8, 9, true, 0, [], Infinity, false, 9, 7];
    assert(maximumJoin(arr) === 998766624100);
  });

  it('case 6', () => {
    let arr = [-4, -1, -78, -9, -78, -4];
    assert(maximumJoin(arr) === 97878441);
  });

  it('case 7', () => {
    let arr = [0, 0, 0, 0, 0, 0, 0];
    assert(maximumJoin(arr) === 0);
  });

  it('case 8', () => {
    let arr = [1.42, 642.2214, 9.0, 24.4, 0.3];
    assert(maximumJoin(arr) === 96422410);
  });

  it('case 9', () => {
    let arr = [6436436643, 6436436642, 6436436642, 8, 67];
    assert(maximumJoin(arr) === 867643643664364364366426436436642);
  });

  it('case 10', () => {
    let arr = [64364365, 6436436642, 6436436642, 8, 67];
    assert(maximumJoin(arr) === 8676436436642643643664264364365);
  });

  it('case 11', () => {
    let arr = [64364367, 6436436642, 6436436642, 8, 67];
    assert(maximumJoin(arr) === 8676436436764364366426436436642);
  });

  it('case 12', () => {
    let arr = [64364366, 6436436642, 6436436642, 8, 67];
    assert(maximumJoin(arr) === 8676436436664364366426436436642);
  });

  it('case 13', () => {
    let arr = [64364366, 6436436672, 6436436642, 8, 67];
    assert(maximumJoin(arr) === 8676436436672643643666436436642);
  });

  it('case 14', () => {
    let arr = [2, 35, 23, 8, 8, 52, 4, 14];
    assert(maximumJoin(arr) === 885243523214);
  });

});
