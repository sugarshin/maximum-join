# maximum-join

[![Build Status][travis-image]][travis-url]
[![GitHub version][github-ver-image]][github-ver-url]
[![License][license-image]][license-url]

Maximum join number

```
npm i maximum-join
```

## Usage

### `maximumJoin(array);`

```js
var maximumJoin = require('maximum-join');

var arr = [4, 25, 92, 0, 1, 89, 7];
var result = maximumJoin(arr);

console.log(result); // => 9289742510
console.log(arr); // => [4, 25, 92, 0, 1, 89, 7]



var arr = [1, 0, -1, 1, 9, -7];
var result = maximumJoin(arr); // => 971110

var arr = [];
var result = maximumJoin(arr); // => 0

var arr = 'not an array';
var result = maximumJoin(arr); // => throw error

var arr = [4, 62, {}, 542, 66, '2', 8, 9, true, 0, [], 246, false, 9, 7];
var result = maximumJoin(arr); // => 9987666240
```

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## Test

```
npm test
```

## License

[MIT](http://sugarshin.mit-license.org/)

© sugarshin

[npm-image]: http://img.shields.io/npm/v/maximum-join.svg
[npm-url]: https://www.npmjs.org/package/maximum-join
[bower-image]: http://img.shields.io/bower/v/maximum-join.svg
[bower-url]: http://bower.io/search/?q=maximum-join
[travis-image]: http://img.shields.io/travis/sugarshin/maximum-join/master.svg?branch=master
[travis-url]: https://travis-ci.org/sugarshin/maximum-join
[gratipay-image]: http://img.shields.io/gratipay/sugarshin.svg
[gratipay-url]: https://gratipay.com/sugarshin/
[coveralls-image]: https://coveralls.io/repos/sugarshin/maximum-join/badge.svg
[coveralls-url]: https://coveralls.io/r/sugarshin/maximum-join
[github-ver-image]: https://badge.fury.io/gh/sugarshin%2Fmaximum-join.svg
[github-ver-url]: http://badge.fury.io/gh/sugarshin%2Fmaximum-join
[license-image]: http://img.shields.io/:license-mit-blue.svg
[license-url]: http://sugarshin.mit-license.org/
[downloads-image]: http://img.shields.io/npm/dm/maximum-join.svg
[dependencies-image]: http://img.shields.io/david/sugarshin/maximum-join.svg