import {
    mostrar_texto,
    obter_numero,
    obter_numero_positivo
} from './input_utils.js'

function main(){
    const numero = obter_numero()
    mostrar_texto(`Você digitou ${numero}`)

    const idade = obter_numero_positivo('Digite sua idade: ')
    mostrar_texto(`Sua idade é ${idade}`)
}

main()