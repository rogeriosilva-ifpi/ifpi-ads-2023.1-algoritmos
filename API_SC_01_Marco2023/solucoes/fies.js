import { question } from 'readline-sync'

function main(){

    // Entrada
    const valor_mensalidade = Number(question('Mensalidade: '))
    const duracao_anos = Number(question('Duração (anos): '))
    const selic = Number(question('SELIC (%): ')) / 100
    const salario_minimo = Number(question('Salário Mínimo (R$): '))
    const renda_familiar = Number(question('Renda Familiar (R$): '))
    const qtd_membros_familia = Number(question('Qtd Membros Família: '))
    const ano_inicio = Number(question('Ano início: '))
    const semestre_inicio = Number(question('Semestre início: '))

    const duracao_meses = duracao_anos * 12

    // Processamento
    const apto = verificar_aptidao(renda_familiar, qtd_membros_familia, salario_minimo)
    const valor_financiado = calcular_valor_curso(duracao_anos, valor_mensalidade)
    const juros_totais = calcular_juros_financiamento(valor_financiado, selic, renda_familiar, qtd_membros_familia, duracao_anos, salario_minimo)
    const total_a_pagar = valor_financiado + juros_totais
    const taxas_durante_curso_e_carencia = calcular_taxa_curso(duracao_meses)
    const valor_parcela = calcular_parcela(total_a_pagar, taxas_durante_curso_e_carencia, duracao_meses)
    const renda_minima_formado = valor_parcela * 10

    const inicio_pagamento = calcular_inicio_pagamento(ano_inicio, semestre_inicio, duracao_meses)
    const final_pagamento = calcular_final_pagamento(ano_inicio, semestre_inicio, duracao_meses)

    

    // Saída
    console.log(`APTO?: ${apto}`)
    console.log(`Valor a ser Financiado R$: ${valor_financiado.toFixed(2)}`)
    console.log(`Juros do Financiamento R$: ${juros_totais.toFixed(2)}`)
    console.log(`Total a Pagar R$: ${total_a_pagar.toFixed(2)}`)
    console.log(`Taxas (R$ 150) Pagas: ${taxas_durante_curso_e_carencia.toFixed(2)} `)
    console.log(`Parcelamento: ${duracao_meses * 4} de R$ ${valor_parcela.toFixed(2)}`)
    console.log(`Renda Mínimo (R$): ${renda_minima_formado.toFixed(2)}`)
    console.log(`Início Pagamento: ${inicio_pagamento}`)
    console.log(`Final Pagamento: ${final_pagamento}`)

}

// FUNCOES DE NEGOCIO
function verificar_aptidao(renda_familiar, qtd_membros_familia, salario_minimo){
    const renda_por_pessoa = renda_familiar / qtd_membros_familia
    if (renda_por_pessoa <= (3 * salario_minimo)){
        return 'SIM'
    }else{
        return 'NAO'
    }
}

function calcular_valor_curso(duracao, valor_mensalidade){
    const duracao_em_meses = duracao * 12
    const valor_curso = duracao_em_meses * valor_mensalidade
    return valor_curso
}

function calcular_juros_financiamento(valor_financiado, selic, renda_familiar, qtd_membros_familia, duracao, salario_minimo){
    const renda_por_pessoa = renda_familiar / qtd_membros_familia
    const taxa = calcular_taxa(renda_por_pessoa, selic, salario_minimo)
    const juros = valor_financiado * taxa * duracao

    return juros
}

function calcular_taxa(renda_por_pessoa, selic, salario_minimo){
    if (renda_por_pessoa <= (1.5*salario_minimo)){
        return (10/100) * selic
    }else if (renda_por_pessoa <= 2*salario_minimo){
        return (15/100) * selic
    }else if (renda_por_pessoa <= 2.5*salario_minimo){
        return selic * 20/100
    }else{
        return selic * 0.25
    }
}

function calcular_taxa_curso(duracao_meses){
    const carencia_meses = 18
    const valor_taxa_mes = 150 / 3
    return (duracao_meses + carencia_meses) * valor_taxa_mes
}

function calcular_parcela(total_a_pagar, taxas_durante_curso_e_carencia, duracao_meses){
    const parcela = (total_a_pagar - taxas_durante_curso_e_carencia) / (duracao_meses * 4)
    return parcela
}

function calcular_inicio_pagamento(ano_inicio, semestre_inicio, duracao_meses){
    const carencia_em_meses = 18
    const meses_semestre_inicio = semestre_inicio === 1 ? 0 : 6
    const ano_inicio_em_meses = ano_inicio * 12

    // tudo em meses (mes 0 - Início do D.C.) + 1 mes (iniciar pagamento no mes seguinte)
    const inicio_em_meses = ano_inicio_em_meses + meses_semestre_inicio + duracao_meses + carencia_em_meses + 1

    const ano_semestre = converter_meses_em_ano_semestre(inicio_em_meses)

    return ano_semestre
}

function calcular_final_pagamento(ano_inicio, semestre_inicio, duracao_meses){
    const carencia_em_meses = 18
    const meses_semestre_inicio = semestre_inicio === 1 ? 0 : 6
    const ano_inicio_em_meses = ano_inicio * 12

    // tudo em meses (mes 0 - Início do D.C.) + 1 mes (iniciar pagamento no mes seguinte)
    const final_em_meses = ano_inicio_em_meses + meses_semestre_inicio + duracao_meses + carencia_em_meses + 1 + (4 * duracao_meses)

    const ano_semestre = converter_meses_em_ano_semestre(final_em_meses)

    return ano_semestre
}

function converter_meses_em_ano_semestre(meses){
    const ano = Math.floor(meses / 12)
    const semestre = meses % 12 <= 6 ? 1 : 2

    return `${ano}/${semestre}`
}

main()