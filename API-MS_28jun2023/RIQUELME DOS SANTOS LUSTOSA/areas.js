import { question } from "readline-sync"

function main(){

// AREAS
    const QUADRADO = 'Q' || 'q'
    const RETANGULO = 'R' || 'r'
    const TRIANGULO = 'T' || 't'
    const TRAPEZIO = 'Z' || 'z'
    const CIRCULO = 'C' || 'c'


    let menu = () => `***** FIGURAS *****
    Q - QUADRADO
    R - RETÂNGULO
    T - TRIÂNGULO
    Z - TRAPÉZIO
    C - CÍRCULO
    \n >>> `
    
    let opcao = input(menu()) 

    if (opcao === 'Q' || 'q'){
        const area_q = calc_area_quadrado()
    }else if (opcao === 'R' || 'r'){
        const area_r = calc_area_retangulo()
    }else if (opcao === 'T' || 't'){
        const area_tri = calc_area_triangulo()
    }else if (opcao === 'Z'|| 'z'){
        const area_tra = calc_area_trapezio()
    }else if (opcao === 'C' || 'c'){
        const area_cir = calc_area_circulo()
    }


// FÓRMULAS PARA CALCULAR ÁREA DAS FIGURAS
function calc_area_quadrado(){
const lado = obter_numero_positivo(label = "Digite um número positivo: ")
const area_quadrado = lado * lado

return area_quadrado


}

function calc_area_retangulo(){
const comprimento = obter_numero_positivo(label = "Digite um número positivo: ")
const largura = obter_numero_positivo(label = "Digite um número positivo: ")
const area_retangulo = comprimento * largura

return area_retangulo

} 

function calc_area_triangulo(){
const base = obter_numero_positivo(label = "Digite um número positivo: ")
const altura = obter_numero_positivo(label = "Digite um número positivo: ")
const area_triangulo = (base * altura) / 2

return area_triangulo

}

function calc_area_trapezio(){
const base_maior = obter_numero_positivo(label = "Digite um número positivo: ")
const base_menor = obter_numero_positivo(label = "Digite um número positivo: ")
const altura = obter_numero_positivo(label = "Digite um número positivo: ")
const area_trapezio = ((base_maior + base_menor) * altura) / 2

return area_trapezio

}

function calc_area_circulo(){
const pi = 3.14159
const raio = obter_numero_positivo(label = "Digite um número positivo: ")
const area_circulo = pi * (raio * raio)

}



//Funções auxiliares
function obter_numero_positivo(label = "Digite um número positivo: ") {
    let numero = obter_numero(label)
  
    while (numero <= 0) {
      mostrar_texto("por favor digite um número positivo")
      numero = obter_numero(label)
    }
  
    return numero
  }

main()