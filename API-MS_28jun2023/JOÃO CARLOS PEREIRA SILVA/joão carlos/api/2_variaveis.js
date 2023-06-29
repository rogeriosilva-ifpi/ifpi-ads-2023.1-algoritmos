import { question } from "readline-sync";
import { obter_numero, obter_texto } from "./my_utils.js";

function main(){

  const numero = obter_numero('Digite a quantidade de variáveis: ')

  const variaveis = []
  for (let i = 0; i < numero; i++) {
    const nome_snake_case = obter_texto('Digite um nome em snake_case: ')
    variaveis.push(nome_snake_case)
  }

  console.log('Variáveis em CamelCase:')
  for (let i = 0; i < variaveis.length; i++) {
    const nome_camel_Case = converter_snake_para_camel(variaveis[i])
    console.log(nome_camel_Case)
  }

  const contagemVariaveis = contar_variaveis(variaveis);

  console.log('Número de variáveis compostas: ' + contagemVariaveis.variaveis_compostas)
  console.log('Número de nomes simples: ' + contagemVariaveis.variaveis_simples)

}

main()

function converter_snake_para_camel(snake_case) {
    let camelCase = ''
    let condicao = false

    for (let i = 0; i < snake_case.length; i++) {
      const caractere = snake_case[i]

      if (caractere === '_') {
        condicao = true
      } else {
        camelCase += condicao ? caractere.toUpperCase() : caractere;
        condicao = false
      }
    }

    return camelCase
  }

  function contar_variaveis(variaveis) {
    let variaveis_compostas = 0
    let variaveis_simples = 0

    for (let i = 0; i < variaveis.length; i++) {
      let sublinhado = false;

      for (let x = 0; x < variaveis[i].length; x++) {
        if (variaveis[i][x] === '_') {
          sublinhado = true
          break
        }
      }

      if (sublinhado) {
        variaveis_compostas++
      } else {
        variaveis_simples++
      }
    }

    return { variaveis_compostas, variaveis_simples }

  }
