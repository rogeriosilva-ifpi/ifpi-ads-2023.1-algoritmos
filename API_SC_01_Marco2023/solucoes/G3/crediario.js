import { question } from 'readline-sync'

function main(){
    // Entrada
    const preco = Number(question('Valor do iPhone: '))
    const forma_pagamento = question('Pagamento: \nP - Pix/Espécie\nD - Débito\nC - Cartão de Crédito:\n>> ')
    let entrada = 0
    let qtd_parcelas = 0
    if (forma_pagamento === 'C'){
        entrada = Number(question('Valor Entrada R$: '))
        qtd_parcelas = Number(question('Quantas parcelas (até 12x): '))
    }

    // Processamento
    const desconto = calcular_desconto(preco, forma_pagamento)
    let valor_final = preco - desconto
    let juros = 0
    let valor_parcela = 0
    
    if (forma_pagamento === 'C'){
        juros = calcular_juros_parcelamento(preco, entrada, qtd_parcelas)
        valor_final = preco + juros
        valor_parcela = valor_final / qtd_parcelas
    }

    // Saída
    console.log('Compra do IPhone')
    console.log(`Você escolheu pagar no: ${forma_pagamento_extenso(forma_pagamento)}`)
    console.log(`Valor Original: R$ ${preco.toFixed(2)}`)
    console.log(`Valor a Pagar: ${valor_final.toFixed(2)}`)

    if (forma_pagamento === 'P' || forma_pagamento === 'D'){
        console.log(`Você economizou: R$ ${desconto.toFixed(2)}`)
    }else{ // C - Cartao de Crédito
        console.log(`Entrada de R$ ${entrada}`)
        console.log(`Você pagará R$ ${juros.toFixed(2)} de Juros`)
        console.log(`Em ${qtd_parcelas}x de R$ ${valor_parcela.toFixed(2)}`)
    }

}

function calcular_juros_parcelamento(preco, entrada, qtd_parcelas){
    const taxa_juros = 3.99 + (1.5 * qtd_parcelas)
    const valor_parcelado = preco - entrada
    const juros = valor_parcelado * (taxa_juros/100)
    return juros
}

function calcular_desconto(preco, forma_pagamento){
    if (forma_pagamento === 'P'){
        return (15/100) * preco
    } else if (forma_pagamento === 'D'){
        return (10/100) * preco
    }else{
        return 0
    }
}

function forma_pagamento_extenso(forma_pagamento){
    if (forma_pagamento === 'P'){
        return 'PIX/Espécia'
    } else if (forma_pagamento === 'D'){
        return 'Débito'
    }else{
        return 'Cartão de Crédito'
    }
}

main()