import * as readsync from 'readline-sync'

// Entrada
const velocidade_ms = Number(readsync.question('Velocidade (m/s): '))

// Processamento
const velocidade_kmh = velocidade_ms * 3.6

// Saída
console.log(velocidade_ms, 'm/s equivale a ', velocidade_kmh, 'km/h')