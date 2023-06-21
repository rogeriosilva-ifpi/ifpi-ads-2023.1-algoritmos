import fs from 'fs'
import { ulid } from "ulidx"
import { bye } from "../happy_utils.js"
import { clear_screen, enter_to_continue, input, print } from "../io_utils.js"

function main(){

    // Constantes
    const SAIR = '0'
    const ADD_MONTADORA = '1'
    const LIST_MONTADORA = '2'
    const ATUALIZAR_MONTADORA = '3'
    const REMOVE_MONTADORA = '4'
    const ADD_MODELO = '5'
    const LIST_MODELO = '6'

    // Dados Globais
    const montadoras = inicializacao('montadoras')
    const modelos = inicializacao('modelos', montadoras)
    const veiculos = inicializacao('veiculos')
    
    let count = () => `${montadoras.length} montadoras`

    clear_screen()

    let menu = () => `***** PatroCARS [${count()}] *****
    1 - Nova Montadora
    2 - Listar Montadoras
    3 - Atualizar Montadora
    4 - Remover Montadora
    5 - Novo Modelo
    6 - Listar Modelos
    0 - Sair
    \n >>> `
    
    let opcao = input(menu()) 

    while (opcao !== SAIR){

        if (opcao === ADD_MONTADORA){
            const nova_montadora = generate_montadora()
            montadoras.push(nova_montadora)
            print(`${nova_montadora['nome']} adicionada com sucesso!`)
        }else if (opcao === LIST_MONTADORA){
            show_montadoras(montadoras)
        }else if (opcao === REMOVE_MONTADORA){
            remover_montadora(montadoras)
        }else if (opcao === ATUALIZAR_MONTADORA){
            atualizar_montadora(montadoras)
        }else if (opcao === ADD_MODELO){
            const modelo = generate_modelo(montadoras)
            modelos.push(modelo)
        }else if (opcao === LIST_MODELO){
            show_modelos(modelos)
        }

        enter_to_continue()

        opcao = input(menu())
    }
    // Gravar dados
    gravar_dados(montadoras, modelos)

    bye()
}

// Features Functions(MENU)
function inicializacao(tipo, cad_montadoras){
    if (tipo === 'montadoras'){
        const montadoras = []
        const data = fs.readFileSync('montadoras.txt', 'utf-8')
        const lines = data.split('\n')

        for (let line of lines){

            if (!line) continue

            // 01H3ACC2EP2X6M1A5C1QP4AH8S#Fiat#Italy#1919
            const atributos = line.split('#')
            // [ '01H3ACC2EP2X6M1A5C1QP4AH8S', 'Fiat', 'Italy', '1919'] 
            const montadora = {'id': atributos[0],
                                'nome': atributos[1],
                                'pais': atributos[2],
                                'ano': atributos[3]}
            montadoras.push(montadora)
        }
        return montadoras
    }else if (tipo === 'modelos'){
        const modelos = []
        const data = fs.readFileSync('modelos.txt', 'utf-8')

        const lines = data.split('\n')

        for (let line of lines){
            if (!line) continue

            // ID#NOME#MONTADORA_ID
            const atributos = line.split('#')

            const modelo = {
                'id': atributos[0],
                'nome': atributos[1],
                // 'montadora_id': atributos[2],
                'montadora': obter_montadora_por_id(cad_montadoras, atributos[2])
            }

            modelos.push(modelo)
        }

        return modelos
    }

    
}

function obter_montadora_por_id(montadoras, montadora_id){
    for (let m of montadoras){
        if (m['id'] === montadora_id){
            return m
        }
    }

    return
}

function generate_montadora(){
    const id = ulid()
    const nome = input('Nome: ')
    const pais = input('País: ')
    const ano = input('Ano: ')

    const nova_montadora = {
        'id':id, 
        'nome': nome, 
        'pais': pais, 
        'ano': ano,
        'modelos': []
    }

    // let nova_montadora = {}
    // nova_montadora['id'] = id

    return nova_montadora

}

function show_montadoras(montadoras){
    print('\n***** Montadoras Cadastradas *****')
    print('------------------------------------')
    for (let m of montadoras){
        const line = `${m['id']} - ${m['nome']} - ${m['pais']} - ${m['ano']}`
        print(line)
    }
    print('------------------------------------')
}

function show_modelos(modelos){
    print('***** MODELOS CADASTRADOS *******')
    print('------------------------------------')
    for (let modelo of modelos){
        const item = `${modelo['id']} - ${modelo['nome']} - ${modelo['montadora']['nome']}`
        print(item)
    }
    print('------------------------------------')
}

function obter_index_montadora(montadoras){
    print('\n***** Montadoras Cadastradas *****')
    print('------------------------------------')
    for (let i = 0; i < montadoras.length; i++){
        const m = montadoras[i]
        const line = `${i}: ${m['nome']}`
        print(line)
    }
    print('------------------------------------')

    // obter numero na faixa: [1 -- (len)]
    const code = Number(input('Código da Montadora: '))

    return code
}

function remover_montadora(montadoras){
    const index = obter_index_montadora(montadoras)

    // Tirar essa parte sem graça (remove(code))
    const nome = montadoras[index]['nome']
    montadoras.splice(index, 1)
    
    print(`Montadora (${nome}) removida com sucesso!`)
}


function atualizar_montadora(montadoras){
    const index = obter_index_montadora(montadoras)

    const montadora = montadoras[index]
    print('Atualizar dados:')
    
    print(`Nome atual: ${montadora['nome']}`)
    montadora['nome'] = input('Novo nome: ').trim() || montadora['nome']

    print(`País atual: ${montadora['pais']}`)
    montadora['pais'] = input('Novo país: ').trim() || montadora['pais']

    print(`Ano atual: ${montadora['ano']}`)
    montadora['ano'] = input('Novo ano: ').trim() || montadora['ano']

    print('Montadora atualizada com sucesso!')
}

function gravar_dados(montadoras, modelos){
    let data = ''
    for (let m of montadoras){
        data += `${m['id']}#${m['nome']}#${m['pais']}#${m['ano']}\n`
    }

    fs.writeFileSync('montadoras.txt', data)

    data = ''
    for (let modelo of modelos){
        data += `${modelo['id']}#${modelo['nome']}#${modelo['montadora']['id']}\n`
    }
    fs.writeFileSync('modelos.txt', data)
}

// #######  MODELOS  ########
function generate_modelo(montadoras){
    const index = obter_index_montadora(montadoras)
    const montadora_selecionada = montadoras[index]

    const nome = input('Nome: ')

    const modelo = {}
    modelo['id'] = ulid()
    modelo['nome'] = nome
    // modelo['montadora_id'] = montadora_selecionada['id']
    modelo['montadora'] = montadora_selecionada

    return modelo
 }

main()