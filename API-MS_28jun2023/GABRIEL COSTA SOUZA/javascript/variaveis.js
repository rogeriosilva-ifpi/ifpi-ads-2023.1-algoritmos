import { obter_texto } from "./utils_prova.js"
import { obter_numero, transformar_snake_to_camel } from "./utils_variaveis.js"



function main(){
    let count = 0
    let qtd_nomes_variaveis = obter_numero('Digite a quantidade de variaveis que vão ser recebidas >> ')
    while (count < qtd_nomes_variaveis){
        let variavel = obter_texto('\nDigita seu texto no padrao snake_case >> ')
        let palavra = transformar_snake_to_camel(variavel)
        console.log(palavra)
        count += 1

    }

}

main()