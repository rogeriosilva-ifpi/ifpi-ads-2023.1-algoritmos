import { question } from "readline-sync"

function main() {
  const numero = Number(question("Qual número vc quer os múltiplos? "))
  const quantidade_multiplos = Number(question("Quantos múltiplos? "))
  let contador_multiplos = 0
  let candidato_a_multiplo = 1

  while (contador_multiplos < quantidade_multiplos) {
    if (eh_multiplo(candidato_a_multiplo, numero) === true) {
      console.log(`> ${candidato_a_multiplo}`)
      contador_multiplos = contador_multiplos + 1
    }
    candidato_a_multiplo = candidato_a_multiplo + 1
  }
}

function eh_multiplo(candidato, numero) {
  return candidato % numero === 0
}

main()
