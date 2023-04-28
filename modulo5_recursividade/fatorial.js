import { mostrar_texto, obter_numero_positivo } from '../modulo4_while/treinos/my_io_utils.js'

function main(){
    const valor = obter_numero_positivo()

    const resultado = fatorial(valor)

    mostrar_texto(`Fatorial(${valor}) == ${resultado}`)
}

function fatorial(rogerio){
    if (rogerio == 0){
        return 1
    }
    return rogerio * fatorial(rogerio - 1)
}

main()