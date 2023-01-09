"use strict";
// 1. Crie os seguintes Types:
// - UserType, que contenha as propriedades id (number) e name (string)
// - BookType, que contenhas as propriedades id (number), name (string) e authorId (number)
// - AuthorType, que expanda o UserType e adicione a propriedade books (BookType[]) à ele
// Crie uma variável para cada um deles, e logue-as no console.
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Crie uma lista de usuários (utilizando o UserType criado no exercício anterior) e logue-a no console.
const users = [
    {
        id: 10,
        name: 'piquiti'
    },
    {
        id: 11,
        name: 'maniti'
    }
];
console.log(users);
const user2 = {
    books: [
        { authorId: 10, id: 11, name: 'chiquitu' },
        { authorId: 10, id: 11, name: 'chiquitu' }
    ],
    id: 21,
    name: 'mico leao'
};
const sum = (x, y) => {
    return x + y;
};
console.log(sum(2, 2));
const sub = (x, y) => {
    return x - y;
};
console.log(sub(3, 2));
const product = {
    id: 10,
    name: 'jfdlkas',
    price: 20
};
const order = {
    products: [
        {
            id: 10,
            name: 'jfdlkas',
            price: 20
        }
    ],
    id: 43782
};
