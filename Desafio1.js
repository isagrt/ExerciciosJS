/*
1. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores 
e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa 
que recebe o salário de um colaborador e calcule reajuste segundo o seguinte critério, baseado 
no salário atual:
● Salários até R$ 280,00 (incluindo): aumento de 20%
● Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
● Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
● Salários de R$ 1500,00 em diante: aumento de 5%
● Mostre os valores digitados e os valores ajustados
*/

const prompt = require('prompt-sync')();
let salario = Number(prompt("Digite o salário do colaborador: "));
let aumento;
let novoSalario;

if (salario <= 280){
    aumento = salario * 0.20;
    novoSalario = salario + aumento;
}
else if(salario > 280 && salario <= 700) {
  aumento = salario * 0.15
  novoSalario = salario + aumento
}
else if (salario > 700 && salario <= 1500){
  aumento = salario * 0.10
  novoSalario = salario + aumento
}
else{
  aumento = salario * 0.05
  novoSalario = salario + aumento
}

console.log(`Salário antes do reajuste: R$ ${salario.toFixed(2)}`);
console.log(`Percentual de aumento aplicado: 20%`);
console.log(`Valor do aumento: R$ ${aumento.toFixed(2)}`);
console.log(`Novo salário após o aumento: R$ ${novoSalario.toFixed(2)}`);



