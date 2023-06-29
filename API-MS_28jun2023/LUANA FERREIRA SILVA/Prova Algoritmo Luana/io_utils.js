import { question } from "readline-sync";

export function input(texto) {
  return question(texto)
}

export function mostrarTexto(texto) {
  console.log(texto)
}


function obterNumero(label = 'Digite um numero') {
  let numero = input(label)

  while (isNaN(Number(numero)) || numero === "") {
    mostrarTexto('Valor Invalido!')
    numero = question(label)
  }

  return Number(numero)

}

export function obterNumeroPositivo(label = 'Digite um numero positivo: ') {
  let numero = obterNumero(label)

  while (numero < 0) {
    mostrarTexto('Digite um numero positivo!')
    numero = question(label)
  }


  return numero
}

export function obterLetraValida(label = 'Figura Geométrica: ') {
  let letra = input(label)
  while (letra !== 'q' && letra !== 'Q'
    && letra !== 'r' && letra !== 'R'
    && letra !== 'T' && letra !== 't'
    && letra !== 'Z' && letra !== 'z'
    && letra !== 'C' && letra !== 'c') {

    mostrarTexto('Valor Invalido')
    letra = input(label)

  }

  return letra
}
