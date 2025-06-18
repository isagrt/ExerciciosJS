/*
Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado 
daquele tamanho com asteriscos e espaços em branco. Seu programa deve funcionar 
para quadrados com lados de todos os tamanhos entre 1 e 20.

*/

const prompt = require('prompt-sync')();

let lado = parseInt(prompt("Digite o tamanho do lado do quadrado: "));

if (lado < 1 || lado > 20) {
  console.log("O tamanho do lado deve estar entre 1 e 20.");
} else {
  for (let i = 0; i < lado; i++) {
    let linha = "";

    for (let j = 0; j < lado; j++) {
           if (i === 0 || i === lado - 1 || j === 0 || j === lado - 1) {
        linha += "*";
      } else {
        linha += " ";
      }
    }

    console.log(linha);
  }
}


