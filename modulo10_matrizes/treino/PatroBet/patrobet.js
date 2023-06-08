import { enter_limpar_tela, mostrar_texto, obter_numero, obter_numero_positivo } from '../../../modulo4_while/treinos/my_io_utils.js'
import { show_matriz } from '../../../modulo8_vetores/colecao_utils.js'
import { quicksort } from '../../../modulo9_ordenacao/quicksort.js'

function main(){
    let opcao = obter_numero(menu())
    const bilhetes = []

    while (opcao != 0){
        mostrar_texto(`Você escolheu a opcão ${opcao}`)
        
        if (opcao === 1){
            vender_bilhetes(bilhetes)
        }else if (opcao === 10){
            show_bilhetes(bilhetes)
        }

        enter_limpar_tela()
        opcao = obter_numero(menu())
    }

    mostrar_texto('Tchau coração gelado!')
}


function menu(){
    let opcoes = '###### PatroBET ######'
    opcoes += '\n1 - Vender Bilhete(s)'
    opcoes += '\n10 - Mostrar Bilhetes PatroBet'
    opcoes += '\n0 - Sair'
    opcoes += '\n\n>>>: '

    return opcoes
}

// FUNCIONALIDADES
function vender_bilhetes(bilhetes){
    const quantidade = obter_numero_positivo('Quantos bilhetes? ')

    for (let i = 0; i < quantidade; i++){
        const novo_bilhete = gerar_surpresinha()
        bilhetes.push(novo_bilhete)
    }

    mostrar_texto(`${quantidade} bilhetes gerados com sucesso!`)

}

function gerar_surpresinha(){
    const bilhete = []

    while (bilhete.length < 6){
        let numero_aleatorio = obter_dezena_valida()
        if (!contem_item_colecao(bilhete, numero_aleatorio)){
            bilhete.push(numero_aleatorio)
        }
    }

    return quicksort(bilhete)
}

function obter_dezena_valida(){
    return Math.floor(Math.random() * 60 + 1)
}

function contem_item_colecao(bilhete, valor){
    for (let item of bilhete){
        if (item === valor){
            return true
        }
    }

    return false
}

function show_bilhetes(bilhetes){
    mostrar_texto('Bilhetes PatroBET')
    // TO FIX
    bilhetes = quicksort(bilhetes, b => b.reduce((acc, a) => acc + a), 0)
    if (bilhetes.length < 1){
        // Empty State
        mostrar_texto('Não há bilhetes ainda')
        return
    }
    show_matriz(bilhetes)
}

main()