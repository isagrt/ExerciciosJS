/*
Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de 
números pares e a quantidade de números ímpares. 
*/

 prompt = require('prompt-sync')()

let num = 0;
let par = 0;
let impar = 0;

for (let i = 1; i <= 10; i++){
    num = parseInt(prompt(`Digite o ${i}º número: `));
    if (num % 2 === 0){
        par++;
    } else {
        impar++;
    }
}
console.log('Quantidade de números pares: ', par);
console.log('Quantidade de números ímpares: ', impar)
