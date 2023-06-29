import { question } from "readline-sync";

function main(){
    const sair = '0'
    const add_produto_id = '1'
    const mostrar_cardapio = '2'
    const comanda_id = '3'
    const add_comanda= '4'
    const add_item_comanda = '5'
    const quantidade_id = '6'

    const cafeteria = inicializacao('cafeteria')

    let count = () => `${cafeteria.length} cafeteria`

    clear_screen()

    let menu = () => `#### Cafeteria [${count()}] ####
    1 - Cardapio
    2 - Comanda
    3 - Adicionar Produto
    4 - Quantidade de Item
    5 - Valor Total
    6 - Pagar Comanda
    7 - Sair
    \n >>> `

    let opcao = input(menu())

    while (opcao !== sair){
        if (opcao === add_produto_id){
            const novo_produto = generate_cafeteria()
            cafeteria.push(novo_produto)
            print(`${novo_produto['nome']} adicionado com sucesso!`)
        }else if (opcao === mostrar_cardapio){
            novo_cardapio(cardapio)
        }else if(opcao === add_comanda){
            add_comanda(comanda)
        }else if(opcao === add_item_comanda){
            const nova_comanda = generate_cafeteria()
            cafeteria.push(nova_comanda)
        }else if(opcao === comanda_id){
            comanda_id(Id)
        }else if(opcao === quantidade_id){
            quantidade_id(volume)

        }

        enter_to_continue()

        opcao = input(menu())
    }

    gravar_dados(cafeteria)

    Ate()
}

function inicializacao(tipo, nova_comanda){
    if (tipo === 'produto'){
        const produtos = []
        const data = fs.readfilesync('produto.txt', 'uft-8')
        const lines = data.split('\n')

        for (let line of lines){
            if (!line) continue

            const atributos = line.split('#')

            const produto = {'id': atributos[0],
                             'produto': atributos[1],
                              'comanda': atributos[2]}

            produtos.push(cafeteria)
    }
    return produtos

}else if(tipo === nova_comanda){
    const comanda = []
    const data = fs.readfilesync('comanda.txt', 'utf-8')

    const lines = data.split('\n')

    for (let line of lines){
        if (!line) continue
    }
    return nova_comanda
}

}

function novo_produto(produtos){
    print('\n***** Produtos Cadastrados *****')
    print('----------------------')

}
