import prompt from "prompt-sync"
let input = prompt()

function main(){

    mostrar_as_opcoes_validas()
    let contador = 0
    let area_1 = (input("Qual a primeira figura desejada?"))
    let area_2 = (input("Qual a segunda figura desejada?"))
    area_das_figuras()
    pi = 3,14159


}
main()


function mostrar_as_opcoes_validas(){

    let opcoes=('Q - Quadrado' + '\n' + 'R - Retângulo' + '\n' + 'T - Triãngulo' + '\n' + 'Z - Trapézio' + '\n' + 'C - Círculo')
    console.log (opcoes)
}

function area_das_figuras (area_1, area_2){

    if ((area_1||area_2) = Q){

        const lado=(input("Digite o lado do quadrado:"))
        const area_do_quadrado = lado ** 2

    }
    return (area_do_quadrado) 
    
    
    else ((area_1||area_2) = R){

        const comprimento = Number (input("Digite o comprimento do lado:"))
        const largura = Number (input("Digite a largura do lado:"))
        const area_do_retangulo = comprimento * largura

    }
    return (area_do_retangulo)


    else if ((area_1||area_2) = T){

        const base = Number (input("Digite o valor da base:"))
        const altura = Number (input("Digite o valor da altura:"))
        const area_do_triangulo = (base*altura)/2

    }
    return (area_do_triangulo)

    else if ((area1||area_2 ) = Z){

        const base_maior = Number(input("Digite o valor da base menor:"))
        const base_menor = Number(input("Digite o valor da base maior:"))
        const altura = Number(input("Digite o valor da altura:"))
        const area_do_trapezio = ((base_maior + base_menor) * altura)/2

    }
    return (area_do_trapezio)

    else if ((area_1||area_2) = C){

        const raio = Number(input("Digite o valor do raio:"))
        const area_do_circlo = pi * raio**2

    }
    return (area_do_circlo)

}   


