import { question } from "readline-sync"

function main(){

// PASSO -----> CONSTANTES
const SAIR = '0'
const ADD_PRODUTO = '1'
const LIST_PRODUTO = '2'
const ATUALIZAR_PRODUTO = '3'
const REMOVE_PRODUTO = '4'
const ADD_COMANDA = '5'
const LIST_COMANDA = '6'

let count = () => `${produtos.length} produtos`

let menu = () => `***** CAFETERIA [${count()}] *****
1 - Novo produto
2 - Listar produtos
3 - Atualizar produtos
4 - Remover produtos
5 - Nova comanda
6 - Listar comandas
0 - Sair
\n >>> `

let opcao = input(menu()) 

while (opcao !== SAIR){

    if (opcao === ADD_PRODUTO){
        const novo_produto = generate_produto()
        produtos.push(novo_produto)
        print(`${novo_produto['nome']} adicionado com sucesso!`)
    }else if (opcao === LIST_PRODUTO){
        show_produtos(produtos)
    }else if (opcao === REMOVE_PRODUTO){
        remover_produto(produtos)
    }else if (opcao === ATUALIZAR_PRODUTO){
        atualizar_produto(produtos)
    }else if (opcao === ADD_COMANDA){
        const comanda = generate_comanda(comanda)
        comandas.push(comanda)
    }else if (opcao === LIST_COMANDA){
        show_comandas(comanda)
    }

    enter_to_continue()


// FUNÇÃO DE PRODUTO 

function produto(){
const id = ulid()
const nome = input('Nome: ')
const valor = input('Valor: ')

}

const novo_produto = {
    'id':id, 
    'nome': nome, 
    'valor': valor, 
}

return produto


// FUNÇÕES de FORA para a QUESTÃO

function clear_screen(){
console.clear()
}

function enter_to_continue(){
input('Press <enter> to continue ...')
clear_screen()
}

}

function obter_numero(label = "Digite um numero: ") {
    let numero = obter_texto(label)
  
    while (isNaN(Number(numero)) || numero === "") {
      mostrar_texto("Valor inválido!")
      numero = question(label)
    }
  
    return Number(numero)
  }


// FUNÇÕES DA QUESTÃO

function show_produtos(produtos){
    print('\n¨¨¨¨¨¨¨¨¨ Produtos Cadastrados ¨¨¨¨¨¨¨¨¨')
    print('------------------------------------')
    for (let p of produtos){
        const line = `${p['id']} - ${p['nome']} - ${p['valor']}`
        print(line)
    }
    print('------------------------------------')
}

function show_comandas(comandas){
    print('¨¨¨¨¨¨¨¨¨ COMANDAS CADASTRADAS ¨¨¨¨¨¨¨¨¨')
    print('------------------------------------')
    for (let c of comandas){
        const item = `${c['id']} - ${c['numero']}`
        print(item)
    }
    print('------------------------------------')

function obter_index_produto(produtos){
    print('\n¨¨¨¨¨¨¨ Produtos Cadastrados ¨¨¨¨¨¨¨')
    print('------------------------------------')
    for (let i = 0; i < produtos.length; i++){
        const p = produtos[i]
        const line = `${i}: ${p['nome']}`
        print(line)
    }
    print('------------------------------------')
    

        const cdg = Number(input('Código do produto: '))
    
        return cdg
    }
    
    function remover_produto(produtos){
        const index = obter_index_produto(produtos)
        const nome = p[index]['nome']
        produtos.splice(index, 1)
        
        print(`produto (${nome}) removido com sucesso!`)
    }

    function atualizar_produto(produtos){
        const index = obter_index_produto(produtos)
    
        const produto = produtos[index]
        print('Atualizar os dados:')
        
        print(`Nome atual: ${produto['nome']}`)
        produto['nome'] = input('Novo nome: ').trim() || produto['nome']
    
        print(`Valor atual: ${produto['valor']}`)
        produto['valor'] = input('Novo valor: ').trim() || produto['valor']

    
        print('Produto atualizado com sucesso!')
    }
    
    // COMANDA
    function generate_comanda(produtos){
        const index = obter_index_produto(produto)
        const produto_selecionado = produtos[index]
    
        const valor = Number('Valor: ')
        const numero = obter_numero(label = "Digite um numero: ")
        const qtd_produtos = Number('Quantidade de produtos: )')
    
        const comanda = {}
        comanda['id'] = ulid()
        comanda['numero'] = numero 
        comanda['valor'] = valor
        comanda['produto'] = produto_selecionado
        comanda['qtd'] = qtd_produtos
    
        return comanda
     }
    }

main()