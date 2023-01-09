interface PersonInterface {
  id: string
  firstName: string
  age: number
}

interface EmployeeInterface {
  salary: number
  getSalary(): string
}

class Person implements PersonInterface {
  id: string
  firstName: string
  age: number

  constructor(id: string, firstName: string, age: number) {
    this.id = id
    this.firstName = firstName
    this.age = age
  }
}

class Employee extends Person implements EmployeeInterface {
  salary: number

  constructor(id: string, firstName: string, age: number, salary: number) {
    super(id, firstName, age)

    this.salary = salary
  }
  getSalary() {
    return `My salary is ${this.salary}`
  }
}

const person = new Person('1', 'Bernardo', 21)
console.log(person)
const employee = new Employee('2', 'piquiti', 16, 10)
console.log(employee.getSalary())

export {}
