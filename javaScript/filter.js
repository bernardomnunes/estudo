const numeros = [10, 15, 20, 25, 30, 35];

const numbersBiggerThan10 = numeros.filter((numero, index) => {
  return numero > 10;
});
console.log(numbersBiggerThan10);

const user = [
  {
    nome: "steve jobs",
    idade: 17,
  },
  {
    nome: "Elon musk",
    idade: 37,
  },
  {
    nome: "Jeff bezos",
    idade: 40,
  },
];
const overAge = user.filter((item) => {
  return item.idade >= 18;
});
console.log(overAge);
