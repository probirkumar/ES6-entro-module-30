const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'Silver', 
    phone: 'o1788774433',
    price: 2000
};

// const phone = fish.phone;
// const color = fish.color;
// const address = fish.address;
// console.log(phone)

const {phone} = fish;
const {address} = fish;
// console.log(phone)

const {age, name} = {name: 'Almas', age: 55, address: 'London'};
// console.log(age);

// Array Destructuring
const [first, another] = [88, 77, 55, 33];
// console.log(first, another);

const nayoks = ['Sakib', 'Bappi', 'Raj'];
const [king, lost, notun] = nayoks;
// console.log(king, notun);

function getNames(){
    return ['Alim', 'Halim'];
};

const [baba, chacha] = getNames();
console.log(chacha, baba);