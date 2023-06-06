import { mostrar_texto } from '../modulo4_while/treinos/my_io_utils.js'
import { nova_matriz, preencher_matriz_manual, show_matriz, somar_matrizes } from '../modulo8_vetores/colecao_utils.js'
function main(){
    const matriz1 = nova_matriz(2, 2, 10)
    const matriz2 = nova_matriz(2, 2, 10)

    preencher_matriz_manual(matriz1)
    preencher_matriz_manual(matriz2)

    const linha0 = matriz1[0]

    linha0[1] = -1000

    show_matriz(matriz1)
    show_matriz(matriz2)

    const matriz_soma = somar_matrizes(matriz1, matriz2)
    mostrar_texto('Soma das Matrizes')
    show_matriz(matriz_soma)

}

main()