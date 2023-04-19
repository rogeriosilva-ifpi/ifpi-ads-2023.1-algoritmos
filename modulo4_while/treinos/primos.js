import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'
import { eh_primo } from './my_math_utils.js'

function main(){
    const inicio = obter_numero_positivo()
    const fim = obter_numero_positivo()

    let atual = inicio

    while (atual <= fim){
        if (eh_primo(atual)){
            mostrar_texto(`> ${atual}`)
        }
        atual++
    }
}

main()