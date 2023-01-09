"use strict";
// 1. Crie uma Tupla que represente a Response de uma requisição HTTP. O primeiro valor dela sempre deve ter uma string,
// representando o Body, e o segundo um number, representando o Status Code.
Object.defineProperty(exports, "__esModule", { value: true });
const response = [
    ["fkldsajfdsa", 200],
    ["flkdsjaflkdsacnx", 201],
];
// 2. Crie uma lista que contenha apenas valores correspondentes à mesma Tupla criada no exercício anterior.
// 2. Crie um Enum que guarde os status de uma compra, crie uma variável e assinale um valor à ela o utilizando. As opções são:
// WaitingForPayment ("Aguardando Pagamento");
// PaymentConfirmed ("Pagamento Confirmado");
// SentForCustomer ("Enviado para o Cliente");
// ReceivedByCustomer ("Recebido pelo Cliente");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["WaitingForPayment"] = "Aguardando Pagamento";
    OrderStatus["PaymentConfirmed"] = "Pagamento Confirmado";
    OrderStatus["SentForCustomer"] = "Enviado para o Cliente";
    OrderStatus["ReceivedByCustomer"] = "Recebido pelo Cliente";
})(OrderStatus || (OrderStatus = {}));
const WaitingForPayment = OrderStatus.WaitingForPayment;
// 3. Crie uma função chamada "sub", que receba dois numbers e que retorne a subtração de ambos.
// Essa função precisa ter um number como seu tipo de retorno.
const sub = (v1, v2) => {
    return v1 - v2;
};
// 4. Crie uma função chamada "printLog", que receba um parâmetro que possa ser um number ou uma string,
//  e que logue-o no console.Essa função precisa ter um void como seu tipo de retorno.
const printLog = (parameter) => {
    console.log(parameter);
    console.log("Hello");
};
console.log(printLog(1));
// 5. Assinale a variável "cid" como valor da "customerId", mas convertendo-a para number utilizando Type Assertion.
const cid = "123456";
const customerId = cid;
console.log(customerId);
console.log(cid);
