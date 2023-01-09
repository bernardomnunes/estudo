"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// arrays
const numbers = [1, 2, 3, 4, 5]; //esse [] ao lado do number indica que eh uma lista
const strings = ["a", "b", "c"];
const booleans = [true, false];
const anyArray = [1, "a", true];
// Tuples
const person = [16, "Bruno", true];
const employees = [
    [16, "Bruno", true],
    [21, "Bernardo", false],
];
// unions
const uid = "5";
// Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "Pra cima";
    Direction["Down"] = "Pra baixo";
    Direction["Left"] = "Pra esquerda";
    Direction["Right"] = "Pra direita";
})(Direction || (Direction = {}));
const direction1 = Direction.Up;
// Type Assertion
const cid = 1;
const customerId = cid;
// Function
const sum = (v1, v2) => {
    return (v1 + v2).toString();
};
console.log(sum(1, 2));
