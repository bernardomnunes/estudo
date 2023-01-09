const foguetes = [
  { pais: "a", lancamentos: 32 },
  { pais: "ab", lancamentos: 332 },
  { pais: "ac", lancamentos: 123 },
  { pais: "ad", lancamentos: 65 },
  { pais: "ae", lancamentos: 34 },
  { pais: "af", lancamentos: 12 },
];

const sum = foguetes.reduce((acc, valorAtual) => {
  return acc + valorAtual.lancamentos;
}, 0);
console.log(sum);
