import { mostrar_texto } from '../modulo4_while/treinos/my_io_utils.js'

function main(){
    const frutas = ['uva', 'maça', 'banana', 'pera']

    frutas.forEach(fruta => mostrar_texto(fruta))
    // frutas.forEach(mostrar_texto)

    const tamanhos = frutas.map(item => {
        return item.length ** 2
    })

    mostrar_texto(tamanhos)
}

main()