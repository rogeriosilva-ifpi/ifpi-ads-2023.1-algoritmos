/**
 * Leia o salário de um trabalhador e escreva seu novo salário 
 * com um aumento de 25%.
 */

import * as readsync from 'readline-sync'

// Entrada
const salario = Number(readsync.question('Salário R$: '))
const percentual = Number(readsync.question('Aumento %: '))

// Processamento
const aumento = (salario/100) * percentual
const novo_salario = salario + aumento

// Saída
console.log('Novo salário R$', novo_salario.toFixed(2), ' Aumento de R$', aumento)