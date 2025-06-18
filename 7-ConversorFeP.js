/*
Faça um programa para executar as seguintes conversões:
– Ler uma temperatura em Fahrenheit e imprimir o equivalente em Celsius C=(5F-160)/9.
– Ler uma quantidade de chuva dada em polegadas e imprimir o equivalente em 
milímetros (1 polegada = 25,4 mm).
Declare uma constante para valor de 1 polegada em mm (milimetro_pol 25.4)
*/

prompt = require('prompt-sync')()

let fahrenheit = Number(prompt("Digite a temperatura de hoje em Fahrenheit: "));

celsius = (5 * fahrenheit - 160) / 9;
console.log("Esta fazendo: ", celsius.toFixed(2), "°C");

let polegadas = Number(prompt("Digite a quantidade de chuva de hoje em polegadas: "));
milimetroPol = 25.4

milimetros = polegadas * milimetroPol;
console.log("Choveu hoje: ", milimetros.toFixed(2),);