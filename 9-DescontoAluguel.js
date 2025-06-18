/*
Uma autolocadora aluga seus carros com uma taxa fixa por dia, uma taxa por Km rodado e 
desconto de 10% na taxa fixa de aluguel por dia. Escrever um algoritmo que lê a taxa fixa 
por dia, a taxa por Km rodado, o número de dias, o número de quilômetro rodado e 
calcular e escrever o valor total do aluguel, o valor do desconto, o numero de dias, e a 
quilometragem rodada.
*/

prompt = require('prompt-sync')()

const fixedDiscount = 0.10;
const fixedTax = 50;
let kmTax = Number(prompt("Digite a taxa por km rodado: "));
let km = Number(prompt("Digite a kilometragem rodada: "));
let days = Number(prompt("Digite o número de dias: "));

totalRent = fixedTax * days + kmTax * km;
discount = fixedTax * days * fixedDiscount;
totalRent = totalRent - discount;

console.log (`Você rodou ${km} km em ${days} dias!!`);
console.log(`Logo, o valor do desconto é de R$ ${discount.toFixed(2)}`);
console.log(`E o valor total do aluguel é de R$ ${totalRent.toFixed(2)}`);



