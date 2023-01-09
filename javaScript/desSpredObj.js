const user = {
  firstName: "Bernardo",
  lastName: "Nunes",
  age: 21,
};

const { lastName: ultimoNome, ...rest } = user;
console.log(ultimoNome);
console.log(rest);

const { a, b = 0 } = { a: 3 };
