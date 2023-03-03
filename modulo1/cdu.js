
/**
 * F01_q05:
 * Leia um número inteiro (3 dígitos), 
 * calcule e escreva a soma de seus elementos (C + D + U).
 */

import * as readsync from 'readline-sync'

// entrada
const numero = Number(readsync.question('Número: ')) // 437

// processamento 
const centena = Math.floor(numero / 100) // -> 4
const resto = numero % 100 // -> 37

const dezena = Math.floor(resto / 10) // -> 3
const unidade = resto % 10

const soma = centena + dezena + unidade

// saída
console.log('Soma: ', soma)

