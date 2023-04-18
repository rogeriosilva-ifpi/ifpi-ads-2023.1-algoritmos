import {
    mostrar_texto,
    obter_numero_positivo
} from './input_utils.js'

function main(){
    const numero = obter_numero_positivo()
    let atual = 1

    while (atual <= numero){
        mostrar_texto(atual)

        atual = atual + 1
    }
}

main()