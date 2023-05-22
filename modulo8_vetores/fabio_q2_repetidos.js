import {
  mostrar_texto,
  obter_numero,
  obter_numero_positivo
} from "../modulo4_while/treinos/my_io_utils.js"

function main() {
  const tamanho = obter_numero_positivo("Quantas elementos? ")

  const numeros = Array(tamanho)

  //   preenchido
  for (let i = 0; i < numeros.length; i++) {
    let atual = obter_numero(`${i} > `)
    // escrita em posição (i) --> atual
    numeros[i] = atual
  }

  mostrar_texto(numeros)

  const repetidos = ha_repetidos(numeros)
  const qtd_repetidos = contar_elementos_repetidos(numeros)
  const qtd_unicos = contar_elementos_unicos(numeros)

  mostrar_texto(`> Há ${qtd_unicos} elementos únicos`)
  if (repetidos) {
    mostrar_texto("Há elementos repetidos!")
    mostrar_texto(`> ${qtd_repetidos} se repete(m)!`)
  } else {
    mostrar_texto("Não há elementos repetidos!")
  }
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

function contar_elementos_repetidos(colecao) {
  const verificados = []
  let contador = 0
  for (let i = 0; i < colecao.length; i++) {
    const item = colecao[i]
    if (!colecao_contem(verificados, item)) {
      const quantidade = contar_ocorrencia(colecao, item)
      verificados.push(item)
      if (quantidade > 1) {
        contador++
      }
    }
  }

  return contador
}

function ha_repetidos(colecao) {
  // para cada item, contar ocorrencias, se maior que 1, return True
  for (let item of colecao) {
    const quantidade = contar_ocorrencia(colecao, item)
    if (quantidade > 1) {
      return true
    }
  }

  return false
}

function contar_ocorrencia(colecao, item) {
  let contador = 0
  for (let elemento of colecao) {
    if (elemento === item) {
      contador++
    }
  }

  return contador
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
