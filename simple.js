const { subtract, sum } = require('./math.js');

let result = sum(7, 3);
let expected = 10;

expect(result).toBe(expected);

//==================================//
result = subtract(7, 3);
expected = 4;

expect(result).toGreaterThan(expected);


function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`the result is ${actual} and is not equal to expect ${expected}`)
            }
        },

        toGreaterThan(expected){
            if (actual < expected) {
                throw new Error(`the result is ${actual} and is not greater than expected ${expected}`)
            }
        }
    }
}

console.log("test passed")