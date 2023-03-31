import { question } from "readline-sync";

function main(){

    cabecalho()

    const valor_compra = obter_numero('. Informe o valor do Iphone que deseja comprar: ')
    console.log('. Como você pretende efetuar o pagamento?')
    console.log(' 1 - PIX/Espécie')
    console.log(' 2 - Cartão de Débito')
    console.log(' 3 - Entrada + Cartão de Crédito')
    console.log()
    const forma_pagamento = obter_numero('>  ')
    console.log()

    if (forma_pagamento === 1){
        console.log(`> Parabéns! Efetuando o pagamento dessa forma você estará economizando ${(15 * valor_compra) / 100} reais!`)
        const valor_total = (valor_compra - ((15 * valor_compra) / 100))
        console.log(`> Valor Total: ${valor_total.toFixed(2)}`)
    }else if (forma_pagamento === 2){
        console.log(`> Parabéns! Efetuando o pagamento dessa forma você estará economizando ${(10 * valor_compra) / 100} reais !`)
        const valor_total = valor_compra - ((10 * valor_compra) / 100)
        console.log(`> Valor Total: ${valor_total.toFixed(2)}`)
    }else{
        console.log()
        const entrada = obter_numero('. Qual o valor da Entrada? ')
        const qtd_parcelas = obter_numero('. Em quantas parcelas? ')
        console.log()
        const juros_compra = (3.99 * valor_compra) / 100
        const juros_parcelas = ((1.5 * valor_compra) / 100) * qtd_parcelas
        const calcular_valor_parcelas = ((valor_compra - entrada) / qtd_parcelas) + juros_compra + juros_parcelas

        console.log(`> Efetuando o pagamento dessa forma você pagará juros de ${juros_compra + juros_parcelas} reais!`)
        console.log(`> Valor Total: ${qtd_parcelas}x ${calcular_valor_parcelas.toFixed(2)}!`)
    }

    rodape()

}

function cabecalho(){

    console.log()
    console.log('     1ª PROVA ALGORITMOS E PROGRAMAÇÃO')
    console.log('     ---------------------------------')

}

function obter_numero(informacao){

    const numero = Number(question(informacao))
    return numero

}

function rodape(){

    console.log('     ---------------------------------')
    console.log('     Muito obrigada pela participação!')

}

main()