generics
========

extract methods from an object

```javascript
var generics = require('generics');

var map = generics(Array.prototype).map;
map([1,2,3], console.log.bind(console));

// prints:
// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]

// evaluates to:
// [ undefined, undefined, undefined ]
```
