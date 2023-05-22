import {
  mostrar_texto,
  obter_numero,
  obter_numero_positivo
} from "../modulo4_while/treinos/my_io_utils.js"

function main() {
  const tamanho = obter_numero_positivo("")

  const numeros = Array(tamanho)

  for (let i = 0; i < numeros.length; i++) {
    let atual = obter_numero("")
    numeros[i] = atual
  }

  const qtd_unicos = contar_elementos_unicos(numeros)
  mostrar_texto(qtd_unicos)
}

function contar_elementos_unicos(colecao) {
  const unicos = []
  for (let i in colecao) {
    const atual = colecao[i]
    if (!colecao_contem(unicos, atual)) {
      unicos.push(atual)
    }
  }

  return unicos.length
}

function colecao_contem(colecao, item) {
  for (let elemento of colecao) {
    if (item === elemento) {
      return true
    }
  }

  return false
}

main()
