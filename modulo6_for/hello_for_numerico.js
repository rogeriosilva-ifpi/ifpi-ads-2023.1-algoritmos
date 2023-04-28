import { mostrar_texto, obter_numero_positivo, obter_texto } from '../modulo4_while/treinos/my_io_utils.js'

function main(){
    const qtd = obter_numero_positivo()
    const nome = obter_texto('Nome: ')

    for (let i = 0; i < qtd; i++){
        mostrar_texto(`>${i} - ${nome}`)
    }
}

main()