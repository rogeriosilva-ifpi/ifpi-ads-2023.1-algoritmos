import { contem_na_colecao } from "./colecoes_utils.js";
import { mostrar_texto, obter_numero_positivo, obter_string } from "./funcoes_utils.js";


function main() {




    areas_operacoes(menu_de_opcoes)











}

//Funções

function menu_de_opcoes(){

  let menu = `    ***** Figuras Disponíveis: Escolha Duas *****
                Q = Quadrado
                R = Retângulo
                T = Triângulo
                Z = Trapézio
                C = Círculo \n`

                return mostrar_texto(menu)

}


function areas_operacoes(menu_de_opcoes){

    

    //Variáveis Figura A

    let nome_a
    let comprimento_a
    let largura_a
    let altura_a
    let base_a
    let lado_a
    let base_maior_a
    let base_menor_a
    let raio_a

    //Variáveis Figura B

    let nome_b
    let comprimento_b
    let largura_b
    let altura_b
    let base_b
    let lado_b
    let base_maior_b
    let base_menor_b
    let raio_b

    menu_de_opcoes()

    let figura_escolhida_a = escolher_figuras()

    if(figura_escolhida_a === 'Q') {

        nome_a = 'Quadrado'
        lado_a = obter_numero_positivo('Lado: ')

    }

    if(figura_escolhida_a === 'R') {

        nome_a = 'Retângulo'
        comprimento_a = obter_numero_positivo('Comprimento: ')
        largura_a = obter_numero_positivo('Largura: ')

    }

    if(figura_escolhida_a === 'T') {

        nome_a = 'Triângulo'
        altura_a = obter_numero_positivo('Base: ')
        base_a = obter_numero_positivo('Altura: ')

    }

    if(figura_escolhida_a === 'Z') {

        nome_a = 'Trapézio'
        base_maior_a = obter_numero_positivo('Base Maior: ')
        base_menor_a = obter_numero_positivo('Base Menor: ')
        altura_a = obter_numero_positivo('Altura: ')

    }

    if(figura_escolhida_a === 'C') {

        nome_a = 'Círculo'
        raio_a = obter_numero_positivo('Raio: ')
        

        
    }

    let figura_escolhida_b = escolher_figuras(figura_escolhida_a)


    if(figura_escolhida_b === 'Q') {

        nome_b = 'Quadrado'
        lado_b = obter_numero_positivo('Lado: ')

    }

    if(figura_escolhida_b === 'R') {

        nome_b  = 'Retângulo'
        comprimento_b = obter_numero_positivo('Comprimento: ')
        largura_b = obter_numero_positivo('Largura: ')

    }

    if(figura_escolhida_b === 'T') {

        nome_b = 'Triângulo'
        altura_b = obter_numero_positivo('Base: ')
    base_b = obter_numero_positivo('Altura: ')

    }

    if(figura_escolhida_b === 'Z') {

        nome_b  = 'Trapézio'
        base_maior_b = obter_numero_positivo('Base Maior: ')
        base_menor_b = obter_numero_positivo('Base Menor: ')
        altura_b = obter_numero_positivo('Altura: ')

    }

    if(figura_escolhida_b === 'C') {

        nome_b = 'Círculo'
        raio_b = obter_numero_positivo('Raio: ')
        

        
    }

    mostrar_texto(`As duas figuras escolhidas foram: ${nome_a} e ${nome_b}.\n`)

    let area_a = calcular_areas(figura_escolhida_a, comprimento_a, largura_a, altura_a, base_a, lado_a, base_maior_a, base_menor_a, raio_a)

    let area_b = calcular_areas(figura_escolhida_b, comprimento_b, largura_b, altura_b, base_b, lado_b, base_maior_b, base_menor_b, raio_b)

    mostrar_texto(`Área do ${nome_a}: ${area_a}`)

    mostrar_texto(`Área do ${nome_b}: ${area_b}`)


    if (area_a > area_b) {

        mostrar_texto(`A Figura 1, um ${nome_a}, tem a maior área.`)

        let proporcao_b_em_a = calcular_proporcao(area_b, area_a)

        mostrar_texto(`O ${nome_b} tem ${proporcao_b_em_a}% da área do ${nome_a}\n`)

    }

    else if (area_b > area_a) {

        mostrar_texto(`A Figura 2, um ${nome_b}, tem a maior área.`)

        let proporcao_a_em_b = calcular_proporcao(area_a, area_b)

        mostrar_texto(`O ${nome_a} tem ${proporcao_a_em_b}% da área do ${nome_b}.\n`)

    }

    



   
}


function escolher_figuras(figura_a){

    let figuras_disponiveis = ['Q', 'R', 'T', 'Z', 'C']

    let figura_escolhida = obter_string(">>> ")

    

    if (contem_na_colecao(figura_escolhida, figuras_disponiveis) === false || figura_escolhida === figura_a){

        console.log('VOCÊ SELECIONOU UMA FIGURA INVÁLIDA OU JÁ SELECIONADA. TENTE NOVAMENTE.')

        figura_escolhida = escolher_figuras()

    }

    return figura_escolhida

}

function calcular_areas(figura, comprimento, largura, altura, base, lado, base_maior, base_menor, raio) {

    let pi = 3.14159

    let area

    if(figura === 'Q') {

        area = lado * lado

    }

    if(figura === 'R') {

        area = comprimento * largura

    }

    if(figura === 'T') {

        area = (base * altura) / 2

    }

    if(figura === 'Z') {

        area = ((base_maior + base_menor) * altura) / 2  

    }

    if(figura === 'C') {

        area = pi * raio**2
        
    }

    return area



}

function calcular_proporcao(area_menor, area_maior) {

    let proporcao = (area_menor * 100) / area_maior

    return proporcao

}



















main()