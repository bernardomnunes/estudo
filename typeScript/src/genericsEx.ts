// 1. Crie uma função que receba um valor e que apenas retorne-o.
// Torne o tipo desse valor dinâmico utilizando Generics.

const recebeValor = <T>(value: T): T => value

// 2. Crie uma função que receba um valor e retorne um Array contendo ele.
// Torne o tipo do valor recebido e do retorno da função dinâmicos utilizando Generics.

const receiveValueAndReturnArray = <T>(value: T): T[] => [value]
const value = receiveValueAndReturnArray(1)
console.log(value)

// 3. Crie uma função que receba um Array e retorne o segundo elemento dele.
// Torne o tipo desse Array dinâmico utilizanado Generics.

const receiveArray = <T>(array: T[]): T => array[1]
console.log(receiveArray([1, 2, 3]))

// 4. Crie uma função assíncrona que receba dois valores: x e y (numbers) e que retorna soma deles.
// Deixe explicito o tipo de retorno dessa função, utilizando Generics.

const asyncPromise = async (x: number, y: number): Promise<number> => x + y
console.log(asyncPromise(1, 2))

export {}
