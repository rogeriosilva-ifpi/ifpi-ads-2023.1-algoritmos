/* João Victor Evangelista Gomes*/
import {question} from "readline-sync";

function main(){
    const perc_fipe = Number(question('insira o percentual da FIPE: '))
    const meses_parcela = Number(question('insira a quantidade de meses que deseja parcelar: '))
    const taxa_juros = Number(question('insira a taxa de juros: '))
    const taxa_administracao_consorcio = Number(question('insira a taxa administraçao consorcio: '))

    // Processamento
    const valor_carro = calcular_valor_carro(perc_fipe)
    const valor_bem = calcular_valor_bem(valor_carro)
    const juros_totais = calcular_juros_totais(valor_bem, taxa_juros, meses_parcela)
    const parcela_juros = calcular_prestacoes(meses_parcela, juros_totais, valor_bem)
    const total_pagamento = calcular_total_pagamento(valor_bem, parcela_juros, meses_parcela)
    const juros_totais_cdc = calcular_juros_totais_cdc(valor_bem, taxa_administracao_consorcio)
    const parcela_juros_cdc = calcular_prestacoes_cdc(meses_parcela, juros_totais_cdc)
    const total_pagamento_cdc = calcular_total_pagamento_cdc(valor_bem, parcela_juros_cdc, meses_parcela)

    // saída
    console.log(`\n Valor bem: R$${valor_carro.toFixed(2)}
    valor a ser parcelado: R$${valor_bem.toFixed(2)}
    juros totais: R$${juros_totais.toFixed(2)}
    parcelamento: ${meses_parcela} prestaçoes de R$${parcela_juros.toFixed(2)}
    valor total: R$${total_pagamento.toFixed(2)}
    ----------CONSORSIO----------
    Valor bem: R$${valor_carro.toFixed(2)}
    valor a ser parcelado: R$${valor_bem.toFixed(2)}
    juros totais: R$${juros_totais_cdc.toFixed(2)}
    parcelamento: ${meses_parcela} prestaçoes de R$${parcela_juros_cdc.toFixed(2)}
    valor total: R$${total_pagamento_cdc.toFixed(2)}`)
}
function calcular_valor_carro(perc_fipe){
    return 89000 * (perc_fipe / 100)
}
function calcular_valor_bem(valor_carro){
    return 185000 - valor_carro
}
function calcular_juros_totais(valor_bem, taxa_juros, meses_parcela){
    return valor_bem * (taxa_juros / 100) * meses_parcela
}
function calcular_prestacoes(meses_parcela, juros_totais, valor_bem){
    return (valor_bem + juros_totais) / meses_parcela
}
function calcular_total_pagamento(valor_bem, parcela_juros, meses_parcela){
    return valor_bem + (parcela_juros * meses_parcela)
}
function calcular_juros_totais_cdc(valor_bem, taxa_administracao_consorcio){
    return valor_bem * (taxa_administracao_consorcio / 100)
}
function calcular_prestacoes_cdc(meses_parcela, juros_totais_cdc){
    return juros_totais_cdc / meses_parcela
}
function calcular_total_pagamento_cdc(valor_bem, parcela_juros_cdc, meses_parcela){
    return valor_bem + (parcela_juros_cdc * meses_parcela)
}

main()