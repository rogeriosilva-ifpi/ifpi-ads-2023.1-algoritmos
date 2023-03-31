import {question} from 'readline-sync'

function main(){
    const valor_base = Number(question('Valor base hora/aula(R$): '))
    const professor = question('Nome do professor: ')
    const h_semanais = Number(question('Horas semanais: '))
    const qualificacao = question('Qualificacao(E/M/D): ')
    const tempo_experiencia = Number(question('Tempo de experiencia(meses): '))
    const qtd_filhos = Number(question('Quant. de filhos(menores de 6 anos): '))
    const plano_saude = Number(question('Valor do plano de saude(R$): '))
    
    const valor_por_especializacao = calcular_valor_por_especializacao(valor_base, qualificacao)
    const valor_experiencia = calcular_valor_experiencia(valor_base, tempo_experiencia)
    const valor_total_hora_aula = valor_por_especializacao + valor_experiencia
    const salario_semanal = calcular_salario_semanal(h_semanais, valor_total_hora_aula)
    const salario_mensal = calcular_salario_mensal(salario_semanal)
    const auxilio_creche = calcular_auxilio_creche(qtd_filhos, salario_mensal)
    
    console.log('-------Contracheque--------')
    console.log('Professor(a): ', professor)
    console.log(`Valor Hora/Professor: R$ ${valor_total_hora_aula}`)
    console.log(`Salário base semanal: R$ ${salario_semanal}`)
    console.log('- GANHOS ---------')
    console.log(`Salário base mensal: R$ ${salario_mensal.toFixed(2)}`)
    console.log(`Auxílio creche: R$ ${auxilio_creche.toFixed(2)}`)

}

function calcular_valor_por_especializacao(base, qualificacao){
    if(qualificacao === 'E'){
        return (base * 0.20) + base
    }else if(qualificacao === 'M'){
        return (base * 0.30) + base
    }else if(qualificacao === 'D'){
        return (base * 0.50) + base
    }
}

function calcular_valor_experiencia(base, tempo){
    if(tempo === 6){
        return base * 0.05
    }else if(tempo > 6){
        const anos = tempo/12
        return (base * 0.05 * anos)
    }else{
        return 0
    }
}

function calcular_salario_semanal(horas_semanal, valor_uma_hora){
    return horas_semanal * valor_uma_hora
}

function calcular_salario_mensal(salario_semanal){
    return salario_semanal * 4.5
}

function calcular_auxilio_creche(qtd_filhos, salario){
    return 700 * qtd_filhos
}

main()