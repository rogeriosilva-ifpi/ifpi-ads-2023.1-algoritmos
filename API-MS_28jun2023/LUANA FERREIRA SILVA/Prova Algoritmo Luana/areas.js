import { mostrarTexto, obterLetraValida, obterNumeroPositivo } from "./io_utils.js";
import { calcularAreaCirculo, calcularAreaQuadrado, calcularAreaRetangulo, calcularAreaTrapezio, calcularAreaTriangulo } from "./math_utils.js";

function main() {
  mostrarTexto(`--- FIGURAS GEOMETRICAS ---
      Q/q: Quadrado
      R/r: Retangulo
      T/t: Quadrado
      Z/z: Trapezio
      C/c: Circulo
  `)
  const fig1 = obterLetraValida(`Figura 1: `)
  const areaFig1 = calcularAreaDaFigura(fig1)
  const fig2 = obterLetraValida(`Figura 2: `)
  const areaFig2 = calcularAreaDaFigura(fig2)

  mostrarTexto(`${areaFig1}`)
  mostrarTexto(`${areaFig2}`)

}

function calcularAreaDaFigura(letra) {
  if (letra === 'q' || letra === 'Q') {
    const lado = obterNumeroPositivo('Lado do Quadrado: ')
    return calcularAreaQuadrado(lado)

  } else if (letra === 'r' || letra === 'R') {
    const comprimento = obterNumeroPositivo('Comprimento do Retangulo: ')
    const largura = obterNumeroPositivo('Largura do Retangulo: ')
    return calcularAreaRetangulo(comprimento, largura)

  } else if (letra === 't' || letra === 'T') {
    const base = obterNumeroPositivo('Base do Triangulo: ')
    const altura = obterNumeroPositivo('Altura do Triangulo: ')
    return calcularAreaTriangulo(base, altura)

  } else if (letra === 'z' || letra === 'Z') {
    const baseMaior = obterNumeroPositivo('Base do Trapezio: ')
    const baseMenor = obterNumeroPositivo('Altura do Trapezio: ')
    const altura = obterNumeroPositivo('Altura do Trapezio: ')
    return calcularAreaTrapezio(baseMaior, baseMenor, altura)

  } else {
    const raio = obterNumeroPositivo('Raio da Circunferencia: ')
    return calcularAreaCirculo(raio)
  }

}

main()
