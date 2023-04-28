import { mostrar_texto } from '../modulo4_while/treinos/my_io_utils.js'

function main(){

    const nome = 'Rogério da Silva'

    for (let letra of nome){
        mostrar_texto(`> ${letra}`)
    }

}

main()