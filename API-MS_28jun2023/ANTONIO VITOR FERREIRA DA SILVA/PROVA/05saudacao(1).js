import fs from 'fs'
import {question} from "readline-sync"

function main(){

    let nome = question("Digite o nome para receber a mensagem:")
    let texto = fs.readFileSync('alegria.txt', "utf-8")
    let mensagem = texto.replaceAll("\r", ""). split('\n')
    console.log(mensagem)
    sorteador(nome,mensagem)
}
main()

function sorteador (nome,mensagem){

    let posicao = Math.floor (Math.random() * mensagem.length)

    console.log(`Olá, ${nome}, ${mensagem[posicao]}`)
}
