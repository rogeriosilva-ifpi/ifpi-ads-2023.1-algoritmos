import { question } from "readline-sync"

export function obter_numero(label = "Digite um numero: ") {
  let numero = obter_texto(label)

  while (isNaN(Number(numero)) || numero === "") {
    mostrar_texto("Valor inválido!")
    numero = question(label)
  }

  return Number(numero)
}

export function obter_numero_minimo(
  label = "Digite um número: ",
  minimo = undefined
) {
  let numero = obter_numero(label)

  while (minimo != undefined && numero < minimo) {
    mostrar_texto(`Favor digite um número no mínimo (${minimo}) !`)
    numero = obter_numero(label)
  }

  return numero
}

export function obter_numero_positivo(label = "Digite um número positivo: ") {
  let numero = obter_numero(label)

  while (numero <= 0) {
    mostrar_texto("Favor digite um número positivo!")
    numero = obter_numero(label)
  }

  return numero
}

export function obter_texto(label = "Digite um texto: ") {
  const texto = question(label)

  return texto
}

export function mostrar_texto(texto = "Hello") {
  console.log(texto)
}

export function enter_limpar_tela() {
  obter_texto("<Enter>....")
  console.clear()
}

export function maximo_entre_tres_diferentes(valor1, valor2, valor3) {
  if (valor1 > valor2 && valor1 > valor3) {
    return valor1
  } else if (valor2 > valor1 && valor2 > valor3) {
    return valor2
  } else if (valor3 > valor1 && valor3 > valor2) {
    return valor3
  } else if (valor1 === valor2 && valor1 > valor3) {
    return valor1
  } else if (valor1 === valor3 && valor1 > valor2) {
    return valor1
  } else if (valor2 === valor3 && valor2 > valor1) {
    return valor2
  }
}

export function mostrar_texto_inline(texto) {
  process.stdout.write(texto)
}
