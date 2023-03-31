import { question } from "readline-sync"
function main(){
    cabecalho()
// Entrada
    const valor_hora = obter_numero('Informe o valor base da hora por aula na Universidade: ')
    const nome = obter_numero('Informe o nome do professor: ')
    const horas_semana = obter_numero('Informe a quantidade de horas semanais que voce trabalha: ')
    const qualificacao = obter_numero('Informe a qualificacao (E - Especializacao), (M - Mestrado), (D - Doutorado): ')
    const tempo = obter_numero('Informe o tempo de experiencia (acima de seis meses considera-se um ano!): ')
    const qt_filhos = obter_numero('Informe a quantidade de filhos menores de 6 anos: ')
    const plano_saude = obter_numero('Informe o valor do plano de saúde (R$): ')

// Processamento
    const incremento = calcular_incremento(qualificacao,valor_hora,tempo) 
    const salario_semanal = calcular_salario_semanal(incremento,horas_semana)
    const salario_mensal = calcular_salario_mensal(salario_semanal)
    const auxilio_creche = calcular_auxilio_creche(qt_filhos)
    const r_saude = calcular_ressarcimento_saúde(plano_saude)
    const ac = calcular_auxilio_combustivel(horas_semana)
    const salario_bruto = calcular_salario_bruto(salario_mensal,auxilio_creche,r_saude,ac)
    const previdencia = calcular_previdencia(salario_bruto)
    const ir = calcular_imposto_renda(salario_bruto)
    const descontos = total_descontos(previdencia,ir)
    const sl = calcular_salario_liquido(salario_bruto,descontos)

// Saída
console.log()
console.log(`O valor hora baseado no seu nível de especialização e de experiência é de R$${incremento}.`)
console.log()
console.log(`Seu salário base semanal é de ${salario_semanal}.`)
console.log()
console.log(`Seu salário base mensal é de ${salario_mensal}.`)
console.log()
console.log(`O Auxílio Creche é de R$ ${auxilio_creche}.`)
console.log()
console.log(`O ressarcimento para o seu plano de saúde é de R$ ${r_saude}.`)
console.log()
console.log(`O Auxílio Combustível é de R$ ${ac}.`)
console.log()
console.log(`O Salário Bruto é de R$ ${salario_bruto}.`)
console.log()
console.log(`A previdência é de R$ ${previdencia}.`)
console.log()
console.log(`Seu Imposto de Renda é de R$ ${ir}.`)
console.log()
console.log(`O total de descontos é de R$ ${descontos}.`)
console.log()
console.log(`O seu salário líquido é de R$ ${sl}`)
}

function cabecalho(){
    console.log('------------------------------------------------------------------------------------')
    console.log('Aluna: Meir Naã Castro Leandro (questão 1)')
    console.log()
}
function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}
function calcular_incremento(qualificacao,valor_hora,tempo){
   let obter_i = 0
    if(qualificacao = 'E'){
        let obter_i = 0.20 * valor_hora + tempo * (0.05 * valor_hora)
        return obter_i
    }
    else if(qualificacao = 'M'){
        let obter_i = 0.30 * valor_hora + tempo * (0.05 * valor_hora)
        return obter_i
    }
    else if(qualificacao = 'D'){
        let obter_i = 0.50 * valor_hora + tempo * (0.05 * valor_hora)
        return obter_i
    }
    return obter_i
}
function calcular_salario_semanal(incremento,horas_semana){
    let obter_sm = incremento * horas_semana
    return obter_sm
}
function calcular_salario_mensal(salario_semanal){
    let obter_sm = (4.5 * salario_semanal)
    return obter_sm
}
function calcular_auxilio_creche(qt_filhos){
    let obter_auxilio_creche = 700 * qt_filhos
    return obter_auxilio_creche
}
function calcular_ressarcimento_saúde(plano_saude){
    if(plano_saude >= 1000){
        let obter_r_saude = 500
        return obter_r_saude
    }else{
        let obter_r_saude = 0.50 * plano_saude
        return obter_r_saude
    }
}
function calcular_auxilio_combustivel(horas_semana){
    let obter_ac = 30 * (horas_semana / 8)
    return obter_ac
}
function calcular_salario_bruto(salario_mensal,auxilio_creche,r_saude,ac){
    let obter_sb = salario_mensal + auxilio_creche + r_saude + ac
    return obter_sb
}
function calcular_previdencia(salario_bruto){
    let obter_p = 0
    if(salario_bruto <= 1302 ){
        let obter_p = (7.5/100) * salario_bruto 
        return obter_p
    }
    else if(salario_bruto > 1302 && salario_bruto <= 2500){
        let obter_p = (9/100) * salario_bruto 
        return obter_p
    }
    else if(salario_bruto > 2500 && salario_bruto <= 3900){
        let obter_p = (12/100) * salario_bruto 
        return obter_p
    }
    else if(salario_bruto > 3900 && salario_bruto <= 7500){
        let obter_p = (14/100) * salario_bruto 
        return obter_p
    }
    else if(salario_bruto > 7500){
        let obter_p = (16/100) * salario_bruto 
        return obter_p
    }
    return obter_p
}
function calcular_imposto_renda(salario_bruto){
    if(salario_bruto > 5000){
        let obter_ir = (27.5/100) * salario_bruto
        return obter_ir
    }else{
        let obter_ir = 0
        return obter_ir
    }
}
function total_descontos(previdencia,ir){
    let obter_d = previdencia + ir
    return obter_d 
}
function calcular_salario_liquido(salario_bruto,descontos){
    let salario_l = salario_bruto - descontos
    return salario_l
}
function rodape(){
    console.log()
    console.log('------------------------------------------------------------------------------------')
}
main() 