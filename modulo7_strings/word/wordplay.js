import { readFileSync } from "fs"
import {
  enter_limpar_tela,
  mostrar_texto,
  obter_numero,
  obter_numero_positivo
} from "../../modulo4_while/treinos/my_io_utils.js"

function main() {
  const palavras = readlines_from_file("words.txt")

  let opcao = -1

  while (opcao != 0) {
    opcao = obter_numero(menu())

    // executar a acao
    if (opcao == 1) {
      mostrar_palavras(palavras)
    } else if (opcao == 2) {
      const tamanho = obter_numero_positivo("Tamanho mínimo: ")
      const palavras_filtradas = filtrar_por_tamanho(palavras, tamanho)
      mostrar_palavras(palavras_filtradas)
      mostrar_texto(`Total Palavras: ${palavras.length}`)
    } else if (opcao == 0) {
      mostrar_texto("Tchau!!")
      break
    }

    enter_to_continue()
  }
}

function menu() {
  let opcoes = "**** WORDPLAY ****"
  opcoes += "\n1 - Mostrar todas"
  opcoes += "\n2 - Mostrar tamanho mínimo"
  opcoes += "\n0 - Sair"
  opcoes += "\n>>> "
  return opcoes
}

function enter_to_continue() {
  //   obter_texto("<Enter> to continue ...")
  enter_limpar_tela()
}

function readlines_from_file(filename) {
  const dados = readFileSync(filename, "utf-8")
  const linhas = dados.split("\n")
  return linhas
}

function mostrar_palavras(palavras) {
  for (let palavra of palavras) {
    mostrar_texto(palavra)
  }
}

function filtrar_por_tamanho(palavras, tamanho) {
  const selecao = []

  for (let palavra of palavras) {
    if (palavra.length > tamanho) {
      selecao.push(palavra)
    }
  }

  return selecao
}

main()
