import {
  enter_limpar_tela,
  mostrar_texto,
  obter_numero
} from "../../modulo4_while/treinos/my_io_utils.js"

import {
  gerar_vetor,
  localizar_posicoes,
  multiplicar_cada_numero_por_n
} from "./play_number_features.js"
import { bye } from "./play_numbers_utils.js"

function main() {
  const opcoes = menu()
  let numeros = []

  let opcao = obter_numero(opcoes)

  while (opcao != 0) {
    if (opcao == 1) {
      numeros = gerar_vetor()
    } else if (opcao == 2) {
      mostrar_texto(`Existem ${numeros.length} itens.`)
    } else if (opcao == 3) {
      mostrar_texto(numeros)
    } else if (opcao == 4) {
      localizar_posicoes(numeros)
    } else if (opcao == 5) {
      mostrar_texto("Antes: ")
      mostrar_texto(numeros)
      numeros = multiplicar_cada_numero_por_n(numeros)
      mostrar_texto("Depois: ")
      mostrar_texto(numeros)
    }

    // roda gigante
    enter_limpar_tela()
    opcao = obter_numero(opcoes)
  }

  bye()
}

function menu() {
  let menu_options = "***** Play Numbers *****"
  menu_options += "\n-----------------------"
  menu_options += "\n1 - Gerar Números"
  menu_options += "\n2 - Mostrar Qtd Números gerados"
  menu_options += "\n3 - Mostrar números"
  menu_options += "\n4 - Buscar número"
  menu_options += "\n5 - Multiplicar números por N"
  menu_options += "\n0 - Sair"
  menu_options += "\n\n>> "

  return menu_options
}

main()
