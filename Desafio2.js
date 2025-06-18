/*
2. Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por 
extenso. Dica: use a função “split” (pesquise seu funcionamento) de uma string que quebra a 
string em pedaços dado um separador como argumento da função. Nesse caso, o separador é a 
barra (/) da data.
Exemplo: Para a entrada “22/04/1983” deve ser escrito “22 de abril de 1983” */

const prompt = require('prompt-sync')();
let dataNumero = prompt("Digite no formato dd/mm/aaaa sua data de nascimeto: ");
let separador = dataNumero.split("/");

console.log(separador);

let dia = separador[0];
let mes = separador[1];
let ano = separador[2];

switch (mes){
    case "01":
        mes = "janeiro";
        break;
    case "02":
        mes = "fevereiro";
        break;
    case "03":
        mes = "março";
        break;
    case "04":
        mes = "abril";
        break;
    case "05":
        mes = "maio";
        break;
    case "06":
        mes = "junho";
        break;
    case "07":
        mes = "julho";
        break;
    case "08":
        mes = "agosto";
        break;
    case "09":
        mes = "setembro";
        break;
    case "10":
        mes = "outubro";
        break;
    case "11":
        mes = "novembro";
        break;
    case "12":
        mes = "dezembro";
        break;
    default:
        console.log("Mês inválido");
        break;
}

console.log(`${dia} de ${mes} de ${ano}`);


