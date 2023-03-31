import { question } from "readline-sync"
import * as funcs from "./funcoes.js"

/*
empréstimo após conclusão
juros anual 10% (10% do valor original + valor original)
taxas de juro
    taxa_selic = 13.75
    renda_familiar = 1.302
    
*/
function main() {
    const curso_duracao = Number(question('Qual a duração do curso? --->'))
    const mensalidade = Number(question('Qual a mensalidade do curso? --->'))
    const taxa_selic = Number(question('Qual a taxa SELIC do curso? --->'))
    const renda_familiar = Number(question('Qual a renda familiar? --->'))
    const qtd_pessoas = Number(question('Qual o número de pessoas na família? --->'))
    const ano_inicio = Number(question('Qual o ano de início do curso? --->'))
    const semestre_inicio = Number(question('Qual o semestre inicial do curso? --->'))
        // const curso_duracao = 4
        // const mensalidade = 370
        // const taxa_selic = 13.75
        // const salario_atual = 1302
        // const renda_familiar = 3400
        // const qtd_pessoas = 7
        // const ano_inicio = 2023
        // const semestre_inicio = 1

    // Parcela fixa (item E)
    let parcela_fixa = 150 * (12 / 3)
    console.log(`Parcela fixa: ${parcela_fixa}`)

    // Pagamento durante todo o curso
    let pagamento_total_durante_curso = curso_duracao * parcela_fixa
    console.log(`Pagamento total durante o curso: ${pagamento_total_durante_curso}`)

    // Carência
    carencia = 18 * 150

    // Renda familiar
    console.log(`Renda familiar: ${renda_familiar}`)

    // Calcular/Verificar renda per capita [Item: B]
    let renda_per_capita = (renda_familiar / salario_atual).toFixed(1)
    console.log(`Renda per capita: ${renda_per_capita}`)

    // Valor máximo a pedir para usar o FIES
    let valor_limite = salario_atual * 3
    console.log(`Valor limite: ${valor_limite}`)

    // Calcular/Verificar taxas Selic p/ determinar os juros
    let juros = 0
    if (renda_per_capita <= 1.5) {
        juros = 10 / 100
    } else if (renda_per_capita <= 2) {
        juros = 15 / 100
    } else if (renda_per_capita <= 2.5) {
        juros = 20 / 100
    } else {
        juros = 25 / 100
    }
    console.log(juros)

    // Pagamento anual
    let juros_na_parcela_fixa = parcela_fixa * juros
    let pagamento_anual_com_juros = parcela_fixa + juros_na_parcela_fixa
    console.log('Pagamento anual com juros: ', pagamento_anual_com_juros)

    // Juros total
    let juros_total = juros_na_parcela_fixa * curso_duracao
    console.log('Juros total: ', juros_total)

    // Verificar se é APROVADO [RESPOSTA 1]
    let apto = ''
    if (renda_familiar < valor_limite) {
        apto = 'Aprovado'
    } else {
        apto = 'Reprovado'
    }
    console.log(apto)

    // Ano de conclusão do pagamento
    const ano_final = ano_inicio + curso_duracao

    print('========== RELATÓRIO =========')
    print(`Apto a usar o FIES? ${apto}`) // Item [A]
    print(`Valor total dos juros? R$${juros_total}`) // [Item C]
    print(`Valor a pagar durante o curso e na carência? R$: ${pagamento_total_durante_curso} / ${carencia}`) // Item [D]
    print(`Ano de início, fim e semestre do pagamento: ${ano_inicio} / ${ano_final} / ${semestre_inicio}`) // Item [H]

}

function print(content) {
    console.log(content)
}

main()