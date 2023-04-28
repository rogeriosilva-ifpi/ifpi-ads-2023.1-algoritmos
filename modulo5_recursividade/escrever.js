import { mostrar_texto, obter_numero_positivo } from '../modulo4_while/treinos/my_io_utils.js'

function main(){
    const n = obter_numero_positivo()
    escrever_ate_um(n)
}

function escrever_ate_um(numero){
    mostrar_texto(numero)
    if (numero > 1)
        escrever_ate_um(numero - 1)
}

main()