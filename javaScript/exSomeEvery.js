// 1. Guarde em uma variável se algum valor da lista "numeros" é par, e logue-a no console.

const numeros = [1, 2, 3, 4, 5, 6];

const verifyOdd = numeros.some((value) => {
  return value % 2 === 0;
});
console.log(verifyOdd);

// 2. Guarde uma variável se alguma pessoa da lista "pessoas" é maior de idade, e logue-a no console.

const pessoas = [
  {
    nome: "Ragnar Lothbrok",
    idade: 30,
  },
  {
    nome: "Harvey Specter",
    idade: 41,
  },
  {
    nome: "John Doe",
    idade: 12,
  },
];

const overAge = pessoas.some((item) => {
  return item.idade > 18;
});
console.log(overAge);

// 3. Guarde em uma variável se todos os valores da lista "numeros2" é par, e logue-a no console.

const numeros2 = [1, 2, 3, 4, 5, 6];

const allOdd = numeros2.every((item) => {
  return item % 2 === 0;
});
console.log(allOdd);

// 4. Guarde em uma variável se todos os itens da "listaDeDesejos" está em estoque (quantidadeEstoque maior que 0).

const listaDeDesejos = [
  {
    titulo: "Tesla Model S",
    quantidadeEstoque: 0,
  },
  {
    titulo: "MacBook Pro",
    quantidadeEstoque: 10,
  },
  {
    titulo: "Carro de Fórmula 1",
    quantidadeEstoque: 1,
  },
];

const allBiggerThan0 = listaDeDesejos.every((item) => {
  return item > 0;
});
console.log(allBiggerThan0);
