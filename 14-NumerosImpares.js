/*
Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50. 
*/

 prompt = require('prompt-sync')()

let num = '';

for (i = 1; i <= 50; i++){
    if (i % 2 !== 0){
        num += i + ' ';
    }
}
console.log(num);


