import { question } from "readline-sync";

function main(){
    const valor_do_veiculo = Number(question('Valor do veículo(R$): '))
    const renda_do_comprador = Number(question('Renda do comprador(R$):'))
    console.log('Digite 1 para servidor privado e 2 para servidor público')
    const tipo_de_servidor = Number(question('Tipo de servidor:'))
    const valor_da_entrada = Number(question('Valor da entrada(R$):'))
    const percentual_da_saida = Number(question('Percentual da saída(%):'))
    const meses_para_parcelar_saldo_devedor = Number(question('Quantidade de meses para parcelar o saldo devedor:'))
    const taxa_de_juros_do_financiamento = Number(question('Taxa de juros do financiamento(%):'))
    const taxa_da_inflacao_mensal = Number(question('Taxa da inflação mensal(%):'))
    const entrada_minima = calcular_entrada_minima(valor_do_veiculo)
    const saida_maxima = calcular_saida_maxima(valor_do_veiculo)
    

if(verificar_se_entrada_e_saida_validas(valor_da_entrada, percentual_da_saida, valor_do_veiculo)){
    console.log('Valor da entrada:', valor_da_entrada)
    const valor_da_saida = calcular_valor_da_saida(valor_do_veiculo, percentual_da_saida, taxa_da_inflacao_mensal)
    console.log(`Valor da saída: ${valor_da_saida}`)
    const valor_a_ser_financiado_sem_iof = calcular_valor_a_ser_financiado_sem_IOF(valor_da_entrada, valor_da_saida, valor_do_veiculo, taxa_de_juros_do_financiamento, meses_para_parcelar_saldo_devedor)
    console.log(`Valor a ser financiado sem IOF: ${valor_a_ser_financiado_sem_iof}`)
    const meses_para_dia = transformar_meses_em_dias(meses_para_parcelar_saldo_devedor)
    const valor_do_iof = calcular_valor_do_IOF(valor_a_ser_financiado_sem_iof, meses_para_dia)
    console.log(`Valor do IOF: ${valor_do_iof.toFixed(2)}`)
    const valor_a_ser_financiado_com_iof = calcular_valor_a_ser_financiado_com_IOF(valor_a_ser_financiado_sem_iof, valor_do_iof)
    console.log(`Valor a ser financiado com IOF: ${valor_a_ser_financiado_com_iof}`)
    const parcelamento = calcular_parcelas(valor_a_ser_financiado_com_iof, meses_para_parcelar_saldo_devedor)
    console.log(`${meses_para_parcelar_saldo_devedor} parcelas de ${parcelamento.toFixed(2)}`)
    const soma_das_parcelas = calcular_soma_das_parcelas(parcelamento, meses_para_parcelar_saldo_devedor)
    console.log(`Soma das parcelas: ${soma_das_parcelas.toFixed(2)}`)
    const total_a_pagar = calcular_total_a_pagar(soma_das_parcelas, valor_da_entrada, valor_da_saida)
    console.log(`Total a pagar: ${total_a_pagar.toFixed(2)}`)
}else{
    console.log(`O valor de entrada mínima é R$${entrada_minima} e o valor de saída máxima é R$${saida_maxima} `)
}

function verificar_se_entrada_e_saida_validas(entrada, saida, valor_do_veiculo){
    return ((entrada >= 0.3 * valor_do_veiculo) && (saida <= 0.3 * valor_do_veiculo))
}

function calcular_entrada_minima(valor_do_veiculo){
    const entrada_minima = 0.3 * valor_do_veiculo
    return entrada_minima
}

function calcular_saida_maxima(valor_do_veiculo){
    const saida_maxima = 0.3 * valor_do_veiculo
    return saida_maxima
}

function calcular_valor_da_saida(valor_do_veiculo, percentual, inflacao){
    const saida = valor_do_veiculo * percentual
    const saida_com_inflacao = saida + saida *inflacao
    return saida_com_inflacao
}

function calcular_valor_a_ser_financiado_sem_IOF(entrada, saida, valor_do_veiculo, juros, meses){
    const valor_a_ser_financiado_sem_iof = valor_do_veiculo - entrada - saida
    const juros_1 = valor_a_ser_financiado_sem_iof * juros * meses
    const valor_a_ser_financiado_sem_iof_com_juros = valor_a_ser_financiado_sem_iof + juros_1
    return valor_a_ser_financiado_sem_iof_com_juros
}

function transformar_meses_em_dias(meses){
    const dias = meses * 30
    return dias
}

function calcular_valor_do_IOF(valor_a_ser_financiado_sem_iof, dias ){
    const iof_fixa = valor_a_ser_financiado_sem_iof * 0.0038
    const iof_dias = 0.0001118 * valor_a_ser_financiado_sem_iof * dias
    const iof_total = iof_fixa + iof_dias
    return iof_total
}

function calcular_valor_a_ser_financiado_com_IOF(valor_sem_iof, iof){
    const valor_com_iof = valor_sem_iof + iof
    return valor_com_iof
}

function calcular_parcelas(valor_com_iof, meses){
    const parcelas = valor_com_iof / meses
    return parcelas
}

function calcular_soma_das_parcelas(parcelas, meses){
    const soma = parcelas * meses
    return soma
}

function calcular_total_a_pagar(soma, entrada, saida){
    const total = soma + entrada + saida
    return total
}
}


main()



