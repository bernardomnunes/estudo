"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(id, firstName, age) {
        this.id = id;
        this.firstName = firstName;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(id, firstName, age, salary) {
        super(id, firstName, age);
        this.salary = salary;
    }
    getSalary() {
        return `My salary is ${this.salary}`;
    }
}
const person = new Person('1', 'Bernardo', 21);
console.log(person);
const employee = new Employee('2', 'piquiti', 16, 10);
console.log(employee.getSalary());
