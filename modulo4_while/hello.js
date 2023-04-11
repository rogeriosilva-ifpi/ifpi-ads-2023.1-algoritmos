import { question } from "readline-sync"

function main() {
  let contador = 0
  const quantidade_alvo = Number(question("Quantas vezes hello? "))

  while (contador < quantidade_alvo) {
    console.log(`${contador} > Hello Rogério!`)
    contador++
  }
}

main()
