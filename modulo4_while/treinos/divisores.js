/*
1. Leia uma lista de números e que para cada número lido, 
escreva o próprio número e a relação de seus
divisores. (flag número = 0).
*/
import { question } from "readline-sync"

function main() {
  console.log("****** Divisores de N Números *****")

  // Entrada
  let numero = Number(question("Favor digite um Número: "))

  while (numero != 0) {
    mostrar_divisores(numero)
    numero = Number(question("Favor digite um Número: "))
  }

  console.log(`> Vc digitou ${numero} e por isso tchau!`)
}

function mostrar_divisores(numero) {
  let candidato = numero

  while (candidato >= 1) {
    if (eh_divisor(candidato, numero)) {
      console.log(`> ${candidato}`)
    }

    // convergencia
    candidato = candidato - 1
  }
}

function eh_divisor(candidato, numero) {
  return numero % candidato == 0
}

main()
