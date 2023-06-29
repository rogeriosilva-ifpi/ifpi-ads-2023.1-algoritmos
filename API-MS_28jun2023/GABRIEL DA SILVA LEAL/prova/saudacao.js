import {readFileSync} from 'fs'
import prompt from 'prompt-sync'
let input = prompt()

function main(){

    let numero = 1

    while(numero > 0){
    numero = Number(input('Digite um número, se for > 0 o programa continuará, se for menor ou igual, será encerrado!  '))
    let nome = input('Digite seu nome: ')
    let texto = readFileSync('./alegria.txt', 'utf8')
    let frase = texto.replaceAll("\r", "").split('\n')
    let linha_da_frase = sortear_frase(frase)

    if(numero > 0){
    console.log(`Olá ${nome} ${frase[linha_da_frase]}`)

    }

    if(numero <= 0){

        console.log(`Tchau! ${nome} ${frase[linha_da_frase]}`)

        break
    }
    }

    
}
main()

function sortear_frase(frase){

    let posicao = Math.floor(Math.random() * frase.length)

    return posicao
}