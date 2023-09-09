const person1 = ' Adam Sandler';
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiLine = 'Frist Line of Text \n' + 
'Seconst Line of Text \n' + 
'Third Line Of Text \n' + 
'Fourth Line of TExt';
// console.log(multiLine);

const multiLine2 = `Frist Line Of TExt
Second Line of Text 
Third Line of Text
Fourth Line of Text`;
// console.log(multiLine2);

const a = 20;
const b = 30;

const summary = 'sum of ' + a + ' and ' + b + ' is: ' + (a+b);
// console.log(summary);

const newSummary = `sum of ${a} and ${b} is: ${a+b}`;
console.log(newSummary);