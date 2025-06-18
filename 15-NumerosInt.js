/*
Faça um programa que receba dois números inteiros e gere os números inteiros que estão 
no intervalo compreendido por eles. Mostrar no final a soma dos números.
*/

 prompt = require('prompt-sync')()

 let num1 = parseInt(prompt("Digite um número: "));
 let num2 = parseInt(prompt("Digite outro número: "));
 let soma = 0;

 for (i = num1; i <= num2; i++){
     console.log(i);
     soma += i;
 }
 console.log(`A soma dos números é ${soma}`);


