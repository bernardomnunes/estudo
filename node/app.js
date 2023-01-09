// const fs = require("fs"); //Importou o modulo do node

// fs.appendFileSync("mensagem.txt", "msg qlq\n");

const { firstName, lastName, add } = require("./utils");
const obj = require("./messages");
const validator = require("validator");
const c = require("ansi-colors");

const message = obj.getMessages();
const sum = add(4, 4);

console.log(message);
console.log(sum);
console.log(firstName);

const email = "bmn02@outlook.com";
const isEmail = validator.isEmail(email);

console.log(c.green("Sucesso"));
console.log(isEmail);
