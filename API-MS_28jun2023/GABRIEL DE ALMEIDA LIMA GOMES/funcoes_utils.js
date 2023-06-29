import {question} from "readline-sync"

export function mostrar_texto(texto) {

    return console.log(texto)

}

export function obter_string(label='Insira uma string: '){

    let string = question(label)

    return string

}

export function obter_numero_positivo(label='Insira um número: '){

    let numero = question(label)

    if (numero < 0){

        mostrar_texto('VALOR NEGATIVOS SÃO INVÁLIDOS! TENTE NOVAMENTE.')

        obter_numero_positivo()
    }

    return numero

}

export function obter_numero(label='Insira um número: '){

    let numero = question(label)

    return numero

}

