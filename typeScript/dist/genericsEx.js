"use strict";
// 1. Crie uma função que receba um valor e que apenas retorne-o.
// Torne o tipo desse valor dinâmico utilizando Generics.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const recebeValor = (value) => value;
// 2. Crie uma função que receba um valor e retorne um Array contendo ele.
// Torne o tipo do valor recebido e do retorno da função dinâmicos utilizando Generics.
const receiveValueAndReturnArray = (value) => [value];
const value = receiveValueAndReturnArray(1);
console.log(value);
// 3. Crie uma função que receba um Array e retorne o segundo elemento dele.
// Torne o tipo desse Array dinâmico utilizanado Generics.
const receiveArray = (array) => array[1];
console.log(receiveArray([1, 2, 3]));
// 4. Crie uma função assíncrona que receba dois valores: x e y (numbers) e que retorna soma deles.
// Deixe explicito o tipo de retorno dessa função, utilizando Generics.
const asyncPromise = (x, y) => __awaiter(void 0, void 0, void 0, function* () { return x + y; });
console.log(asyncPromise(1, 2));
