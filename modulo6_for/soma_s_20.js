import { mostrar_texto, mostrar_texto_inline, obter_numero_positivo } from '../modulo4_while/treinos/my_io_utils.js'

function main(){
    const limite = obter_numero_positivo()

    const somatorio = somar_seq_s20(limite)
    const somatorio2 = somar_seq_s21(limite)

    mostrar_texto(`S_20 = ${somatorio.toFixed(4)}`)
    mostrar_texto(`S_21 = ${somatorio2.toFixed(4)}`)

}

function somar_seq_s20(limite){
    const numerador = 1
    let somatorio = 0
    
    for (let denominador = 1; denominador <= limite; denominador++){
        if (denominador % 2 == 0){
            somatorio -= numerador / denominador 
        }else{
            somatorio += numerador / denominador 
        }
    }

    return somatorio
}

function somar_seq_s21(limite){
    let numerador = 1
    let somatorio = 0
    
    for (let denominador = 1; denominador <= limite; denominador++){
            mostrar_texto_inline(`+ ${numerador}/${denominador}`)
            somatorio += numerador / denominador 
            numerador += 2
    }

    mostrar_texto()

    return somatorio
}


main()