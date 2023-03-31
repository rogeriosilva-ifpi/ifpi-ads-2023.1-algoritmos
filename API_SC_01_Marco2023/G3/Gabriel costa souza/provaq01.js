/* Gabriel Costa Souza*/
import {question} from "readline-sync";

function main(){

function Processamento(nome,sexo,idade,peso,altura,atividade_fisica){
    if (sexo === 'M'){
        const necessidade_calorica = 662 - (9.53 * idade) + atividade_fisica * (15,91 * peso) + (539,6 * altura)
        console.log(`Ola ${nome}, meu nome é chat GPT e calculei sua necessidade calorica diaria de acordo com os dados que voce me forneceu :D\nVoce tem uma necessidade total de ${necessidade_calorica} kcal por dia`)
    }else if (sexo === 'F'){
        const necessidade_calorica = 354 - (6.91 * idade) + atividade_fisica * (9.36 * peso) + (726 * altura)
        console.log(`Ola ${nome}, meu nome é chat GPT e calculei sua necessidade calorica diaria de acordo com os dados que voce me forneceu :D\nVoce tem uma necessidade total de ${necessidade_calorica} kcal por dia`)
    }
}
// Entrada
const nome = question('Digite seu nome: ')
const sexo = question('Digite M para sexo masculino e F para feminino: ')
const idade = Number(question('Digite sua idade: '))
const peso = Number(question('Digite o seu peso: '))
const altura = Number(question('Digite sua altura: '))
const atividade_fisica = Number(question('Digite seu AF de acordo com a tabela do Rogerio410: '))


Processamento(nome,sexo,idade,peso,altura,atividade_fisica)


}

main()