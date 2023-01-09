// 1. Guarde em uma variável se a string abaixo começa com "Meu", e logue-a no console.

const mensagem = "Olá, meu nome é John!";

const start = mensagem.startsWith("meu");
console.log(start);

// 2. Guarde em uma variável se a string abaixo, a partir da posição 4, começa com "meu", e logue-a no console.

const mensagem2 = "Olá, meu nome é Jane!";

const startFour = mensagem2.startsWith("meu", 4);
console.log(startFour);

// 3. Guarde em uma variável se a string abaixo termina com "Doe!", e logue-a no console.

const mensagem3 = "Olá, meu nome é Doe!";

const endsWithDoe = mensagem3.endsWith("Doe!");
console.log(endsWithDoe);
