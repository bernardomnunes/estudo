class User {
  constructor(name) {
    this.name = name;
  }

  static sayHello() {
    console.log("Hello world");
  }

  login() {
    console.log(`${this.name} fez login`);
  }

  logout() {
    console.log(`${this.name} fez logout!`);
  }
}

const user = new User("Bernardo");
console.log(user);
user.login();
User.sayHello();

class Animal {
  constructor(name) {
    this.name = name;
  }

  falar() {
    console.log(`${this.name} fez algum barulho!`);
  }
}

class Cachorro extends Animal {
  constructor(name) {
    super(name);
  }

  falar() {
    console.log(`${this.name} latiu!`);
  }

  firula() {
    console.log(`${this.name} deu a pata!`);
  }
}

const dog = new Cachorro("Simba");
dog.falar();
dog.firula();

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
console.log(myCar.age());
console.log("My car is " + myCar.age() + " years old.");
