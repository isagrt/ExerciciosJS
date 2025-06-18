/*
Escreva um programa em javascript que solicita 10 números ao usuário, através de um laço while,  e ao final mostre qual destes números é o maior
*/



 prompt = require('prompt-sync')()
   
 let i = 1;
 let num;
 let maior = 0;

while(i <= 10){
    num = Number(prompt(`Digite o ${i} numero:`));
    if(num > maior){
        maior = num;
    }
    i++;
}
  console.log(`O maior número digitado foi: ${maior}`);
 
