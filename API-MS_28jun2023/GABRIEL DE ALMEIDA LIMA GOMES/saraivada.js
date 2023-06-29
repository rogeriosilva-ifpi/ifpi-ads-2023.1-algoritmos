import { contem_na_colecao } from "./colecoes_utils.js";
import { mostrar_texto, obter_numero_positivo, obter_string } from "./funcoes_utils.js";

function main() {
    

    //definir_num_de_pedras()

    //mostrar_texto(gerar_saraivada())

    let saraivada_teste = [1, 2, 3, 4, 5, 6]


    let volume_em_litros = calcular_volume_total(saraivada_teste)

    mostrar_texto(`Volume em litros: ${volume_em_litros}`)

    mostrar_volumes_minimos(volume_em_litros, saraivada_teste)   

    mostrar_volumes_maximos(volume_em_litros, saraivada_teste)

}

main()

function calcular_volume_total(saraivada_teste){

    let volume_ml = 0

    for (let pedra of saraivada_teste) {

        volume_ml += pedra
        
    }

    let volume_l = Math.floor(volume_ml / 1000)

    return volume_l

}

function definir_num_de_pedras(){

    let num_de_pedras = obter_numero_positivo('Número de pedras (ATÉ 50!): ')

    if (num_de_pedras > 50) {

        mostrar_texto('INVÁLIDO, QUANTIDADE MÁXIMA EXCEDIDA.')

        definir_num_de_pedras()

    }

    return num_de_pedras

}

function gerar_saraivada(num_de_elementos) {

    let saraivada = Array(num_de_elementos)
    let pedra_random

    for (let espaco of saraivada){

        pedra_random = Math.floor(Math.random() * 50 )
        mostrar_texto(pedra_random)

        saraivada.push(pedra_random)

    }

    mostrar_texto(saraivada)
        
    return saraivada

}

function mostrar_volumes_minimos(volume_l, saraivada){

    let quantidade_minimos 
    let volume_minimos

    for (let pedra of saraivada) {

        if (pedra === 1){
            
            quantidade_minimos++
            volume_minimos += pedra

        }
        
    }

    let volume_ml = volume_l * 1000
    let proporcao_minimo_total = (volume_minimos * 100) / volume_ml

    mostrar_texto(`Os valores mínimos foram de ${quantidade_minimos}, o volume dos mínimos foi de ${volume_minimos}ml e a proporção foi de ${proporcao_minimo_total}% do total.`)
    

}

function mostrar_volumes_maximos(volume_l, saraivada){

    let quantidade_maximos 
    let volume_maximos

    for (let pedra of saraivada) {

        if (pedra === 1){
            
            quantidade_maximos++
            volume_maximos += pedra

        }
        
    }

    let volume_ml = volume_l * 1000
    let proporcao_maximo_total = (volume_minimos * 100) / volume_ml

    mostrar_texto(`Os valores mínimos foram de ${quantidade_maximos}, o volume dos mínimos foi de ${volume_maximos}ml e a proporção foi de ${proporcao_maximo_total}% do total.`)
    

}
