/*
Desenvolver programa para ler o nome, age e peso de três pessoas. Calcular e imprimir 
age e o peso médio das três pessoas.

*/

prompt = require('prompt-sync')()

let name1 = prompt("Digite o nome da primeira pessoa: ");
let age1 = Number(prompt("Digite a idade da primeira pessoa: "));
let name2 = prompt("Digite o nome da segunda pessoa: ");
let age2 = Number(prompt("Digite a idade da segunda pessoa: "));
let name3 = prompt("Digite o nome da terceira pessoa: ");
let age3 = Number(prompt("Digite a idade da terceira pessoa: "))

mediaIdade = (age1 + age2 + age3) / 3;
console.log(`A media de idade de ${name1}, ${name2} e ${name3} é de: ${mediaIdade.toFixed(2)}`);

let weight1 = Number(prompt(`Agora insira o peso de ${name1}: `));
let weight2 = Number(prompt(`Insira o peso de ${name2}: `));
let weight3 = Number(prompt(`Insira o peso de ${name3}: `))

mediaPeso = (weight1 + weight2 + weight3) / 3;
console.log(`A media de peso de ${name1}, ${name2} e ${name3} é de: ${mediaPeso.toFixed(2)}`);

