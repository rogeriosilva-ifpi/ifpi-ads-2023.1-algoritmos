import * as readsync from 'readline-sync'

// Entrada:
const nome = readsync.question('Nome')
const peso = Number(readsync.question('Peso: '))
const altura = Number(readsync.question('Altura: '))

// Processamento:
const imc = peso / (altura*altura)

// Saída:
console.log('Olá seja bem vindo!', nome )
console.log('Seu imc é de ', imc.toFixed(1))

