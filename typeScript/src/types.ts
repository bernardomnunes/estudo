// arrays
const numbers: number[] = [1, 2, 3, 4, 5] //esse [] ao lado do number indica que eh uma lista
const strings: string[] = ['a', 'b', 'c']
const booleans: boolean[] = [true, false]
const anyArray: any[] = [1, 'a', true]

// Tuples
const person: [number, string, boolean] = [16, 'Bruno', true]
const employees: [number, string, boolean][] = [
  [16, 'Bruno', true],
  [21, 'Bernardo', false]
]

// unions
const uid: number | string = '5'

// Enums
enum Direction {
  Up = 'Pra cima',
  Down = 'Pra baixo',
  Left = 'Pra esquerda',
  Right = 'Pra direita'
}

const direction1 = Direction.Up

// Type Assertion
const cid: any = 1
const customerId = cid as string

// Function
const sum = (v1: number, v2: number) => {
  return (v1 + v2).toString()
}

console.log(sum(1, 2))

export {}
