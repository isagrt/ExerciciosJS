/*
Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro 
entre 1 a 10. O usuário deve informar de qual número ele deseja ver a tabuada. A saída 
deve ser conforme o exemplo abaixo:
Tabuada de 5:
5 x 1 = 5
5 x 2 = 10...
*/

 prompt = require('prompt-sync')()

let num = prompt("Digite o numero que você deseja ver a tabuada: ");
let result = 0;

console.log(`Tabuada de ${num}`);
for (let i = 1; i <= 10; i++){
    result = num * i;
    console.log(`${num} x ${i} = ${result}`);
}

