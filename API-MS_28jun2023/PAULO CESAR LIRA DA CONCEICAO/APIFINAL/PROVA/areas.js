import { question } from "readline-sync";

function main(){

    const figura_1 = question(" > Informe qual e a primeira figura geometrica : ")

    const figura_2 = question(" > Informe qual e a segunda figura geometrica :  ")

    const lado = Number(question(" > informe o valor do lado (quadrado) : "))

    const comprimento = Number(question(" > informe o valor do comprimento : "))

    const largura = Number(question(" > informe o valor da largura : "))

    const base = Number(question(" > informe o valor da base : "))

    const altura = Number(question(" > informe o valor da altura : "))

    const base_maior = Number(question(" > informe o valor da base maior : "))

    const base_menor = Number(question(" > informe o valor da base menor : "))

    const raio= Number(question(" > informe o valor do raio : "))

    const area_figura_1 = calculo_figura_1(lado,comprimento,largura,base,altura,base_maior,base_menor,raio,figura_1)

    const area_figura_2 = calculo_figura_2(lado,comprimento,largura,base,altura,base_maior,base_menor,raio,figura_2)


    const o_maior = qual_eh_maior(area_figura_1,area_figura_2,figura_1,figura_2)
}

main()

function calculo_figura_1(lado,comprimento,largura,base,altura,base_maior,base_menor,raio,figura_1){
if (figura_1 = "quadrado") return (lado * lado) ; if (figura_1 = "retangulo") return (comprimento * largura);
if ( figura_1 = "triangulo") return ((base*altura)/2);if (figura_1 = "trapezio") return ((base_maior*base_menor)*altura/2);
if (figura_1 = "circulo") return (3.14 *(raio*raio))
}

function calculo_figura_2(lado,comprimento,largura,base,altura,base_maior,base_menor,raio,figura_2){
    if (figura_2 = "quadrado") return (lado * lado) ; if (figura_2 = "retangulo") return (comprimento * largura);
if ( figura_2 = "triangulo") return ((base*altura)/2);if (figura_2 = "trapezio") return ((base_maior*base_menor)*altura/2);
if (figura_2 = "circulo") return (3.14 *(raio*raio))
}

function qual_eh_maior(area_figura_1,area_figura_2,figura_1,figura_2){
    if (area_figura_1 > area_figura_2) return (console.log("a " + figura_1 + "tem a maior area "));
    else return (console.log(("a " + figura_2 + "tem a maior area "))
)}
