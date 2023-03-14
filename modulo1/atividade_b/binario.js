import { question } from 'readline-sync'

// Entrada
const numero = Number(question('Binário 4 digitos: '))

// Processamento ()
const unidade = numero % 10
const dezena = ((numero % 100) - (unidade % 10)) / 10
const centena = ((numero % 1000) - (numero % 100)) / 100
const milhar = ((numero % 10_000) - (numero % 1000)) / 1000

// console.log(`M: ${milhar} - C: ${centena} - D: ${dezena} - U: ${unidade}`)

const resultado = (milhar * 2**3) + (centena * 2**2) + (dezena * 2) + unidade

// Saída
console.log(`O número binário ${numero} em decimal é: ${resultado}`)
