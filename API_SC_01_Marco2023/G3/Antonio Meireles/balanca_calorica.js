import { question } from "readline-sync";

function main() {
    console.log("---------------------------------------------------------------------");
    const nome = question(' Nome: ')
    const sexo = question(' Sexo(m ou f): ')
    const idade = Number(question(' Idade: '))
    const peso = Number(question(' Peso(kg): '))
    const altura = Number(question(' Altura(m): '))
    const perfil_atividade = question('\n - Sedentário(s); \n - Pouco ativo(p); \n - Ativo(a); \n - Muito ativo(m);\n Escolha um perfil de atividade acima:')
    
    let atividade_fisica = 0

    if (sexo === "m" || sexo === "f" ) {
        if(perfil_atividade === "s" || perfil_atividade === "p" || perfil_atividade === "a" || perfil_atividade === "m") {
            atividade_fisica = calculo_ritmo_de_atividade(sexo, perfil_atividade) 
        } else {
            console.log('###Informe um perfil de atividade válido!###');
            return
        }
    } else {
        console.log('###Informe um sexo válido!###');
        return
    }

    const necessidade_calorica = calculo_necessidade_calorica(idade, peso, altura, atividade_fisica,sexo)

    console.log(`
 Olá ${nome}!
 Sua necessidade calórica diária é de ${necessidade_calorica.toFixed(2)}kcal`);
    console.log("\n---------------------------------------------------------------------");

    
    const plano_dieta = question('\n Você deseja ganhar(g) ou perder(p) peso?: ' );
    const meta_kg = Number(question(' Quantos quilos pretende perder?: '))
    const meta_semanas = Number(question(' Em quantas semanas?: '))

    const kg_semana = meta_kg / meta_semanas
    const kg_diario = kg_semana/7
    const equivalente = kg_para_kcal(kg_semana)

    const consumo_kcal_diario = equivalente/7

    const nova_dieta = destribuir_dieta(kg_diario)


    if (plano_dieta === "p") {
        console.log( `\n Sendo assim, você terá que perder ${kg_semana.toFixed(2)}kg por semana, isso equivale à +/- ${equivalente.toFixed(2)}kcal`)

        console.log(`\n Você terá que consuir ${consumo_kcal_diario.toFixed(2)}kcal a menos por dia`)
    } else {
        console.log( `\n Sendo assim, você terá que ganhar ${kg_semana.toFixed(2)}kg por semana, isso equivale à +/- ${equivalente.toFixed(2)}kcal`)

        console.log(`\n Você terá que consuir ${consumo_kcal_diario.toFixed(2)}kcal a mais por dia`)
    }

    console.log(nova_dieta)

    if(kg_semana >= 1){
        console.log(' Cuidado!! Perder mais que 1kg por semana pode por sua saúde em risco. ');
    } else {
        console.log(' Siga diretinho a sua nova dieta que o shape vem.');
    }

}
    
function destribuir_dieta(kg_diario) {
    const proteinas = 0.4 * kg_diario
    const carboidratos = 0.4 * kg_diario
    const gorduras = 0.2 * kg_diario

    return ` 
 Sua nova dieta deve ser formada por:
    * Carboidratos: ${carboidratos.toFixed(2)}kg;
    * Proteinas: ${proteinas.toFixed(2)}kg;
    * Gorduras: ${gorduras.toFixed(2)}kg.
    `
}

function kg_para_kcal(meta_kg) {
    return meta_kg * 7700
}

function calculo_necessidade_calorica(idade, peso, altura, atividade_fisica, sexo){
    if (sexo === "m") {
        return 662 - (9.53 * idade) + atividade_fisica * (15.91 * peso) + (539.6 * altura)
    } else {
        return 354 - (6.91 * idade) + atividade_fisica * (9.36 * peso) + (726 * altura)
    }
}

function calculo_ritmo_de_atividade(sexo, perfil_atividade) {
    if (sexo === "m") {
        if(perfil_atividade === 's') {
            return 1
        } else if(perfil_atividade === 'p') {
            return 1.11
        } else if(perfil_atividade === 'a') {
            return 1.25
        } else {
            return 1.48
        }
    } else {
        if(perfil_atividade === 's') {
            return 1
        } else if(perfil_atividade === 'p') {
            return 1.12
        } else if(perfil_atividade === 'a') {
            return 1.27
        } else {
            return 1.45
        }
    }
}


main()