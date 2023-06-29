import { question } from "readline-sync";

export function obter_numero(texto){
    let numero = question(texto)
    while (isNaN(numero)){
        console.log('Digite apenas numeros!!')
        numero = question(texto)
    }
    return Number(numero)
}


export function obter_texto(descriçao){
    let texto = question(descriçao)
    return texto
}



export function transformar_snake_to_camel(texto){
    let palavras = texto.split('_')
    let camelCase = palavras[0]
    let count = 1

    while (count < palavras.length){
        let palavra = palavras[count]
        let palavra_capitalizada = palavra.charAt(0).toUpperCase() + palavra.slice(1)
        camelCase += palavra_capitalizada
        count += 1
    }
    return camelCase
}