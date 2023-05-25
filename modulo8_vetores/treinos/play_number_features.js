import {
  mostrar_texto,
  obter_numero_minimo,
  obter_numero_positivo
} from "../../modulo4_while/treinos/my_io_utils.js"

import {
  gerar_vetor_aleatorio,
  obter_posicoes_em_vetor
} from "./play_numbers_utils.js"

export function gerar_vetor() {
  const tamanho = obter_numero_positivo("Quantos elementos? ")
  const numeros = gerar_vetor_aleatorio(tamanho)

  return numeros
}

export function localizar_posicoes(numeros) {
  const numero = obter_numero_minimo("Número: ", 0)
  const posicoes = obter_posicoes_em_vetor(numeros, numero)

  if (posicoes.length > 0) {
    mostrar_texto(`Numero ${numero} localizado na posições: ${posicoes}`)
  } else {
    mostrar_texto("Sinto muito! Número não encontrado!")
  }
}

export function multiplicar_cada_numero_por_n(numeros) {
  const vetor = Array(numeros.length)
  const n = obter_numero_positivo("Multiplicador: ")

  for (let i in numeros) {
    vetor[i] = numeros[i] * n
  }

  return vetor
}
