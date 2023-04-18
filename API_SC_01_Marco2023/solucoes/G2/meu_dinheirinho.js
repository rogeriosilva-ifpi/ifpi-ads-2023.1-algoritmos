import { question } from 'readline-sync'

function main(){
    // Entrada
    const valor_hora = Number(question('Valor hora base R$: '))
    const nome_professor = question('Nome Professor: ')
    const horas_semanais = Number(question('Quantidade Horas Semanais: '))
    console.log('Informe a Qualificação do Professor:')
    console.log('E para Especialização')
    console.log('M para Mestrado')
    console.log('D para Doutorado')
    const qualificacao = question('> ')
    const experiencia_meses = Number(question('Tempo de Experiência (meses): '))
    const quantidade_filhos = Number(question('Quantidade filhos (< 6 anos): '))
    const valor_plano_saude = Number(question('Valor Plano de Saúde R$: '))

    // Processamento
    const valor_hora_professor = calcular_hora_professor(valor_hora, qualificacao, experiencia_meses)
    const salario_semanal = valor_hora_professor * horas_semanais
    const salario_base_mensal = calcular_salario_base(valor_hora_professor, horas_semanais)
    const auxilio_creche = calcular_auxilio_creche(quantidade_filhos)
    const ressarcimento_saude = calcular_ressarcimento_saude(valor_plano_saude)
    const auxilio_combustivel = calcular_auxilio_combustivel(horas_semanais)

    const salario_bruto = salario_base_mensal + auxilio_creche + ressarcimento_saude + auxilio_combustivel

    const previdencia = calcular_previdencia(salario_base_mensal)
    const imposto_renda = calcular_imposto_renda(salario_base_mensal, previdencia)
    const total_descontos = previdencia + imposto_renda

    const salario_liquido = salario_bruto - total_descontos

    // Saída
    console.log(`---- CONTRA-CHEQUE (${nome_professor})----`)
    console.log(`> Valor/hora do Professor: R$ ${valor_hora_professor.toFixed(2)}`)
    console.log(`> Salário Base Semanal: R$ ${salario_semanal.toFixed(2)}`)
    console.log('--- GANHOS ----')
    console.log(`> Salário Base Mensal: R$ ${salario_base_mensal.toFixed(2)}`)
    console.log(`> Auxílio Creche: R$ ${auxilio_creche.toFixed(2)}`)
    console.log(`> Ressarcimento Saúde: R$ ${ressarcimento_saude.toFixed(2)}`)
    console.log(`> Auxílio Combustível: R$ ${auxilio_combustivel.toFixed(2)}`)
    console.log(`>> Salário Bruto: R$ ${salario_bruto.toFixed(2)}`)
    console.log('--- DESCONTOS ----')
    console.log(`> Previdência: R$ ${previdencia.toFixed(2)}`)
    console.log(`> Imposto de Renda: R$ ${imposto_renda.toFixed(2)}`)
    console.log(`>> Total Descontos: R$ ${total_descontos.toFixed(2)}`)
    console.log('------')
    console.log(`>> Salário Líquido: R$ ${salario_liquido.toFixed(2)}`)

}


function calcular_hora_professor(valor_hora, qualificacao, experiencia_meses){
    let valor = valor_hora

    let acrescimento_qualificacao = valor * 20/100

    if (qualificacao === 'M'){
        acrescimento_qualificacao = valor * 30/100
    }else if (qualificacao === 'D'){
        acrescimento_qualificacao = valor * 50/100
    }

    valor = valor + acrescimento_qualificacao

    const anos_experiencia = experiencia_meses / 12
    let anos_exatos = Math.floor(anos_experiencia)
    const meses_quebrados = experiencia_meses % 12
    
    if (meses_quebrados > 6){
        anos_exatos = anos_exatos + 1
    }
    const percetual_experiencia = 5 * anos_exatos
    const acrescimo_experiencia = valor * percetual_experiencia/100

    // juntando tudo
    valor = valor + acrescimo_experiencia

    return valor
}

function calcular_salario_base(valor_hora_professor, horas_semanais){
    const salario_base = (valor_hora_professor * horas_semanais) * 4.5
    return salario_base
}

function calcular_auxilio_creche(quantidade_filhos){
    return quantidade_filhos * 700
}

function calcular_ressarcimento_saude(valor_plano_saude){
    if (valor_plano_saude <= 1000){
        return valor_plano_saude * (50/100)
    }else{
        return 500
    }

}

function calcular_auxilio_combustivel(horas_semanais){
    const blocos_aula = Math.floor(horas_semanais / 8)
    const valor = blocos_aula * 30
    return valor
}

function calcular_previdencia(salario){
    if (salario <= 1302){
        return salario * (7.5/100)
    }else if (salario <= 2500){
        return salario * (9/100)
    }else if (salario <= 3900){
        return salario * (12/100)
    }else if (salario <= 7500){
        return salario * (14/100)
    }else{
        return salario * (16/100)
    }
}

function calcular_imposto_renda(salario, previdencia){
    const valor_base = salario - previdencia

    const parcela_tributavel = valor_base - 5000

    let imposto = 0

    if (parcela_tributavel > 0){
        imposto = parcela_tributavel * (27.5/100)
    }

    return imposto
}

main()