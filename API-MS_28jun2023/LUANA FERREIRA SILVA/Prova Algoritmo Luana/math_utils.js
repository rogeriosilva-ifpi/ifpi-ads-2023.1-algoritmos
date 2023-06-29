export function calcularAreaQuadrado(lado) {
  return lado ** 2
}

export function calcularAreaRetangulo(comprimento, largura) {
  return comprimento * largura
}

export function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2
}

export function calcularAreaTrapezio(bMaior, bMenor, altura) {
  return ((bMaior + bMenor) * altura) / 2
}

export function calcularAreaCirculo(raio) {
  const pi = 3.14159
  return pi * raio ** 2
}