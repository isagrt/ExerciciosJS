/*
13 - Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois 
modifique o programa para que ele mostre os números um ao lado do outro.
*/

 prompt = require('prompt-sync')()

let num = '';

for (i = 1; i <= 20; i++){
    num += i + ' ';
}

console.log(num);

