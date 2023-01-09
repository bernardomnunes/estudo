// 1. Converta as funções abaixo para Arrow Functions.

function somar(a, b) {
  return a + b;
}

function verificarNegativo(numero) {
  return numero < 0;
}

function criarUsuario(nome, idade) {
  return {
    nome,
    idade,
  };
}

setTimeout(function () {
  console.log("Hello world!");
}, 1000);

const sum = (a, b) => a + b;

const verifyNegative = (number) => number < 0;

const creatUser = (nome, age) => ({
  nome,
  age,
});
console.log(creatUser("Bernardo", 21));

setTimeout(() => {
  console.log("Hello world");
}, 2000);
