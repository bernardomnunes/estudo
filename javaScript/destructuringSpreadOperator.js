const numbers = [1, 2, 3, 4];

const [first, second, third, fourth] = numbers; //destruturing

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log("a", a);
console.log("b", b);

//spred operator
const numbersWith5 = [...numbers, 5];
console.log(numbersWith5);

const highNumbers = [10, 20, 30, 40, 50];
const [tem, twenty, ...rest] = highNumbers;
console.log(rest);
