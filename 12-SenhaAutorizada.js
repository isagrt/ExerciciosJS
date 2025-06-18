/*
12-Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual 
ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as 
informações.
*/

 prompt = require('prompt-sync')()

 let name = prompt("Digite seu nome de usuário: ");
 let senha = prompt("Digite sua senha: ");
  name = name.toLowerCase();
  senha = senha.toLowerCase();


while (name === senha){
  console.log("ERRO!!! Sua senha não pode ser identica ao seu nome de usuário");
  senha = prompt("Digite sua senha: ");
}

console.log(`${name}, bem vindo ao sistema!!`);


