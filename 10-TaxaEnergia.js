/*
10- Escrever um programa que lê a taxa de consumo de potência elétrica de um refrigerador, o 
tempo em horas que permaneceu ligado e o valor do quilowatt hora e calcular e escrever a 
energia total gasta pelo refrigerador, bem como, o valor a ser pago à companhia de Energia 
Elétrica.
Potência (W) x tempo de uso (h) x dias de uso no mês / 1000 = consumo em kWh. 
Consumo em kWh x valor do kWh (R$/kWh) = custo. 
*/

prompt = require('prompt-sync')()

let taxa = Number(prompt("Digite a taxa de consumo de potência elétrica do refrigerador: "));
let tempo = Number(prompt("Digite o tempo em horas que o refrigerador permaneceu ligado: "));
let valorKW = Number(prompt("Digite o valor do quilowatt hora da sua região: "));

energiaTotal = taxa * tempo;
valorEnergia = energiaTotal * valorKW;

console.log(`O consumo total de energia é: ${energiaTotal.toFixed(2)} kWh`)
console.log(`O valor gasto na energia elétrica é: R$ ${valorEnergia.toFixed(2)}`);




