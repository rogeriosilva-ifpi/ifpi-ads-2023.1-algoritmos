import {question} from 'readline-sync'

function main() {
    const valor_base_hora_aula = Number(question('Valor base da hora aula: '))

    const nome = question('Nome: ')
    const horas_semanais = Number(question('Horas semanais: '))
    const qualificacao = question('Qualificacao: E, M ou D: ')
    const tempo_experiencia = Number(question('Tempo de experiencia em meses: '))
    const qtd_filhos = Number(question('Quantidade de filhos menores de 6 anos: '))
    const valor_plano_de_saude = Number(question('Valor do plano de saude: '))


    const tipo_qualificacao = verifica_qualificacao(qualificacao)
    const experiencia = verifica_experiencia(tempo_experiencia)        

    const hora_aula_qualificacao = valor_base_hora_aula * tipo_qualificacao 
    const valor_hora_aula = hora_aula_qualificacao + experiencia

    const valor_semanal = valor_hora_aula * horas_semanais 
    const salario_base_mensal = calcula_salario_base_mensal(valor_semanal)

    console.log(`\n Professor(a): ${nome}`)
    console.log(`Valor Hora/Professor: R$ ${valor_hora_aula}`)
    console.log(`Valor Semanal: ${valor_semanal}`)

    //Benefícios:
    const auxilio_creche = calcula_auxilio_creche(qtd_filhos)
    const ressasimento_saude = calcula_ressasimento(valor_plano_de_saude)
    const auxilio_combustivel = calcula_auxilio_combustivel(horas_semanais)
    const salario_bruto = calcula_salario_bruto(auxilio_creche, ressasimento_saude, auxilio_combustivel)

    //Descontos:
    const inss = calcula_inss(salario_base_mensal)
    const ir = calcula_ir(salario_base_mensal)
    const novo_valor = salario_base_mensal - inss

    const descontos = calcula_descontos(inss, novo_valor)

    const salario_liquido = calcula_salario_liquido(salario_bruto, descontos)


    //Resultado dos Ganhos:
    console.log('\n-----------> GANHOS <-----------')
    console.log(`Salario Base Mensal: R$ ${salario_base_mensal.toFixed(2)}`)
    console.log(`Auxílio Creche:  R$ ${auxilio_creche.toFixed(2)}`)
    console.log(`Ressasimento do Plano de Saúde:  R$ ${ressasimento_saude.toFixed(2)}`)
    console.log(`Auxílio Combustível: R$ ${auxilio_combustivel.toFixed(2)}`)
    console.log(`Salario Bruto: ${salario_bruto.toFixed(2)}`)

    //Resultado dos Descontos:
    console.log(`\n-----------> DESCONTOS < ----------`)
    console.log(`INSS: R$ ${inss.toFixed(2)}`)
    console.log(`IR: R$${ir.toFixed(2)}`)
    console.log(`Salario Liquido: ${salario_liquido.toFixed(2)}`)


}

function verifica_qualificacao(qualificacao) {
    if (qualificacao === 'E'){
        return 0.2
    } else if (qualificacao === 'M') {
        return 0.3
    } else if (qualificacao === 'D') {
        return 0.5
    } else {
        return 0
    }
}

function verifica_experiencia(tempo_experiencia) {
    if (tempo_experiencia > 6) {
        return (tempo_experiencia / 6) * 0.5
    } else {
        return 0
    }
}

function calcula_salario_base_mensal(valor_semanal) {
    return (valor_semanal * 4.5)
}

function calcula_auxilio_creche(qtd_filhos) {
    return (qtd_filhos * 700)
}

function calcula_ressasimento(valor_plano_de_saude) {
    if (valor_plano_de_saude <= 1000) {
        return (0.5 * valor_plano_de_saude)
    } else {
        return 0
    }
}

function calcula_auxilio_combustivel(horas_semanais) {
    return horas_semanais * 5
}

function calcula_salario_bruto(salario_base_mensal, auxilio_creche, ressasimento_saude, auxilio_combustivel) {
    return (salario_base_mensal + auxilio_creche + ressasimento_saude + auxilio_combustivel)
}

function calcula_descontos(inss, novo_valor) {
    return novo_valor + inss
}

function calcula_inss(salario_base_mensal) {
    if (salario_base_mensal <= 1320) {
        return (salario_base_mensal * 0.075 )
    } else if (salario_base_mensal <= 2500) {
        return (salario_base_mensal * 0.09)
    } else if (salario_base_mensal <= 3900) {
        return (salario_base_mensal * 0.12)
    } else if (salario_base_mensal <= 7500) {
        return (salario_base_mensal * 0.14)
    } else {
        return (salario_base_mensal * 0.16)
    }
}

function calcula_ir(novo_valor) { //Salario base - inss 
    if(novo_valor <= 5000) {
        return 0
    } else {
        return (novo_valor * 0.275)
    }
}

function calcula_salario_liquido(salario_bruto, novo_valor, ir) {
    const soma = novo_valor + ir
    return salario_bruto - soma
}

main()