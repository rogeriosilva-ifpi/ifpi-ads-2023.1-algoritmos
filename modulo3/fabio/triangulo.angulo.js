import { question } from 'readline-sync'

function main(){
    // Entrada
    const angulo1 = Number(question('Angulo 1: '))
    const angulo2 = Number(question('Angulo 2: '))
    const angulo3 = Number(question('Angulo 3: '))

    // fail fast
    if (!angulo_valido(angulo1) 
        || !angulo_valido(angulo2) 
            || !angulo_valido(angulo3)){
        console.log('Pelo menos um ângulo fornecido é Inválido!')
        // return
    }
    
    if (formam_triangulo(angulo1, angulo2, angulo3)){
        console.log('SIM. Os ângulos formam um Triângulo.')
        
        const tipo = calcular_tipo_triangulo(angulo1, angulo2, angulo3)
        
        console.log(`E tem mais, é um Triângulo ${tipo}`)
    }else{
        console.log('NÃO. Os ângulos não formam um Triângulo.')
    }

    
}

function formam_triangulo(ang1, ang2, ang3){
    return ang1 + ang2 + ang3 === 180
}

function calcular_tipo_triangulo(a1, a2, a3){
    if (a1 < 90 && a2 < 90 && a3 < 90){
        return 'ACUTÂNGULO'
    }else if (a1 === 90 || a2 === 90 || a3 === 90){
        return 'RETÂNGULO'
    }else { // considerando vdd
        return 'OBTUSÂNGULO'
    }
}

function angulo_valido(angulo){
    return angulo > 0
}


main()