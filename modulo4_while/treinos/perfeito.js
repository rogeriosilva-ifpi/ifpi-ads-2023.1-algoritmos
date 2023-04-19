/**
 * Perfeito:
 * Tipo 0 número 6 ==> Divisores([6], 3, 2, 1) ==> 3 + 2 + 1 ==> 6
 * 
 */

import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'
import { eh_numero_perfeito, mostrar_somatorio_divisores } from './my_math_utils.js'

function main(){
    let limite_inicial = obter_numero_positivo()
    const limite_final = obter_numero_positivo()

    while (limite_inicial <= limite_final){
        if (eh_numero_perfeito(limite_inicial)){
            mostrar_texto(`> ${limite_inicial}` )
            mostrar_somatorio_divisores(limite_inicial)
        }

        limite_inicial++
    }
}


main()