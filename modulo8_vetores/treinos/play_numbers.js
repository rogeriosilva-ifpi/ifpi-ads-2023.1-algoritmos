import {
  enter_limpar_tela,
  mostrar_texto,
  obter_numero
} from "../../modulo4_while/treinos/my_io_utils.js"

import {
  filtrar,
  gerar_vetor,
  localizar_posicoes,
  mapear
} from "./play_number_features.js"
import { bye } from "./play_numbers_utils.js"

function main() {
  const opcoes = menu()
  let numeros = []

  let opcao = obter_numero(opcoes)

  while (opcao != 0) {
    if (opcao === 1) {
      numeros = gerar_vetor()
    } else if (opcao === 2) {
      mostrar_texto(`Existem ${numeros.length} itens.`)
    } else if (opcao === 3) {
      mostrar_texto(numeros)
    } else if (opcao === 4) {
      localizar_posicoes(numeros)
    } else if (opcao === 5) {
      mostrar_texto("Antes: ")
      mostrar_texto(numeros)
      const n = obter_numero('N: ')
      numeros = mapear(numeros, i => i * n)
      // numeros = multiplicar_cada_numero_por_n(numeros)
      mostrar_texto("Depois: ")
      mostrar_texto(numeros)
    }else if (opcao === 6) {
      mostrar_texto("Antes: ")
      mostrar_texto(numeros)
      const n = obter_numero('N: ')
      // const somar_com_n = fabrica_somadora(n)
      // numeros = mapear(numeros, somar_com_n)
      // numeros = mapear(numeros, fabrica_somadora(n))
      numeros = mapear(numeros, i => i + n)
      mostrar_texto("Depois: ")
      mostrar_texto(numeros)
    }else if (opcao === 7) {
      mostrar_texto("Antes: ")
      mostrar_texto(numeros)
      // numeros = mapear(numeros, dobra_pares)
      // numeros = mapear(numeros, (v) => v % 2 === 0 ? v * 2 : v)
      /*numeros = mapear(numeros, (i) => {
        if (i % 2 === 0){
          return i * 2
        }

        return i
      })*/
      mostrar_texto("Depois: ")
      mostrar_texto(numeros)
    }else if (opcao === 8){
      mostrar_texto("Antes: ")
      mostrar_texto(numeros)
      mostrar_texto("Filtrados: ")
      mostrar_texto(filtrar(numeros, i => i % 2 === 0))
    }
    else if (opcao === 9){
      mostrar_texto("Antes: ")
      mostrar_texto(numeros)
      mostrar_texto("Filtrados: ")
      mostrar_texto(filtrar(numeros, i => i % 2 !== 0))
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
  menu_options += "\n6 - Somar N aos números"
  menu_options += "\n7 - Dobrar números pares"
  menu_options += "\n8 - Mostrar pares"
  menu_options += "\n9 - Mostrar ímpares"
  menu_options += "\n0 - Sair"
  menu_options += "\n\n>> "

  return menu_options
}

// Liquidificadores
function dobra_pares(valor){
  if (valor % 2 === 0){
    return valor * 2
  }

  return valor
}

function fabrica_somadora(valor){

  function filha(numero){
    return numero + valor
  }

  return filha
}


function fabrica_multiplicadora(valor){

  function filha(numero){
    return numero * valor
  }

  return filha
}

main()
