const { subtract, sum } = require('./math.js');

let result = sum(7, 3);
let expect = 10;

if (result !== expect) {
    throw new Error(`the result is ${result} and is not equal to expect ${expect}`)
}

result = subtract(7, 3);
expect = 4;

if (result !== expect) {
    throw new Error(`the result is ${result} and is not equal to expect ${expect}`)
}

console.log("test passed")