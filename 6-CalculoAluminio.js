/*
Um fabricante de latas deseja desenvolver um programa para calcular o custo de uma lata 
cilíndrica de alumínio, sabendo-se que o custo do alumínio por m² é R$ 100,00. Leia o raio 
e a altura e escreva o valor do custo. Declare uma constante para o valor de PI e outra para 
o valor do metro quadrado.
*/

prompt = require('prompt-sync')()
const precoMetro = 100;
const pi = 3.14159;
let raio = Number(prompt("Digite o valor do raio do cilindro, em metros: "));
let altura = Number(prompt("Digite o valor da altura do cilindro, em metros: ")) 

area = 2 * pi * raio ** 2 + 2 * pi * raio * altura;

console.log("O valor da área é: ", area.toFixed(2), `m²`);

valorTotal = area * precoMetro;

console.log ("O valor da área em reais é: R$", valorTotal.toFixed(2))