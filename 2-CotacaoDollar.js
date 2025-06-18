/*Crie um programa que leia o valor do dólar e faça a conversão em reais. O usuário deverá 
inserir o valor da cotação atual do dólar (em reais) e o valor do produto (em dólar). O 
programa deverá imprimir o valor em reais.
*/

prompt = require('prompt-sync')()

let cotacao = Number(prompt("Digite a cotação do dólar em reais: "));
let valor = Number(prompt("Digite o valor do produto em dólar: "));

valorEmReais = cotacao * valor;

console.log("O valor do produto em reais é: ", valorEmReais.toFixed(2))