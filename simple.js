const { subtract, sum, sumAsync } = require('./math.js');

function sumTest() {
    let result = sum(7, 3);
    let expected = 10;
    expect(result).toBe(expected);
}

test("add two numbers", sumTest)

//==================================//

function subTest() {
    result = subtract(7, 3);
    expected = 4;

    expect(result).toBe(expected);
}

test("sub two numbers async", sumAsync)

function test(title, callback) {
    try {
        callback();
        console.log(`✔️  ${title}`);
    } catch (error) {
        console.error(`❌  ${title}`);
        console.error(error);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`the result is ${actual} and is not equal to expect ${expected}`)
            }
        },

        toGreaterThan(expected) {
            if (actual < expected) {
                throw new Error(`the result is ${actual} and is not greater than expected ${expected}`)
            }
        }
    }
}

