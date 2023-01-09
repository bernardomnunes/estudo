const pessoas = [
  {
    nome: "John",
    idade: 18,
  },
  {
    nome: "Jane",
    idade: 24,
  },
  {
    nome: "Jane",
    idade: 20,
  },
];

const john = pessoas.find((item) => {
  return item.nome === "John";
});
console.log(john);

const jane = pessoas.findIndex((item) => {
  return item.nome === "Jane";
});
console.log(jane);
