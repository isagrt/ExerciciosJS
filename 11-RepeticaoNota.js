/*
11-Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o 
valor seja inválido e continue pedindo até que o usuário informe um valor válido.
*/

prompt = require('prompt-sync')()

let nota = Number(prompt("Digite uma nota entre 0 e 10: "));

while (nota < 0 || nota > 10){
  console.log("Nota invalida, digite novamente");
  nota = Number(prompt("Digite uma nota entre 0 e 10: "));
}

console.log(`${nota} é uma nota válida`);

