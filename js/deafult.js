// function add(frist, second){
//     console.log(frist, second);
//     second = second || 0;
//     // if(second === undefined){
//     //     second = 0;
//     // };
//     const total = frist + second;
//     return total;
// };


function add(frist, second = 0) {
    // console.log(frist, second);
    const total = frist + second;
    return total;
};

const result = add(10);
// console.log(result);


function fullName(frist, last = 'Chowdhory') {
    const name = frist + ' ' + last;
    return name;
}

const sarName = fullName('Aslam');
console.log(sarName);