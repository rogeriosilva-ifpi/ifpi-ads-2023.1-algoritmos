import fs from 'fs'
import { ler_arquivo } from './utils_saudaçao.js'
import { question } from 'readline-sync'

function main(){

    let lista_saudacao = ler_arquivo('saudaçoes.txt')   
    let nome_usuario = question('Digite seu nome >> ')
    let indice_aleatorio = Math.floor(Math.random() * lista_saudacao.length)
    console.log(`Ola ${nome_usuario},` + lista_saudacao[indice_aleatorio])

    let numero = question('Digite um numero >> ')
    while (numero > 0){
        indice_aleatorio = Math.floor(Math.random() * lista_saudacao.length)
        console.log(`Ola ${nome_usuario},` + lista_saudacao[indice_aleatorio])
        numero = question('Digite um numero >> ')
    }
    console.log(`Tchau ${nome_usuario},` + lista_saudacao[indice_aleatorio])




}

main()