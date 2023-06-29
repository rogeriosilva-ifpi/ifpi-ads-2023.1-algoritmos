
import { input,input_number,print} from "./utils.js";

function main(){
    let menu = `\
                 ____________________________
                 |          ______          |
                 |     ----- MENU -----     |
                 |                          |
                 | [Q] - Quadrado.          |
                 |                          |
                 | [R] - Retangulo.         |      
                 |                          |
                 | [T] - Triangulo.         |
                 |                          |
                 | [Z] - Trapezio.          |
                 |                          |
                 | [C] - Circulo.           |
                 |__________________________|`

    //FIGURA 1

    print(menu)
    let figura_1 = input('==> Escolha a primeira figura: ') 
    let area_primeira_figura 

    if(figura_1 === 'Q' || figura_1 === 'q'){
        const lado_de_Q_1 = input_number('==> Valor do lado do Quadrado: ')
        let area_do_quadrado = calcular_area_quadrado(lado_de_Q_1)

        print(`==> Voce escolheu um quadrado de lado ${lado_de_Q_1}.
               ==> Area do quadrado: ${area_do_quadrado}`)

               area_primeira_figura = area_do_quadrado
        
               return area_primeira_figura
    }
    else if (figura_1 === 'R' || figura_1 === 'r'){
        const Comprimento_de_R_1 = input_number('==> Comprimento do Retangulo: ')
        const Largura_de_R_1 = input_number('==> Largura do Retangulo: ')
        let area_do_retangulo = calcular_area_retangulo(Comprimento_de_R_1,Largura_de_R_1)


        print(`==> Voce escolheu um retangulo de comprimento ${Comprimento_de_R_1} e largura ${Largura_de_R_1}.
               ==> Area do retangulo: ${area_do_retangulo}`)

               area_primeira_figura = area_do_retangulo

               return area_primeira_figura
    }
    else if (figura_1 === 'T' || figura_1 === 't'){
        const Base_de_T_1 = input_number('==> Base do Triangulo: ')
        const Altura_de_T_1 = input_number('==> Altura do Triangulo: ')
        let area_do_triangulo = calcular_area_triangulo(Base_de_T_1,Altura_de_T_1)

        print(`==> Voce escolheu um triangulo de base ${Base_de_T_1} e altura ${Altura_de_T_1}.
               ==> Area do triangulo: ${area_do_triangulo}`)

               area_primeira_figura = area_do_triangulo

               return area_primeira_figura
    }
    else if (figura_1 === 'Z' || figura_1 === 'z'){
        const Base_maior_de_Z_1 = input_number('==> Base maior do Trapezio: ')
        const Base_menor_de_Z_1 = input_number('==> Base menor do Trapezio: ')
        const Altura_de_Z_1 = input_number('==> Altura do Trapezio: ')
        let area_do_trapezio = calcular_area_trapezio(Base_maior_de_Z_1,Base_menor_de_Z_1,Altura_de_Z_1)

        print(`==> Voce escolheu um trapezio com base maior ${Base_maior_de_Z_1}, base menor ${Base_menor_de_Z_1} altura ${Altura_de_Z_1}.
               ==> Area do trapezio: ${area_do_trapezio}`)

               area_primeira_figura = area_do_trapezio

               return area_primeira_figura
    }
    else if(figura_1 === 'C' || figura_1 === 'c'){
        const raio_de_C_1 = input_number('==> Raio do Circulo: ')
        let area_do_circulo = calcular_area_circulo(raio_de_C_1)

        print(`==> Voce escolheu um circulo de raio ${raio_de_C_1}.
               ==> Area do circulo: ${area_do_circulo}`)

               area_primeira_figura = area_do_circulo 

               return area_primeira_figura
    }

    //FIGURA 2

    print(menu)
    let figura_2 = input('==> Escolha a segunda Figura: ') 
    let area_segunda_figura 

    if(figura_2 === 'Q' || figura_2 === 'q'){
        const lado_de_Q_2 = input_number('==> Valor do lado do Quadrado: ')
        let area_do_quadrado = calcular_area_quadrado(lado_de_Q_2)

        print(`==> Voce escolheu um quadrado de lado ${lado_de_Q_2}.
               ==> Area do quadrado: ${area_do_quadrado}`)

               area_segunda_figura = area_do_quadrado
               
               return area_segunda_figura
    }
    else if (figura_2 === 'R' || figura_2 === 'r'){
        const Comprimento_de_R_2 = input_number('==> Comprimento do Retangulo: ')
        const Largura_de_R_2 = input_number('==> Largura do Retangulo: ')
        let area_do_retangulo = calcular_area_retangulo(Comprimento_de_R_2,Largura_de_R_2)

        print(`==> Voce escolheu um retangulo de comprimento ${Comprimento_de_R_2} e largura ${Largura_de_R_2}.
               ==> Area do retangulo: ${area_do_retangulo}`)

               area_segunda_figura = area_do_retangulo

               return area_segunda_figura
    }
    else if (figura_2 === 'T' || figura_2 === 't'){
        const Base_de_T_2 = input_number('==> Altura do Triangulo: ')
        const Altura_de_T_2 = input_number('==> Base do Triangulo: ')

        let area_do_triangulo = calcular_area_triangulo(Base_de_T_2,Altura_de_T_2)

        print(`==> Voce escolheu um triangulo de base ${Base_de_T_2} e altura ${Altura_de_T_2}.
               ==> Area do triangulo: ${area_do_triangulo}`)

               area_segunda_figura = area_do_triangulo

               return area_segunda_figura
    }
    else if (figura_2 === 'Z' || figura_2 === 'z'){
        const Base_maior_de_Z_2 = input_number('==> Base maior do Trapezio: ')
        const Base_menor_de_Z_2 = input_number('==> Base menor do Trapezio: ')
        const Altura_de_Z_2 = input_number('==> Altura do Trapezio: ')
        let area_do_trapezio = calcular_area_trapezio(Base_maior_de_Z_2,Base_menor_de_Z_2,Altura_de_Z_2)

        print(`==> Voce escolheu um trapezio com base maior ${Base_maior_de_Z_2}, base menor ${Base_menor_de_Z_2} altura ${Altura_de_Z_2}.
               ==> Area do trapezio: ${area_do_trapezio}`)

               area_segunda_figura = area_do_trapezio

               return area_segunda_figura
    }
    else if(figura_2 === 'C' || figura_2 === 'c'){
        const raio_de_C_2 = input_number('==> Raio do Circulo: ')
        let area_do_circulo = calcular_area_circulo(raio_de_C_2)
        print(`==> Voce escolheu um circulo de raio ${raio_de_C_2}.
               ==> Area do circulo: ${area_do_circulo}`)

               area_segunda_figura = area_do_circulo

               return area_segunda_figura
    }

    //MOSTRAR MAIOR AREA 
        const maior_area = Verificar_maior_area(area_primeira_figura,area_segunda_figura)


    //MOSTRAR PROPORCAO
        const proporcao = verificar_proporcao(area_primeira_figura,area_segunda_figura)

}

function calcular_area_quadrado(lado){
    return lado * lado
}
function calcular_area_retangulo(Comprimento,Largura){
    return Comprimento * Largura
}
function calcular_area_triangulo(base,altura){
    return (base * altura) / 2 
}
function calcular_area_trapezio(base_maior,base_menor,altura){
    return ((base_maior + base_menor)* altura) / 2
}
function calcular_area_circulo(raio){
    return ((raio ** 2) * 3.14159)
}

function Verificar_maior_area(area_primeira_figura,area_segunda_figura){
    if (area_primeira_figura > area_segunda_figura){
        print(`==> A primeira figura tem uma area maior que a segunda.
               ==> Area da 1: ${area_primeira_figura}
               ==> Area da 2: ${area_segunda_figura}`)
    }
    else if(area_primeira_figura < area_segunda_figura){
        print(`==> A segunda figura tem uma area maior que a primeira.
        ==> Area da 1: ${area_primeira_figura}
        ==> Area da 2: ${area_segunda_figura}`)
    }
}
function verificar_proporcao(area_primeira_figura,area_segunda_figura){

    let resultado

    if(area_primeira_figura > area_segunda_figura){
        resultado = (area_segunda_figura / area_primeira_figura) * 100

        print(`==> a segunda figura tem ${resultado}% da area da primeira.`)
    }
    else if(area_primeira_figura < area_segunda_figura){
        resultado = (area_primeira_figura / area_segunda_figura) * 100

        print(`==> a primeira figura tem ${resultado}% da area da segunda.`)
    }
}

main()