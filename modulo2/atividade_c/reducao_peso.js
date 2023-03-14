import { question } from "readline-sync"

function main(){
    const peso_atual = Number(question('Peso atual(kg):'))
    const perc_reducao = Number(question('Quanto a perder (%): '))
    const qtd_semanas = Number(question('Quantas semanas: '))

    const peso_a_reduzir = calcular_percentual(peso_atual, perc_reducao)
    const calorias_a_reduzir = converter_peso_em_calorias(peso_a_reduzir)
    const qtd_dias = converter_semana_em_dias(qtd_semanas)

    const deficit_diario = calorias_a_reduzir / qtd_dias
    console.log(`Deficit diário necessário: ${deficit_diario.toFixed(2)} kcal.`)

    const consumo_diario = Number(question('Quanto desejar consumir por dia (kcal): '))
    const gasto_diario = consumo_diario + deficit_diario

    console.log(`Você deverá gastar diariamente ${gasto_diario.toFixed(2)} kcal com suas atividades.`)
}

function calcular_percentual(valor, percentual){
    const peso = valor * (percentual/100)
    return peso
}

function converter_peso_em_calorias(peso){
    const calorias = peso * 7700
    return calorias
}

function converter_semana_em_dias(semanas){
    const dias = semanas * 7
    return dias
}

main()