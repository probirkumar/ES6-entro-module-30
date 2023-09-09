// Function Declaration
function add(frist, second){
    const total = frist + second;
    return total;
}

// Function Expression
const add1 = function add1(frist, second){
    const total = frist + second;
    return total;
}

// Function Expression with anonymus Function
const add2 = function (frist, second){
    const total = frist + second;
    return total;
}


const add3 = function (frist, second){
    return frist + second;
}

// arrow Function
const add4 = (frist , second) => frist + second;

// interview question:
// deferance between Function declaration, Function Expression And Arrow Function

const result = add4(10, 20);
console.log(result);