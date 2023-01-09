const retornaObjArrow = () => ({
  nome: "John",
  sobrenome: "Doe",
});
const john = retornaObjArrow();
console.log(john);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  printNomeArrow() {
    setTimeout(() => {
      console.log(`Arrow: ${this.nome}`);
    }, 100);
  }

  printNomeFunction() {
    setTimeout(function () {
      console.log(`Function: ${this.nome}`);
    }, 100);
  }
}

const user = new Pessoa("Bernardo");
user.printNomeArrow();
user.printNomeFunction();

// Sempre que for metodo de obj use function e quando nao for metodo use arrow function, um bom ex disso eh a class Pessoa acima
