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
  return mapear(numeros, 'M')
}

export function somar_cada_numero_por_n(numeros){
  return mapear(numeros, 'S')
}


export function mapear_out(vetor, operacao){
  const vetor_mapeado = Array(vetor.length)
  const n = obter_numero_positivo("N: ")

  for (let i in vetor) {
    if (operacao === 'M'){
      vetor_mapeado[i] = vetor[i] * n
    }else if (operacao === 'S'){
      vetor_mapeado[i] = vetor[i] + n
    }else if (operacao === 'DAOP'){
      if (vetor[i] % 2 === 0){
        vetor_mapeado[i] = vetor[i] * 2
      }else{
        vetor_mapeado[i] = vetor[i]
      }
    }
  }

}

export function mapear(vetor, funcao){
  const vetor_mapeado = Array(vetor.length)

  for (let i in vetor) {
      vetor_mapeado[i] = funcao(vetor[i])
  }

  return vetor_mapeado
}


export function filtrar(vetor, funcao){
  const filtrados = []

  for (let item of vetor){
    if (funcao(item)){
      filtrados.push(item)
    }
  }

  // for (let index in vetor){
  //   if (funcao(vetor[index])){
  //     filtrados.push(vetor[index])
  //   }
  // }

  return filtrados
  
}
