import { question } from "readline-sync";
import { obter_numero_positivo } from "./my_utils.js";

function main(){

    const quadrado = 1; const retangulo = 2; const triangulo = 3; const trapezio = 4; const circulo = 5
    console.log('Escolha duas figuras geométricas: ')
    let escolha1 = obter_numero_positivo(' 1- Quadrado\n 2- Retangulo\n 3- Triângulo\n 4- Trapézio\n 5- Círculo \n')
    let escolha2 = obter_numero_positivo(' 1- Quadrado\n 2- Retangulo\n 3- Triângulo\n 4- Trapézio\n 5- Círculo \n')

    while (escolha1 > 5 || escolha2 > 5 ){
        console.log('Digite um numero conrrespondente.')
        escolha1 = obter_numero_positivo(' 1- Quadrado\n 2- Retangulo\n 3- Triângulo\n 4- Trapézio\n 5- Círculo \n')
    }

    while (escolha1 === escolha2){
        console.log('Escolha outra figura! ')
        escolha2 = obter_numero_positivo(' 1- Quadrado\n 2- Retangulo\n 3- Triângulo\n 4- Trapézio\n 5- Círculo \n')
    }


    let area_escolha1 = 0
    if(escolha1 === quadrado){
        escolha1 ='Quadrado'
        const lado_do_quadrado = obter_numero_positivo('Digite o lado do quadrado: ')
        area_escolha1 = lado_do_quadrado * lado_do_quadrado
    } else if(escolha1 === retangulo){
        escolha1 ='Retangulo'
        const comprimento_do_retangulo = obter_numero_positivo('Digite o comprimento do retangulo: ')
        const largura_do_retangulo = obter_numero_positivo('Digite a largura do retangulo: ')
        area_escolha1 = comprimento_do_retangulo * largura_do_retangulo
    } else if(escolha1 === triangulo){
        escolha1 ='Triangulo'
        const base_do_triangulo = obter_numero_positivo('Digite a base do triangulo: ')
        const altura_do_triangulo = obter_numero_positivo('Digite altura do triangulo: ')
        area_escolha1 = (base_do_triangulo * altura_do_triangulo) / 2
    } else if(escolha1 === trapezio){
        escolha1 ='Trapézio'
        const base_maior = obter_numero_positivo('Digite a base maior do trapézio: ')
        const base_menor = obter_numero_positivo('Digite a base menor do trapézio: ')
        const altura_do_trapezio = obter_numero_positivo('Digite a altura do trapezio: ')
        area_escolha1 = ((base_maior + base_menor) * altura_do_trapezio) / 2
    } else if(escolha1 === circulo){
        escolha1 ='Circulo'
        const raio = obter_numero_positivo('Digite o raio do circulo: ')
        area_escolha1 = raio * 3.14}
////////////////////////////////////////////////////////////////////////////////////////////////////
    let area_escolha2 = 0
    if(escolha2 === quadrado){
        escolha2 ='Quadrado'
        const lado_do_quadrado = obter_numero_positivo('Digite o lado do quadrado: ')
        area_escolha2 = lado_do_quadrado * lado_do_quadrado
    } else if(escolha2 === retangulo){
        escolha2 ='Retangulo'
        const comprimento_do_retangulo = obter_numero_positivo('Digite o comprimento do retangulo: ')
        const largura_do_retangulo = obter_numero_positivo('Digite a largura do retangulo: ')
        area_escolha2 = comprimento_do_retangulo * largura_do_retangulo
    } else if(escolha2 === triangulo){
        escolha2 ='Triangulo'
        const base_do_triangulo = obter_numero_positivo('Digite a base do triangulo: ')
        const altura_do_triangulo = obter_numero_positivo('Digite altura do triangulo: ')
        area_escolha2 = (base_do_triangulo * altura_do_triangulo) / 2
    } else if(escolha2 === trapezio){
        escolha2 ='Trapézio'
        const base_maior = obter_numero_positivo('Digite a base maior do trapézio: ')
        const base_menor = obter_numero_positivo('Digite a base menor do trapézio: ')
        const altura_do_trapezio = obter_numero_positivo('Digite a altura do trapezio: ')
        area_escolha2 = ((base_maior + base_menor) * altura_do_trapezio) / 2
    } else if(escolha2 === circulo){
        escolha2 ='Circulo'
        const raio = obter_numero_positivo('Digite o raio do circulo: ')
        area_escolha2 = raio * 3.14}

        console.log(`Você escolheu o ${escolha1} e sua área é ${area_escolha1.toFixed(1)} e também escolheu ${escolha2} e sua área é ${area_escolha2.toFixed(1)}. A área maior é área do ${area_maior(area_escolha1,area_escolha2,escolha1,escolha2)}.`)
        console.log(maior_porcentagem(area_escolha1, area_escolha2,escolha1,escolha2))

}

main()

function area_maior(area_escolha1, area_escolha2,escolha1,escolha2){
    if(area_escolha1 > area_escolha2){
        return escolha1
    } else {
        return escolha2
    }
}

function maior_porcentagem(area_escolha1, area_escolha2,escolha1,escolha2){
    if(area_escolha1 > area_escolha2){
        const porcentagem = ((area_escolha1 - area_escolha2) / area_escolha1) * 100
        return `A área da ${escolha1} é ${porcentagem.toFixed(1)}% maior que a área da ${escolha2}.`
    } else {
        const porcentagem = ((area_escolha2 - area_escolha1) / area_escolha2) * 100
        return `A área da ${escolha2} é ${porcentagem.toFixed(1)}% maior que a área da ${escolha1}.`
    }
}
