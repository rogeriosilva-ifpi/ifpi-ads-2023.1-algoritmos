import { mostrar_texto, obter_numero_positivo } from './input_utils.js'

function main(){
    const numero = obter_numero_positivo()
    let atual = 1
    let somatorio = 0

    while (atual <= numero){
        somatorio = somatorio + atual
        mostrar_texto(atual)

        atual = atual + 1
    }

    mostrar_texto(`Somatório dos Número de 1 a ${numero}`)
    mostrar_texto(somatorio)
}

main()