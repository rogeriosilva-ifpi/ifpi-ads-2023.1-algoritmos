import { question } from "readline-sync";

export function obter_numero_positivo(label = "Digite um número positivo: ") {
    let numero = obter_numero(label)

    while (numero <= 0) {
      console.log("Valor inválido, digite um número posivo.")
      numero = obter_numero(label)
    }

    return numero
  }

export function obter_numero(label = "Digite um numero: ") {
    let numero = obter_texto(label)

    while (isNaN(Number(numero)) || numero === "") {
      console.log("Valor inválido, digite um número.")
      numero = question(label)
    }

    return Number(numero)
  }

  export function obter_texto(label = "Digite um texto: ") {
    const texto = question(label)

    return texto
  }

  export function alegrias() {
    const alegria = [
      "a vida é bela, acredite!",
      "vai ficar tudo bem coração!",
      "coisas melhores estão por vir!",
      "módulo 2 é logo alí!",
      "devagar e sempre!"
    ]

    const index = Math.floor(Math.random() * alegria.length)

    return alegria[index]
  }

