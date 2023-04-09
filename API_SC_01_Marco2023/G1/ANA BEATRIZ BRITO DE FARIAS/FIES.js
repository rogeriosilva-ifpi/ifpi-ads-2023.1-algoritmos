import { question } from 'readline-sync'

function Fies(){
    const duração_curso = Number(question('Digite a duração do curso:'))
    const valor_mensalidade = Number(question('Digite o valor da mensalidade:'))
    const salario = Number(question(' Digite o a quantidade de Salarios :'))
    const semestre = Number(question('Digite o semestre de inicio: '))    
    
    const dura_curso_meses = duração_curso * 12
    const quant_semestre = (semestre * 6)
    const valor_financiamento = (quant_semestre * valor_mensalidade)
    const valor_total = (valor_mensalidade * dura_curso_meses)
    const taxa_anual =  ((valor_total * 10) /100)

    if (salario >= 0 && salario <=1,5){
        return `
    Aprovado para contratar o Fies, a taxa Selic é de 10% e o salario minimo vigente é de 1.302 reais, 
    Valor total a ser financiado: ${valor_financiamento}
    Valor total dos juros: ${taxa_anual}
    Valor total a Pagar ${valor_total}`
    }
    if (salario >1,5 && salario <=2){
        return `
    Aprovado para contratar o Fies, a taxa Selic é de 15% e o salario minimo vigente é de 1.302 reais,
    Valor total a ser financiado: ${valor_financiamento}
    Valor total dos juros: ${taxa_anual}
    Valor total a Pagar ${valor_total}`
    }
    if (salario >2 && salario <=2,5){
        return `
    Aprovado para contratar o Fies, a taxa Selic é de 20% e o salario minimo vigente é de 1.302 reais,
    Valor total a ser financiado: ${valor_financiamento}
    Valor total dos juros: ${taxa_anual}
    Valor total a Pagar ${valor_total}`
    }
    if (salario > 2,5 && salario<=3){
        return `
    Aprovado para contratar o Fies, a taxa Selic é de 25% e o salario minimo vigente é de 1.302 reais,
    Valor total a ser financiado: ${valor_financiamento}
    Valor total dos juros: ${taxa_anual}
    Valoe total a Pagar ${valor_total}`
    }
    else{
        return 'Voce não está aprovado para contratar o Fies'
    }

 }

console.log(Fies())