/* 
3. Leia 2 (dois) números, calcule e escreva 
    o mdc (máximo divisor comum) entre os números lidos.
*/
import { question } from "readline-sync"

function main() {
  // Entrada
  const numero1 = Number(question("Número 1: "))
  const numero2 = Number(question("Número 2: "))

  // Processamento
  //   const mdc = calcular_mdc(numero1, numero2)
  const mdc = calcular_mdc_euclides_like(numero1, numero2)

  console.log(`O MDC(${numero1}, ${numero2}) => ${mdc}`)
}

function calcular_mdc_euclides_like(numero1, numero2) {
  let maior = maior_menor(numero1, numero2, "maior")
  let menor = maior_menor(numero1, numero2, "menor")
  let resto = maior % menor

  while (resto != 0) {
    maior = menor
    menor = resto

    resto = maior % menor
  }

  return menor
}

function maior_menor(num1, num2, operacao) {
  if (operacao === "maior") {
    if (num1 >= num2) {
      return num1
    } else {
      return num2
    }
  } else if (operacao === "menor") {
    if (num1 < num2) {
      return num1
    } else {
      return num2
    }
  }
}

function calcular_mdc(numero1, numero2) {
  let candidato = numero1

  while (candidato >= 1) {
    if (eh_divisor(candidato, numero1) && eh_divisor(candidato, numero2)) {
      return candidato
    }
    candidato -= 1
  }
}

function eh_divisor(candidato_a_divisor, numero) {
  return numero % candidato_a_divisor == 0
}

main()
