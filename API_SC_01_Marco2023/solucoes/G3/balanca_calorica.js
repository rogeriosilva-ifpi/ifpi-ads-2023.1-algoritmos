import { question } from 'readline-sync'
function main(){
    // Entrada
    const nome = question('Nome: ')
    const sexo = question('Sexo [M|F]: ')
    const idade = Number(question('Idade: '))
    const peso = Number(question('Peso (Kg): '))
    const altura = Number(question('Altura (m): '))
    const perfil_atv = Number(question('Perfil Atividade [S | PA | A | MA]: '))

    // Processamento
    const necessidade_calorica = calcular_necessidade_calorica(sexo, idade, peso, altura, perfil_atv)

    // Saída
    console.log(`Olá ${nome}!`)
    console.log(`Sua necessidade calórica diária é ${necessidade_calorica.toFixed(1)} kcal`)

    // Outro bloco
    // Entrada
    const ganhar_perder = question('Você quer Ganhar (G) ou Perder (P) peso: ')
    const kg = Number(question('Quantos Kg: '))
    const semanas = Number(question('Em quantas semanas: '))
    

    // Processamento
    const objetivo = ganhar_perder === 'G' ? 'Ganhar' : 'Perder'
    const kg_por_semana = kg / semanas
    const diff_calorica_diaria = calcular_diff_calorica_diaria(kg_por_semana)
    const reduzir_aumentar = ganhar_perder === 'G' ? 'Aumentar' : 'Reduzir'
    
    const nova_consumo_calorico_diario = calcular_nova_necessidade_calorica(necessidade_calorica, diff_calorica_diaria, objetivo)
    const calorias_proteina = calcular_distribuica_calorica(nova_consumo_calorico_diario, 'P')
    const calorias_carboidratos = calcular_distribuica_calorica(nova_consumo_calorico_diario, 'C')
    const calorias_gorduras = calcular_distribuica_calorica(nova_consumo_calorico_diario, 'G')

    const gramas_proteina = calcular_gramas(calorias_proteina, 'P')
    const gramas_carboidratos = calcular_gramas(calorias_carboidratos, 'C')
    const gramas_gorduras = calcular_gramas(calorias_gorduras, 'G')

    // Saída
    console.log(`Você precisará ${objetivo} ${kg_por_semana.toFixed(3)}kg por semana!`)
    console.log(`Para atingir seu objetivo precisará ${reduzir_aumentar} ${diff_calorica_diaria.toFixed(1)} kcal na dieta diária`)
    console.log(`Sua nova necessidade Calória é de ${nova_consumo_calorico_diario.toFixed(1)} kcal`)
    console.log('Sua nova Dieta ficará:')
    console.log(`Calorias diárias: ${nova_consumo_calorico_diario.toFixed(1)}`)
    console.log(`> Proteínas (40%): ${calorias_proteina.toFixed(1)} kcal - (${gramas_proteina.toFixed(1)}g)`)
    console.log(`> Carboidratos (40%): ${calorias_carboidratos.toFixed(1)} kcal - (${gramas_carboidratos.toFixed(1)}g)`)
    console.log(`> Gorduras (20%): ${calorias_gorduras.toFixed(1)} kcal - (${gramas_gorduras.toFixed(1)}g)`)

    let mensagem = 'Parabéns pela iniciativa. Se vc seguir a nova dieta vai atingir seu objetivo'

    if (kg_por_semana > 1){
        mensagem = 'Cuidado ganhar/perder mais de 1kg pode semana pode afetar sua saúde'
    }

    console.log(mensagem)
}


function calcular_distribuica_calorica(nova_consumo_calorico_diario, tipo){
    if (tipo === 'P' || tipo === 'C'){
        return nova_consumo_calorico_diario * (40/100)
    }else{
        return nova_consumo_calorico_diario * (20/100)
    }
}

function calcular_gramas(calorias, tipo){
    if (tipo === 'P' || tipo === 'C'){
        return calorias / 4
    }else{
        return calorias / 9
    } 
}

function calcular_nova_necessidade_calorica(necessidade_calorica, diff_calorica_diaria, objetivo){
    if (objetivo === 'G'){
        return necessidade_calorica + diff_calorica_diaria
    }else{
        return necessidade_calorica - diff_calorica_diaria
    }
}

function calcular_diff_calorica_diaria(kg_por_semana){
    const diff = (kg_por_semana * 7700) / 7
    return diff
}

function calcular_necessidade_calorica(sexo, idade, peso, altura, perfil_atv){
    const indice_af = calcular_indice_af(sexo, perfil_atv)

    if (sexo === 'M'){
        // homem
        return 662 - (9.53 * idade) + indice_af * (15.91 * peso ) + (539.6 * altura)
    }else{
        // mulher
        return 354 - (6.91 * idade) + indice_af * (9.36 * peso) + (726 * altura)
    }
}

function calcular_indice_af(sexo, perfil_atv){
    if (perfil_atv === 'S'){
        return 1
    }else if (perfil_atv === 'PA'){
        return sexo === 'M' ? 1.11 : 1.12
    }else if (perfil_atv === 'A'){
        return sexo === 'M' ? 1.25 : 1.27
    }else{ // MA
        return sexo === 'M' ? 1.48 : 1.45
    }

}

main()