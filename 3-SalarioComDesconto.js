/*Crie um programa que leia o número de horas trabalhadas no mês e o valor da hora. O 
programa deverá imprimir o salário que o funcionário deverá receber, calculando o 
desconto de 6% do vale transporte do funcionário.
*/

prompt = require('prompt-sync')()

let horas = Number(prompt("Digite o valor da hora trabalhada: "));
let valorHora = Number(prompt("Digite as horas trabalhadas: "));


salario = (horas * valorHora) * 22; // 22 dias úteis no mês
desconto = salario * 0.06
salario = salario - desconto;


console.log("Salário: ",'R$', salario.toFixed(2));
console.log("Desconto foi de: ",'R$', desconto.toFixed(2))