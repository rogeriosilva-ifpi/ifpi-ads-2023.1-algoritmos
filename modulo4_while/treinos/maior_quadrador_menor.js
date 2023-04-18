import { mostrar_texto, obter_numero_positivo } from './input_utils.js'

function main(){
    const limite = obter_numero_positivo('Limite: ')
    let numero = 0

    while (numero*numero <= limite){
        numero = numero + 1
    }

    numero = numero - 1
    const quadrado = numero * numero

    mostrar_texto(quadrado)
}

main()