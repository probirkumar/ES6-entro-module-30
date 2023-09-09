const max = Math.max(12, 54, 66, 95, 333);
// console.log(max);
const numbers = [45, 65, 87, 34];
const largest = Math.max(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
// numbers.push(88);
// numbers2.push(999);
// console.log(numbers);
// console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [44, 35, ...numbers, 777];
console.log(numbers4)
