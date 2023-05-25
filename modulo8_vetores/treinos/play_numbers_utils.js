import { mostrar_texto } from "../../modulo4_while/treinos/my_io_utils.js"

export function gerar_vetor_aleatorio(tamanho) {
  const vetor = Array(tamanho)

  for (let i = 0; i < tamanho; i++) {
    vetor[i] = obter_numero_aleatorio()
  }

  return vetor
}

export function obter_numero_aleatorio(limite = 100) {
  return Math.floor(Math.random() * limite)
}

export function bye() {
  const tchaus = [
    "Tchau coração",
    "Até mais BB",
    "Fica bem nenem!",
    "Já estou com saudades!"
  ]

  const index = Math.floor(Math.random() * tchaus.length)

  mostrar_texto(tchaus[index])
}

export function obter_posicoes_em_vetor(vetor, valor) {
  const posicoes = []
  for (let i in vetor) {
    if (vetor[i] === valor) {
      posicoes.push(i)
    }
  }

  return posicoes
}
