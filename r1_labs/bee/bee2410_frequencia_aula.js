import { mostrar_texto, obter_numero, obter_texto } from '../../modulo4_while/treinos/my_io_utils.js'

function main(){
    const qtd = obter_numero('')
    let alunos = new Set()
    
    for (let i = 0; i < qtd; i++){
        alunos.add(obter_texto(''))
    }

    mostrar_texto(alunos.size)

}

main()