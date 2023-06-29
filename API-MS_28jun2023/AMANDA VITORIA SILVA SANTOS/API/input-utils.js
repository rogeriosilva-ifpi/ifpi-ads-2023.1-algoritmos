import {question} from 'readline-sync'

export function obter_numero(label) {
    let numero = (question(label))

    while (isNaN(Number(numero)) || numero === '') {
        mostrar_texto('Valor Inválido!')
        numero = question(label)
    }

    return Number(numero)
}


export function obter_numero_minimo(label = 'Digite um número: ', minimo = undefined){
    let numero = obter_numero(label)

    while (minimo != undefined && numero < minimo){
        mostrar_texto(`Favor digite um número no mínimo 1320: `)
        numero = obter_numero(label)
    }

    return numero
}


export function obter_numero_positivo(label='\nDigite um numero positivo: ') {
    let numero = Number(question(label))

    while (numero <= 0) {
        mostrar_texto ('\nEsse numero não é positivo!')
        numero = obter_numero(label)
    }
    return Number(numero)
}


export function obter_texto(label='Digite um texto: ') {
    const texto = question(label)

    return texto
}


export function mostrar_texto(texto) {
    console.log(texto)
}

export function enter_limpar_tela() {
    obter_texto('<Enter>...')
    console.clear()
}


export function mostrar_texto_inline(texto) {
    process.stdout.write(texto)
}