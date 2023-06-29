import { question } from "readline-sync";

export function obter_numero(texto){
    let numero = question(texto)
    while (isNaN(numero)){
        console.log('Digite apenas numeros!!')
        numero = question(texto)
    }
    return Number(numero)
}

export function obter_texto(descriçao){
    let texto = question(descriçao)
    return texto
}


export function receber_figura_geometrica(){
    let figura1 = obter_texto('Digite a primeira figura >>\n')
    let figura2 = obter_texto('Digite a segunda figura >>\n')
    let matriz_com_figuras = []
    while ((figura1 != 'Q' && figura1 != 'R' && figura1 != 'T' && figura1 != 'Z' && figura1 != 'C') || (figura2 != 'Q' && figura2 != 'R' && figura2 != 'T' && figura2 != 'Z' && figura2 != 'C') || (figura1 == figura2)){
        console.log('\nApenas valores validos e não repetidos!!\n')
        figura1 = obter_texto('Digite a primeira figura >>\n')
        figura2 = obter_texto('Digite a segunda figura >>\n')
        
    }
    return matriz_com_figuras = [figura1,figura2]

}

export function obter_numero_positivo(texto){
    let numero = obter_numero(texto)
    while (numero <= 0){
        console.log('Digite apenas valores positivos!!\n')
        numero = obter_numero(texto)
    }
    return numero
}




export function menu(){
    console.log('--------------- BEM VINDO AO PROGRAMA DE FIGURAS GEOMETRICAS ---------------\nDigite:\nQ- para quadrado\nR- para retangulo\nT- para triangulo\nZ- para trapezio\nC- para circulo\n')
}

export function calcular_area(figura){
    let area = ''
    if (figura == 'Q'){
        let lado = obter_numero_positivo('\nDigite o lado do quadrado >> ')
        area = lado * lado
    }
    else if (figura == 'R'){
        let comprimento = obter_numero_positivo('\nDigite o valor do comprimento do retangulo >> ')
        let largura = obter_numero_positivo('\nDigite o valor da largura do retangulo >> ')
        area = comprimento * largura
    }
    else if (figura == 'Z'){
        let base_maior = obter_numero_positivo('\nDigite o valor da base maior do trapezio>> ')
        let base_menor = obter_numero_positivo('Digte o valor da base menor do trapezio >> ')
        let altura = obter_numero_positivo('Digite o valor da altura do trapezio >> ')
        area = ((base_maior * base_menor) * altura) / 2
    }
    else if (figura == 'T'){
        let base = obter_numero_positivo('\nDigite o valor da base do triangulo >> ')
        let altura = obter_numero_positivo('\nDigite o valor da altura do triangulo >> ')
        area = (base * altura) / 2
    }
    else if (figura == 'C'){
        let raio = obter_numero_positivo('\nDigite o valor do raio do circulo  >> ')
        area =  3.14 *(raio ** 2)
    }
 
    return area
}

export function retornar_nome_figura(valor){
    let figura = ''
    if(valor == 'Q'){
        figura = 'Quadrado'
    }
    else if (valor == 'R'){
        figura = 'Retangulo'
    }
    else if (valor == 'T'){
        figura = 'Triangulo'
    }
    else if (valor == 'Z'){
        figura = 'Trapezio'
    }
    else if (valor == 'C'){
        figura = "Circulo"
    }

    return figura
}




export function enter_to_clear(){
    let enter = obter_texto('Presss <enter> to continue...')
    console.clear()
}



export function area_maior(area_fig1,nome_fig1, nome_fig2, area_fig2){
    if (area_fig1 > area_fig2){
        console.log(`A area do ${nome_fig1} e maior que a area do ${nome_fig2}}\n`)
    }
    else{
        console.log(`A area do ${nome_fig2} e maior que a area do ${nome_fig1}\n`)
    }
}


export function mostrar_porcentagem_area(area_fig1,nome_fig1, nome_fig2, area_fig2){
    if (area_fig1 > area_fig2){
        let porcentagem = (area_fig2 / area_fig1) * 100
        console.log(`O ${nome_fig2} representa ${porcentagem} % do ${nome_fig1}`)
    }else{
        let porcentagem = (area_fig1 / area_fig2) * 100
        console.log(`O ${nome_fig1} representa ${porcentagem} % do ${nome_fig2}`)
    }
}