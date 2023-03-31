import { question } from 'readline-sync'

function main(){

    // Entrada:

    const nome = question('Informe seu nome: ')
    const sexo = question('Informe o seu sexo: ')
    const idade = Number(question('Informe sua idade: '))
    const peso = Number(question('Informe seu peso em kg: '))
    const altura = Number(question('Informe sua altura em metros: '))
    const af = Number(question('Informe o seu AF de acordo com o seu nível de atividade (SEDENTÁRIO -> AF = 1(Homens e mulheres); POUCO ATIVO -> AF = 1.11(Homens) ou 1.12(Mulheres); ATIVO -> AF = 1.25(Homens) ou 1.27(Mulheres); MUITO ATIVO -> AF = 1.48(Homens) ou 1.45(Mulheres)): '))
    const ganhar_ou_perder = question('Informe se você deseja ganhar ou perder peso: ')
    const peso_a_ganhar_ou_perder = Number(question('Informe quantos kgs você deseja ganhar ou perder: '))
    const semanas = Number(question('Informe em quantas semanas você deseja atingir esse objetivo: '))

    // Processamento:

    const necessidade_cal_homem = calcular_necessidade_cal_homem(idade, peso, altura, af)
    const necessidade_cal_mulher = calcular_necessidade_cal_mulher(idade, peso, altura, af)
    const kg_por_semana = calcular_kg_por_semana(peso_a_ganhar_ou_perder, semanas)
    const cal_por_dia = calcular_cal_por_dia(peso_a_ganhar_ou_perder, semanas)
    const nova_dieta = calcular_nova_dieta(cal_por_dia)

    // Saída:

    console.log(' <-------------------------------------------------------------------> ')
    console.log('A necessidade calórica do usuário do sexo masculino para manter o seu peso é de: ', necessidade_cal_homem.toFixed(2))
    console.log('A necessidade calórica do usuário do sexo feminino para manter o seu peso é de: ', necessidade_cal_mulher.toFixed(2))
    console.log(' <-------------------------------------------------------------------> ')
    console.log(kg_por_semana)
    console.log(' <-------------------------------------------------------------------> ')
    console.log(`Você deve consumir ${cal_por_dia} calorias a mais por dia para ganhar peso, ou criar um déficit calórico de ${cal_por_dia} calorias por dia para perder peso (tomando por base suas calorias de manutenção).`)
    console.log(' <-------------------------------------------------------------------> ')
    console.log(nova_dieta)
}

function calcular_necessidade_cal_homem(idade, peso, altura, af){
    const necessidade_cal = 662 - (9.53 * idade) + af * (15.91 * peso) + (539.6 * altura)

    return necessidade_cal
}

function calcular_necessidade_cal_mulher(idade, peso, altura, af){
    const necessidade_cal = 354 - (6.91 * idade) + af * (9.36 * peso) + (726 * altura)

    return necessidade_cal
}

function calcular_kg_por_semana(peso_a_ganhar_ou_perder, semanas){
    const kgs_por_semana = (peso_a_ganhar_ou_perder / semanas).toFixed(2)
    const cal_por_semana = (kgs_por_semana * 7700).toFixed(2)

    if (kgs_por_semana > 1) {
        return `Você deve ganhar/perder ${kgs_por_semana} kgs por semana para alcançar seu objetivo. Isso representa uma quantidade de ${cal_por_semana} calorias a mais ou a menos por semana (tomando por base suas calorias de manutenção). ATENÇÃO: Ganhar ou perder mais de 1kg por semana pode comprometer a sua saúde! Procure o seu médico para que ele possa lhe orientar da melhor maneira possível.`
    } else {
        return `Você deve ganhar/perder ${kgs_por_semana} kgs por semana para alcançar seu objetivo. Isso representa uma quantidade de ${cal_por_semana} calorias a mais ou a menos por semana (tomando por base suas calorias de manutenção). Você consegue!`
    }
}

function calcular_cal_por_dia(peso_a_ganhar_ou_perder, semanas){
    const kgs_por_semana = (peso_a_ganhar_ou_perder / semanas).toFixed(2)
    const cal_por_semana = (kgs_por_semana * 7700).toFixed(2)
    const cal_por_dia = (cal_por_semana / 7).toFixed(2)

    return cal_por_dia
}

function calcular_nova_dieta(cal_por_dia){
    const proteinas = (0.4 * cal_por_dia).toFixed(2)
    const carboidratos = (0.4 * cal_por_dia).toFixed(2)
    const gorduras = (0.2 * cal_por_dia).toFixed(2)

    const proteinas_em_g = (proteinas / 4).toFixed(2)
    const carbo_em_g = (carboidratos / 4).toFixed(2)
    const gorduras_em_g = (gorduras / 9).toFixed(2)

    return `Na sua dieta, para ganhar ou perder peso, você deve consumir ou diminuir (tomando por base suas calorias de manuntenção) ${proteinas} cal de proteínas por dia, que representa ${proteinas_em_g} g por dia, ${carboidratos} cal de carboidratos por dia, que representa ${carbo_em_g} g por dia, e ${gorduras} cal de gordura por dia, que representa ${gorduras_em_g} g por dia.`
}

main()