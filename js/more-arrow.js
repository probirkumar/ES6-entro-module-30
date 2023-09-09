const add = (frist, second) => frist + second;
const getFullName = (frist , last) => frist + ' ' + last;
const multiply = (a, b) => a * b;

const addAll = (a, b, c, d, e) => a + b + c + d + e;

const result = multiply(7, 8);
// console.log(result);

// no parameter
const getPie = () => 3.1416;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiveTimes = num => num * 5;

// multi line arrow function
// if you want to return something, use the return
const doMath = (x, y, z) => {
    const fristSum = x + y;
    const secondSum = y + z;
    const multiplyResult = fristSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}