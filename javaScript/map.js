const numbers = [1, 2, 3];

const numbersDouble = numbers.map((item, index) => {
  return item * 2;
});
console.log(numbersDouble);

const user = [
  {
    nome: "john",
    idade: 20,
  },
  {
    nome: "doe",
    idade: 40,
  },
];

const doubleAge = user.map((item) => {
  return { ...item, idade: item.idade * 2 };
});
console.log(doubleAge);
