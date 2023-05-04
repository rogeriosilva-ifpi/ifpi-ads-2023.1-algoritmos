import { mostrar_texto, obter_numero_positivo } from '../modulo4_while/treinos/my_io_utils.js'

function main(){
    const limite = obter_numero_positivo()
    
    // const somatorio = somar_ateh(limite)
    const somatorio = somar_recursivo_ateh(limite)

    mostrar_texto(`Somatório de 1 até ${limite} == ${somatorio}`)
}

function somar_recursivo_ateh(limite){
    if (limite === 1){
        return 1
    }
    const anterior = limite - 1
    return limite + somar_recursivo_ateh(anterior)
}

function somar_ateh(limite){
    let somatorio = 0

    for (let i = 1; i <= limite; i++){
        somatorio = somatorio + i
    }

    return somatorio
}

main()