/**
 * Leia 2 (duas) frações (numerador e denominador), 
 * calcule e escreva a soma destas frações, 
 * escrevendo o resultado em forma de fração.
 */
import * as readsync from 'readline-sync'

// Alt+ Shift + DOWN
// Entrada
const num1 = Number(readsync.question('Numerador 1: '))
const den1 = Number(readsync.question('Denominador 1: '))
const num2 = Number(readsync.question('Numerador 2: '))
const den2 = Number(readsync.question('Denominador 2: '))

// Processamento
const denominador = den1 * den2
const numerador = ((denominador/den1)*num1) + ((denominador/den2)*num2)

// Saída
console.log('Resultado', numerador+'/'+denominador)

