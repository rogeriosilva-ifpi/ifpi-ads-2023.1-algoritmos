import { question } from "readline-sync";
import { alegrias, obter_numero, obter_texto } from "./my_utils.js";

function main(){

   const nome = obter_texto('Qual o seu nome? ')

    console.log(`\nOlá ${nome},`,alegrias())

    let numero = obter_numero('\nDigite um número positivo para uma nova frase e negativo para encerrar. ')

    while(numero > 0){
        console.log(alegrias())
        numero = obter_numero('\nDigite um número positivo para uma nova frase e negativo para encerrar. ')
    }

    console.log(`\nTchau ${nome},`,alegrias())
}

main()
