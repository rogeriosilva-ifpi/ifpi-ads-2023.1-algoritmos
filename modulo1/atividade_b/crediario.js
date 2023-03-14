import { question } from 'readline-sync'

// Variação pedir tbm qtd de parcelar
// Entrada
const valor_total = Number(question('Valor do Bem: '))

// Processamento 620 (ent: 206+2, 1. 206 2.206)
const parcela = Math.floor(valor_total / 3)
const restante = valor_total % 3
const entrada = parcela + restante

// Saída
console.log('Entrada: R$', entrada.toFixed(2))
console.log('+ 2x de R$: ', parcela.toFixed(2))
