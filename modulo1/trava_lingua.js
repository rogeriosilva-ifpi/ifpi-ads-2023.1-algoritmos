/**
 * Leia 3 números, calcule e escreva a soma dos 2 primeiros 
 * e a diferença entre os 2 últimos.
 */
import * as readsync from 'readline-sync'

// entrada
const num1 = Number(readsync.question('Número 1: '))
const num2 = Number(readsync.question('Número 2: '))
const num3 = Number(readsync.question('Número 3: '))

// processamento
const soma = num1 + num2
const diff = num2 - num3

// saída
console.log('Soma: ', soma)
console.log('Diff: ', diff)
