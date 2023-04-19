import { mostrar_texto, mostrar_texto_inline } from './my_io_utils.js'

export function eh_numero_perfeito(numero){
    // True -> perfeito
    let atual = numero - 1
    let somatorio = 0

    while (atual >= 1){
        if (eh_divisor(atual, numero)){
            somatorio = somatorio + atual
        }
        atual--
    }

    return somatorio === numero
}

export function eh_divisor(candidato, numero){
    return numero % candidato === 0
}

export function mostrar_somatorio_divisores(numero){
    let atual = numero - 1
    mostrar_texto_inline(' > ')
    let eh_o_primeiro = true
    while (atual >= 1){
        if (eh_divisor(atual, numero)){
            if (eh_o_primeiro){
                eh_o_primeiro = false
                mostrar_texto_inline(`${atual}`)
            }else{
                mostrar_texto_inline(` + ${atual}`)
            }
        }
        atual--
    }
    mostrar_texto(` == ${numero}`)
}

export function eh_primo(numero){
    if (numero <= 0) return false

    return contar_divisores(numero) === 2
}

function contar_divisores(numero){
    let contador = 0
    let atual = 1

    while (atual <= numero){
        if (eh_divisor(atual, numero)){
            contador++
        }
        atual++
    }

    return contador
}