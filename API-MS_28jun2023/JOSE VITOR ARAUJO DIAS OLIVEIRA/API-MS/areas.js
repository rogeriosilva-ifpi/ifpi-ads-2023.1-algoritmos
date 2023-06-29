import {question} from "readline-sync"

function main(){
    //entrada
    const opcoes = menu()

    //processamento
    let escolha = question(Number(`${opcoes}\n`))
    let quadrado
    let retangulo
    let triangulo
    let trapezio
    let circulo
    let figura_um
    let area_um
    let figura_dois
    let area_dois
    let maior_area
    let proporcao


function menu(){
    let menu = "*****AREAS*****"
    menu += "--------------------------"
    menu += "[PRESSIONE 1] -> QUADRADO"
    menu += "[PRESSIONE 2] -> RETÂNGULO"
    menu += "[PRESSIONE 3] -> TRIÂNGULO"
    menu += "[PRESSIONE 4] -> TRAPÉZIO"
    menu += "[PRESSIONE 5] -> CIRCULO"
    menu += ">>> Sair"

return menu
}

    while(escolha != 0){
        }if(escolha == 1){
            const lado_quadrado = question("informe o lado do quadrado: ")
            const area_quadrado = lado_quadrado ** 2
            console.log(`O quadrado possui área de ${area_quadrado}`)
            //let figura_um =
        }else if(escolha == 2){
            const base_retangulo = question("informe a base do retangulo: ")
            const altura_retangulo = question("informe a altura do retangulo: ")
            const area_retangulo = base_retangulo * altura_retangulo
            console.log(`O retangulo possui área de ${area_retangulo}`)
        }else if(escolha == 3){
            const base_triangulo = question("informe a base do triangulo: ")
            const altura_triangulo = question("informe a altura triangulo: ")
            const area_triangulo = (base_triangulo * altura_triangulo) / 2
            console.log(`O triangulo possui área de ${area_triangulo}`)
        }else if(escolha == 4){
            const base_menor = question("informe a base menor do trapezio: ")
            const base_maior = question("informe a base maior do trapezio: ")
            const altura_trapezio = question("informe a altura do trapezio: ")
            const area_trapezio = (base_menor + base_maior) * altura_trapezio / 2
            console.log(`O trapezio possui área de ${area_trapezio}`)
        }else if(escolha == 5){
            const raio = question("informe o raio do circulo: ")
            const area_circulo = 3.14 * (raio ** 2)
            console.log(`O circulo possui área de ${area_circulo}`)
    }


    function calcular(proporcao){
        if(area_um > area_dois){
            let resultado = area_dois / area_um
            console.log(`A figura 1 é maior que a figura 2, e a proporção da figura 2 sobre a 1 é ${resultado}`)
        }else if(area_um < area_dois){
            let resultado = area_um / area_dois
            console.log(`A figura 2 é maior que a figura 1, e a proporção da figura 1 sobre a 2 é ${resultado}`)
        }
    }
              //travei nessa parte de pedir 2 figuras
}
main()