/*
O coração humano bate em média uma vez por segundo. Desenvolver um programa para 
calcular e escrever quantas vezes o coração de uma pessoa baterá se viver X anos.
*/

prompt = require('prompt-sync')()
let idade = Number(prompt("Digite a idade: "));

for (let i = 1; i <= idade; i++);{
  batidas = idade * 365 * 24 * 60 * 60; // 365 dias, 24 horas, 60 minutos, 60 segundos
  
}
  console.log("O coração bateu: ", batidas, "vezes!!");
