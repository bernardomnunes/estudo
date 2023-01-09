// 1. Crie os seguintes Types:
// - UserType, que contenha as propriedades id (number) e name (string)
// - BookType, que contenhas as propriedades id (number), name (string) e authorId (number)
// - AuthorType, que expanda o UserType e adicione a propriedade books (BookType[]) à ele
// Crie uma variável para cada um deles, e logue-as no console.

type UserType = {
  id: number
  name: string
}

type BookType = {
  id: number
  name: string
  authorId: number
}

type AuthorType = UserType & {
  books: BookType[]
}

// 2. Crie uma lista de usuários (utilizando o UserType criado no exercício anterior) e logue-a no console.

const users: UserType[] = [
  {
    id: 10,
    name: 'piquiti'
  },
  {
    id: 11,
    name: 'maniti'
  }
]
console.log(users)

const user2: AuthorType = {
  books: [
    { authorId: 10, id: 11, name: 'chiquitu' },
    { authorId: 10, id: 11, name: 'chiquitu' }
  ],
  id: 21,
  name: 'mico leao'
}

// 3. Crie uma interface chamada "MathFunc", que represente uma função que receba x (number) e y (number) e que retorne um number.
// Implemente a interface criada em duas funções.

interface MathFunc {
  (x: number, y: number): number
}

const sum: MathFunc = (x, y) => {
  return x + y
}
console.log(sum(2, 2))

const sub: MathFunc = (x, y) => {
  return x - y
}
console.log(sub(3, 2))

// 4. Crie as seguintes Interfaces:
// - ProductInterface, que contenhas as propriedades id (number), name (string) e price (number)
// - OrderInterface, que contenha as propriedades id (number) e products (ProductInterface[])
// Crie uma variável para cada uma deles, e logue-as no console.

interface ProductInterface {
  id: number
  name: string
  price: number
}

interface OrderInterface {
  id: number
  products: ProductInterface[]
}

const product: ProductInterface = {
  id: 10,
  name: 'jfdlkas',
  price: 20
}

const order: OrderInterface = {
  products: [
    {
      id: 10,
      name: 'jfdlkas',
      price: 20
    }
  ],
  id: 43782
}
export {}
