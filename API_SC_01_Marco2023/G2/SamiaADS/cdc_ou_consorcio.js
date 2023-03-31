import { question } from "readline-sync";

function main(){
    //Entrada
    const perc_tab_fipe = obter_numero('Informe o percentual da FIPE do Argo: ')
    const qtd_meses_parc = obter_numero('Informe a quatidade de meses que deseja parcelar: ')
    const taxa_juros = obter_numero('Informe a taxa de juros: ')
    const taxa_adm = obter_numero('Informe a taxa de administração do consórcio: ')
    
    //Processamento
    const valor_bem = valor_argo(perc_tab_fipe)
    const cdc_carro = cdc(taxa_juros, valor_bem)
    const valor_cons = consórcio(taxa_adm, valor_bem)



    //Saída
    console.log(`\n> Valor Bem: R$ ${valor_bem}`)
    console.log(`> Valor a ser parcelado: R$ `)
    console.log(`\n> Juros Totais: R$ `)
    console.log(`> Parcelamento: N prestações de R$ `)
    console.log(`> Total a pagar (Entrada + Prestações): R$ `)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function valor_argo(perc_tab_fipe){
    let argo = 89000 - (89000 * (perc_tab_fipe/100))
    return argo
}

function cdc(taxa_juros, valor_argo){
    let valor_fin = (185000 - valor_argo) * taxa_juros
    let financiado = (185000 - valor_argo) - valor_fin
    return financiado
}

function consórcio(taxa_adm, valor_argo){
    let val_cons = valor_argo * taxa_adm
    let consorcio = valor_argo - val_cons
    return consorcio
}




main()