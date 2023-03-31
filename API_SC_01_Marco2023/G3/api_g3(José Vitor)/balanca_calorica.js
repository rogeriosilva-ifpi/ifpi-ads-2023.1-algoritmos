// 5. (balanca_calorica)

import { question } from "readline-sync";

//Entrada
function main(){
const nome = Number(question(`Nome: `))
const sexo= Number(question(`Sexo(h, m): `)) // homem ou mulher
const idade = Number(question(`Idade(Ano): `))
const peso = Number(question(`Peso(Kg): `))
const altura = Number(question(`altura(m): `))
const aF = Number(question(`Perfil Atividade Fisíca(s, pa, a, ma): `)) // sedentario, pouco ativo, ativo, muito ativo

//Processamento
const h = homem(sexo)
const m = mulher(sexo)
const s = sedentario(aF)
const pa = poucoAtivo(aF)
const a = ativo(aF)
const ma = muitoAtivo(aF)
const atividaFisica = calculoAtividadeFisica(aF)
const nCalDiaHomem = calculo_homem(sexo, idade, peso, altura, aF)
const nCalDiaMulher = calculo_mulher(sexo, idade, peso, altura, aF)
const kiloCaloria = 7700
const conversaoPeso = calculoConversaoPeso(peso, kiloCaloria)


//Saída 
console.log(`${necessidadeCaloricaDiaria}kCal`)
}
main()

//Funções
function calculoAtividadeFisica(aF, sedentario){
    if(aF === sedentario){
        return 1
    }else if(aF === poucoAtivo){
        return 1.11
    }else if (aF === ativo){
        return 1.25
    }else{
        return 1.48
    }
}

function calculo_homem(sexo, homem, idade, peso, altura, aF){
    if (sexo === homem){
    return necessidadeCaloricaDiaria = 662 - (9,53 * idade) + aF * (15.91 * peso) + (539,6 * altura)
}
}

function calculo_mulher(sexo, mulher, idade, peso, altura, aF){
    if (sexo === mulher){
    return necessidadeCaloricaDiaria = 354 - (6.91 * idade) + aF * (9.36 * peso) + (726 * altura)
}
}

function calculoConversaoPeso(peso, kiloCaloria){
    return peso === (peso * kiloCaloria)
}

const dieta = Number(question())