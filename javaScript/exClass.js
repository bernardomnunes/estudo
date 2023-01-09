// 1. Crie uma classe chamada "Guerreiro", que receba, em seu constructor, um "nome" e uma "idade", e que contenha um método chamado "lutar"
//  que logue uma mensagem dizendo "O guerreiro {nome}, de {idade} anos está lutando!"

class Guerreiro {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  data() {
    let date = new Date();
    let anoAtual = date.getFullYear();
    return console.log(
      `${this.nome} de ${this.idade} nasceu em ${anoAtual - this.idade}`
    );
  }
}

const warrior = new Guerreiro("Bernardo", 21);
console.log(warrior);
warrior.data();
// 2. Crie uma classe chamada "Viking", derivada da classe "Guerreiro" criada acima. Sobrescreva o método "lutar",
// que agora logará uma mensagem dizendo "O viking {nome}, de {idade} anos está lutando em nome de Odin!"

class Viking extends Guerreiro {
  constructor(nome, idade) {
    super(nome, idade);
  }

  lutar() {
    console.log(
      `O viking ${this.nome}, de ${this.idade} anos esta lutando em nome de odin!`
    );
  }
}

const viking = new Viking("Piquiti", 16);
console.log(viking);
viking.lutar();

// Crie também, na classe "Viking" um método chamado "lutarComMartelo", que logue uma mensagem dizendo "O viking {nome}, de {idade}
//  anos está lutando com seu martelo no nome de Thor!"
