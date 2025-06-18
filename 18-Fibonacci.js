/*
A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um 
programa capaz de gerar a série até o n−ésimo termo que deverá ser pedido pelo usuário.
*/

 prompt = require('prompt-sync')()

 let num = parseInt(prompt("Digite um número: "));
 let fibonacci = [1, 1];

 for (let i = 2; i < num; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
 }
console.log(fibonacci);