// Interfaces

interface UserInterface {
  id: string
  firstName: string
  email: string
  register?(message: string): string
}

const user2: UserInterface[] = [
  {
    email: 'jfkldsajfas',
    firstName: 'fjdksfdasl',
    id: 'fjdlskajfdsa'
  }
]

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x, y) => {
  return x + y
}

interface AuthorInterface {
  books: string[] | string
}

const authors: (UserInterface & AuthorInterface)[] = [
  {
    books: ['kfldajs', 'fjdsklajfdsa', 'jfdskaljfsda'],
    email: 'jfkldsajfas',
    firstName: 'fjdksfdasl',
    id: 'fjdlskajfdsa'
  },
  {
    books: 'kdsalfjdsakl',
    email: 'jfkldsajfas',
    firstName: 'fjdksfdasl',
    id: 'fjdlskajfdsa'
  }
]

export {}
