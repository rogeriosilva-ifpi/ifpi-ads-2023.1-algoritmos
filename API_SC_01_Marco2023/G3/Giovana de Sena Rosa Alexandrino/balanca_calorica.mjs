import { question } from "readline-sync";

function main(){

    cabecalho()

    const nome = question('. Nome: ')
    const sexo = question('. Sexo: ')
    const idade = obter_numero('. Idade: ')
    const peso = obter_numero('. Peso: ')
    const altura = obter_numero('. Altura: ')
    const atv_fisica = question('. Perfil Atividade Física: ')

    const necessidade_calorica = calcular_nec_calorica(idade, peso, altura, atv_fisica, sexo)
    console.log()
    console.log(`> Sua necessidade calórica é de ${Math.floor(necessidade_calorica)} kcal!`)

    console.log()
    const desejo_usuario = question('. Você deseja ganhar ou perder peso? ')
    const quantos_kg = obter_numero('. Quantos quilos? ')
    const qtd_semanas = obter_numero('. Em quantas semanas? ')

    // 1kg = 7.700 kcal

    const qtd_kg_por_semana = Math.floor(quantos_kg / qtd_semanas)
    const kcal_semanais = Math.floor((quantos_kg * 7700) / qtd_semanas)
    const kcal_diarias = Math.floor(kcal_semanais / 7)

    if (desejo_usuario === 'Ganhar'){
            console.log()
            console.log(`> Você vai precisar ganhar ${qtd_kg_por_semana} kg/semana! Isso 
    corresponde a ${kcal_semanais} kcal/semana! Logo, você precisará consumir ${kcal_diarias} kcal a mais
    por dia, totalizando ${Math.floor(necessidade_calorica + kcal_diarias)} kcal diárias!`)
    }else{
            console.log()
            console.log(`> Você vai precisar perder ${qtd_kg_por_semana} kg/semana! Isso 
    corresponde a ${kcal_semanais} kcal/semana! Logo, você precisará consumir ${kcal_diarias} kcal a menos 
    por dia, totalizando ${Math.floor(necessidade_calorica - kcal_diarias)} kcal diárias!`)
    }

    const conversao_kg_para_g = (necessidade_calorica + kcal_diarias) / 7.7

    const proteinas_kcal = Math.floor((40 * (necessidade_calorica + kcal_diarias)) / 100)
    const carboidratos_kcal = Math.floor((40 * (necessidade_calorica + kcal_diarias)) / 100)
    const gorduras_kcal = Math.floor((20 * (necessidade_calorica + kcal_diarias)) / 100)

    const proteinas_g = Math.floor((40 * conversao_kg_para_g) / 100)
    const carboidratos_g = Math.floor((40 * conversao_kg_para_g) / 100)
    const gorduras_g = Math.floor((20 * conversao_kg_para_g) / 100)

    console.log()
    console.log('>>> Nova Dieta:')
    console.log(`. Proteínas: ${proteinas_kcal}kcal, ou seja, ${proteinas_g}g`)
    console.log(`. Carboidratos: ${carboidratos_kcal}kcal, ou seja, ${carboidratos_g}g`)
    console.log(`. Gorduras: ${gorduras_kcal}kcal, ou seja, ${gorduras_g}g`)

    if (qtd_kg_por_semana > 1){
        console.log()
        console.log(' ALERTA!')
        console.log(' Cuidado! Isso pode comprometer a sua saúde!')
    }else{
        console.log()
        console.log(` BOA SORTE ${nome}!`)
        console.log(' Se seguir a nova dieta e manter o ritmo de exercícios você vai conseguir atingir o objetivo!')
    }

    rodape()

}

function cabecalho(){

    console.log()
    console.log('     1ª PROVA ALGORITMOS E PROGRAMAÇÃO')
    console.log('     ---------------------------------')

}


function obter_numero(informacao){

    const numero = Number(question(informacao))
    return numero

}

function calcular_nec_calorica(idade, peso, altura, atv_fisica, sexo){

    if (sexo === 'Homem' && atv_fisica === 'Sedentario'){
        const resultado = (662 - (9.53 * idade) + 1 * (15.91 * peso) + (539.6 * altura))
        return resultado
    }else if (sexo === 'Homem' && atv_fisica === 'Pouco ativo'){
        const resultado = (662 - (9.53 * idade) + 1.11 * (15.91 * peso) + (539.6 * altura))
        return resultado
    }else if (sexo === 'Homem' && atv_fisica === 'Ativo'){
        const resultado = (662 - (9.53 * idade) + 1.25 * (15.91 * peso) + (539.6 * altura))
        return resultado
    }else if (sexo === 'Homem' && atv_fisica === 'Muito ativo'){
        const resultado = (662 - (9.53 * idade) + 1.48 * (15.91 * peso) + (539.6 * altura))
        return resultado
    }else if (sexo === 'Mulher' && atv_fisica === 'Sedentario'){
        const resultado = (354 - (6.91 * idade) + 1 * (9.36 * peso) + (726 * altura))
        return resultado
    }else if (sexo === 'Mulher' && atv_fisica === 'Pouco ativo'){
        const resultado = (354 - (6.91 * idade) + 1.12 * (9.36 * peso) + (726 * altura))
        return resultado
    }else if (sexo === 'Mulher' && atv_fisica === 'Ativo'){
        const resultado = (354 - (6.91 * idade) + 1.27 * (9.36 * peso) + (726 * altura))
        return resultado
    }else if (sexo === 'Mulher' && atv_fisica === 'Muito ativo'){
        const resultado = (354 - (6.91 * idade) + 1.45 * (9.36 * peso) + (726 * altura))
        return resultado
    }

}

function rodape(){

    console.log('     ---------------------------------')
    console.log('     Muito obrigada pela participação!')

}

main()