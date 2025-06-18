/*
Escreva um programa para ler o salário mensal atual de um funcionário e o percentual de 
reajuste. Calcular e escrever o valor do novo salário.
*/

prompt = require('prompt-sync')()

let salario = Number(prompt("Digite o salário atual: "));
let percentual = Number(prompt("Digite o percentual de reajuste: "));

novoSalario = salario + (salario * percentual / 100);

console.log('O novo salário é: ', novoSalario.toFixed(2),);