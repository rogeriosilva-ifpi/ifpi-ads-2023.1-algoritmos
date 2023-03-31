import { question } from "readline-sync";

function main(){

    const valorAula = Number(question('Valor da hora:'))
    const nome = question('Nome do Professor:')
    const horasSemanais = Number(question('Horas semanais:'))
    const qualificacao = question('Qualificação (E,M ou D):')
    const experiencia = Number(question('Tempo de experiente(meses):'))
    const filhos = Number(question('Quantidade de filhos (até 6 anos):'))
    const planoSaude = Number(question('Valor do Plano de saúde:'))


    const valorPorQualidade = obterValorQualidade(valorAula,qualificacao)
    const valorPorExperiencia = obterValorExperiencia(experiencia,valorPorQualidade)
    const valorSemanal = valorPorExperiencia * horasSemanais
    const valorMensal = 4.5 * valorSemanal
//Beneficios
    const creche = 700 * filhos
    const planoDeSaude = obterSaude(planoSaude)
    const auxilioCombustivel = auxCombustivel(horasSemanais)
//Descontos
    const previdenciaSocial = obterPrevidencia(valorMensal)
    const impostoRenda = obterIR(valorMensal)

    const salarioBruto = (valorMensal + creche + auxilioCombustivel + planoDeSaude)
    const salarioLiquido = salarioBruto - (impostoRenda + previdenciaSocial)

    console.log(`Nome: ${nome}`)
    console.log(`Valor por hora: R$ ${valorAula}`)
    console.log(`Salário semanal: R$ ${valorSemanal}`)
    console.log(`---GANHOS---`)
    console.log(`Salário Base Mensal: R$ ${valorMensal}`)
    console.log(`Auxilio creche: ${creche}`)
    console.log(`Ressarcimento saúde: R$ ${planoDeSaude}`)
    console.log(`Auxilio combustível: R$ ${auxilioCombustivel}`)
    console.log(`Salário Bruto: R$ ${salarioBruto}`)
    console.log(`---Descontos---`)
    console.log(`Previdência: R$ ${previdenciaSocial}`)
    console.log(`Imposto de renda: R$ ${impostoRenda}`)
    console.log(`Salário Líquido: R$ ${salarioLiquido}`)


}
main()

function obterValorQualidade(valorAula,qualificacao){
    if (qualificacao === 'E'){
        return (valorAula * 1.2)
    }else if (qualificacao === 'M'){
        return (valorAula * 1.3)
    }else{
        return (valorAula * 1.5)

    }
}

function obterValorExperiencia(experiencia,valorPorQualidade){
    if (experiencia < 6){
        return (valorPorQualidade)
    }else{
        return ((1.05*valorPorQualidade) * experiencia/12)
        }
    }
    


function obterSaude(planoSaude){
    if (planoSaude * 0.5 >= 500){
        return (planoSaude - 500)
    }else{
        return (planoSaude/2)
    }
}

function auxCombustivel(horasSemanais){
    const auxilioC = Math.floor(horasSemanais/8) * 30
    return auxilioC
}

function obterPrevidencia(valorMensal){
    if (valorMensal <= 1302){
        return (valorMensal * 0.075)
    }else if (valorMensal<= 2500){
        return (valorMensal * 0.05)
    }else if (valorMensal <= 3900){
        return (valorMensal * 0.12)
    }else if (valorMensal <= 7500){
        return (valorMensal * 0.14)
    }else{
        return (valorMensal * 0.16)
    }
}

function obterIR(valorMensal){
    if (valorMensal <= 5000){
        return 0
    }else{
        return (valorMensal * 0.275)
    }
}