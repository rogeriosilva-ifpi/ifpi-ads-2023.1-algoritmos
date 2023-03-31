import { question } from "readline-sync"
import * as funcs from "./funcoes.js"

function main() {
    const valor_de_bem = Number(question('Valor do produto ---> '))
    const prazo_meses = Number(question('Prazo ---> '))
    const taxa_admin = Number(question('Valor da taxa de administração ---> '))
    const lance_inicial = Number(question('Valor de um lance inicial ---> '))
    const prazo_ou_parcela = Number(question('Reduzir ou manter prazo ou parcela ---> '))
    const renda_mensal = Number(question('Renda mensal ---> '))
        // const valor_de_bem = 9200
        // const prazo_meses = 12
        // const taxa_admin = 15
        // const lance_inicial = 420
        //     // const prazo_ou_parcela = 0
        // const renda_mensal = 2700

    // Total a pagar
    const acrescimo = valor_de_bem * (taxa_admin / 100)
    const total_pagar = valor_de_bem + acrescimo

    // Valor das parcelas
    const valor_parcelas = (total_pagar / prazo_meses).toFixed(2)

    // Renda mínima
    const renda_mensal_30_pct = renda_mensal * (30 / 100)

    // Se é aceito
    let aceito = ''
    if (renda_mensal_30_pct > valor_parcelas) {
        aceito = 'Aceito'
    } else {
        aceito = 'Não aceito'
    }

    print('========== SIMULAÇÃO =========')
    print(`Valor das parcelas: R$ ${valor_parcelas}`)
    print(`Total a pagar: R$ ${total_pagar}`)
    print(`Total da taxa de administração: R$ ${acrescimo}`)
    print(`Permite o resgate? ${aceito}`)

    print('========== ACEITO ==========')
    print(`Renda mínima necessária: R$ ${renda_mensal}`)
}

function print(content) {
    console.log(content)
}

main()