const numbers = [2, 5, 8, 1, 4];

const haveNumberBiggerThan10 = numbers.some((valor) => {
  // se tem algum valor > 10
  return valor > 10;
});
console.log(haveNumberBiggerThan10);

const numeros = [2, 3, 4, 5, 6];

const biggerThan1 = numeros.every((value) => {
  //se todos forem maiores do que 1 vai retornar true
  return value > 1;
});
console.log(biggerThan1);
