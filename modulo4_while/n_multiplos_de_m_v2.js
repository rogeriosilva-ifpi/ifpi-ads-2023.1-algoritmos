import { question } from "readline-sync"

function main() {
  const numero = Number(question("Qual número vc quer os múltiplos? "))
  const quantidade_multiplos = Number(question("Quantos múltiplos? "))
  let contador_multiplos = 0
  let multiplo = numero

  while (contador_multiplos < quantidade_multiplos) {
    console.log(`> ${multiplo}`)
    multiplo = multiplo + numero
    contador_multiplos = contador_multiplos + 1
  }
}

main()
