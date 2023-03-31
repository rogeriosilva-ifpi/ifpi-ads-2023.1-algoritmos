import { question } from "readline-sync";

function main(){
    const nome = question('Nome: ')
    console.log('Escolha a sigla que corresponda ao gênero, sendo: ')
    console.log('H - Homem')
    console.log('M - Mulher')
    const sexo = question('Sexo(H ou F): ')
    const idade = Number(question('Idade (anos): '))
    const peso = Number(question('Peso (kg): '))
    const altura = Number(question('Altura (m): '))
    console.log('Escolha a sigla de um Perfil de Atividade Física: ')
    console.log('S = Sedentário')
    console.log('PA = Pouco Ativo')
    console.log('A = Ativo')
    console.log('MA = Muito Ativo')
    const perfil = question('Perfil de Atividade Física: ')
    const multiplic_ritmo_af = Number(calculo_multiplicador_ritmo_atv_fisica(perfil, sexo))
    const necessidade_calorica_diaria = Number(calculo_necessidade_calorica(sexo, idade, multiplic_ritmo_af, peso, altura))

    console.log(`Olá ${nome}, a sua Necessidade Calórica Diária é igual a ${necessidade_calorica_diaria.toFixed(2)} calorias.`)

    const meta_ganhar_perder = question(`Você quer 'Ganhar' ou 'Perder' Peso?: `)
    const qtd_ganhar_perder = Number(question('Quantos kg:'))
    const periodo = Number(question(`Em quantas semanas?: `))
    const kg_semana = verificar_quantas_kg_perder_ganhar_semana(qtd_ganhar_perder, periodo)
    const kg_calorias = transformar_kg_em_calorias(kg_semana)

    console.log(`Você deve ${meta_ganhar_perder} ${kg_semana} kg por semana, o que equivale a ${meta_ganhar_perder} ${kg_calorias} calorias.`)

    const calorias_diarias = calcular_calorias_diarias(kg_calorias)
    console.log(`Você deve consumir para ${meta_ganhar_perder} peso o equivalente a ${calorias_diarias} calorias a mais diariamente.`)

    const caloria_proteina = calculo_caloria_proteina(meta_ganhar_perder, necessidade_calorica_diaria, calorias_diarias)
    const caloria_carboidrato = calculo_caloria_carboidrato(meta_ganhar_perder, necessidade_calorica_diaria, calorias_diarias)
    const caloria_gordura = calculo_caloria_gordura(meta_ganhar_perder, necessidade_calorica_diaria, calorias_diarias)
    const gramas_proteina = calculo_gramas_proteina(caloria_proteina)
    const gramas_carboidrato = calculo_gramas_carboidrato(caloria_carboidrato)
    const gramas_gordura = calculo_gramas_gordura(caloria_gordura)

    console.log(`A sua dieta deverá estar dividida entre ${caloria_proteina.toFixed(2)} calorias (${gramas_proteina.toFixed(2)} g) de proteina, ${caloria_carboidrato.toFixed(2)} calorias (${gramas_carboidrato.toFixed(2)} g) de carboidrato e ${caloria_gordura.toFixed(2)} calorias (${gramas_gordura.toFixed(2)} g) de gordura.`)
    
    console.log()
    if (kg_semana > 1){
        console.log(`ATENÇÃO: ${meta_ganhar_perder} mais de 1kg/semana poderá comprometer a sua saúde`)
    }else{
        console.log(`É isso ai! Você conseguirá atingir o seu objetivose seguir a nova dieta e manter o ritmo de exercícios.`)
    }
}

function calculo_multiplicador_ritmo_atv_fisica(perfil, sexo){
    if (perfil === 'S' && sexo === 'H'){
        return 1

    }else if(perfil === 'S' && sexo === 'M'){
        return 1

    }else if(perfil === 'PA' && sexo === 'H'){
        return 1.11
    
    }else if(perfil === 'PA' && sexo === 'M'){
        return 1.12

    }else if(perfil === 'A' && sexo === 'H'){
        return 1.25
    
    }else if(perfil === 'A' && sexo === 'M'){
        return 1.27
    
    }else if(perfil === 'MA' && sexo === 'H'){
        return 1.48

    }else{
        return 1.45
    }   
}

function calculo_necessidade_calorica(sexo, idade, multiplic_ritmo_af, peso, altura){
    if (sexo === 'H'){
        return `${662 - (9.53 * idade) + multiplic_ritmo_af * (15.91 * peso) + (539.6 * altura)}`
    }else{
        return `${354 - (6.91 * idade) + multiplic_ritmo_af * (9.36 * peso) + (726 * altura)}`
    }
}

function verificar_quantas_kg_perder_ganhar_semana(qtd_ganhar_perder, periodo){
    const calc = qtd_ganhar_perder / periodo
    return calc
}

function transformar_kg_em_calorias(kg_semana){
    const calc = kg_semana * 7700
    return calc
}

function calcular_calorias_diarias(kg_calorias){
    const calc = kg_calorias / 7
    return calc
}

function calculo_caloria_proteina(meta_ganhar_perder, necessidade_calorica_diaria, calorias_diarias){
    if (meta_ganhar_perder === 'Ganhar'){
        return (necessidade_calorica_diaria + calorias_diarias) * (40 / 100)
    
    }else{
        return (necessidade_calorica_diaria - calorias_diarias) * (40 / 100)
    }
}

function calculo_caloria_carboidrato(meta_ganhar_perder, necessidade_calorica_diaria, calorias_diarias){
    if (meta_ganhar_perder === 'Ganhar'){
        return (necessidade_calorica_diaria + calorias_diarias) * (40 / 100)
    
    }else{
        return (necessidade_calorica_diaria - calorias_diarias) * (40 / 100)
    }
}

function calculo_caloria_gordura(meta_ganhar_perder, necessidade_calorica_diaria, calorias_diarias){
    if (meta_ganhar_perder === 'Ganhar'){
        return (necessidade_calorica_diaria + calorias_diarias) * (20 / 100)
    
    }else{
        return (necessidade_calorica_diaria - calorias_diarias) * (20 / 100)
    }
}

function calculo_gramas_proteina(caloria_proteina){
    const calc = caloria_proteina / 4
    return calc
}

function calculo_gramas_carboidrato(caloria_carboidrato){
    const calc = caloria_carboidrato / 4
    return calc
}

function calculo_gramas_gordura(caloria_gordura){
    const calc = caloria_gordura / 9
    return calc
}

main()