import { contem_na_colecao } from "./colecoes_utils.js";
import { mostrar_texto, obter_numero_positivo, obter_string } from "./funcoes_utils.js";


function main() {

    let num_de_nomes = obter_numero_positivo('Insira o número de nomes que deseja transformar: ')

    transformar_em_camel_case(num_de_nomes) 



}

function transformar_em_camel_case(num_de_nomes) {

    let contador = 0
    let nome
    let camelCase = ''
    let devo_mudar_pra_maiusculo = false
    let transformou = false
    let compostos = 0
    let simples = 0

    while (contador < num_de_nomes) {

        camelCase = ''

        transformou = false

        nome = obter_string('Insira um nome em snake_case >>> ')

        for (let index in nome) {

            if (nome[index] != '_') {

                if (devo_mudar_pra_maiusculo === true) {

                    transformou = true

                    let caractere_transformado = mudar_pra_maiusculo(nome[index])

                    camelCase += caractere_transformado

                }

                if (devo_mudar_pra_maiusculo === false) {

                    camelCase += nome[index]

                }

                devo_mudar_pra_maiusculo = false

            }
            
            else {

                devo_mudar_pra_maiusculo = true

            }

            
            
        }

        if (transformou === true){
                
            compostos++

        } else{simples++}

        mostrar_texto(`${camelCase}\n`)

        contador++

    }

    mostrar_texto(`Foram ${compostos} nomes compostos e ${simples} simples.\n`)


}


function mudar_pra_maiusculo(caractere){

    let codigo = caractere.charCodeAt(0)

    if (codigo >= 97 && codigo <= 122){

        return String.fromCharCode(codigo - 32)

    }else{return caractere}

}







main()