import { readFileSync } from 'fs';
import { mostrar_texto, obter_numero, obter_string } from "./funcoes_utils.js";

function main() {

    let linhas

    let nome = obter_string('Seu nome é >>> ')

    while(true) {
        
        let opcao = obter_numero('Insira um número positivo para receber uma calorosa saudação, ou um negativo/0 para encerrar >>>')
        
        if (opcao > 0){

        linhas = ler_arquivo()

        let saudacao_aleatoria = Math.floor(Math.random() * 20)
        let saudacao_definida = linhas[saudacao_aleatoria]

        mostrar_texto(`Olá ${nome}, ${saudacao_definida}`)

    }else {

        linhas = ler_arquivo()

        let despedida_aleatoria = Math.floor(Math.random() * 10)
        let despedida_definida = linhas[despedida_aleatoria]

        mostrar_texto(`Tchau ${nome}, ${despedida_definida}`)

        return


    }

}

    




}

function ler_arquivo(){

    let data = readFileSync('alegria.txt', 'utf-8')

    let linhas = data.split('\n')

    return linhas

}

main()