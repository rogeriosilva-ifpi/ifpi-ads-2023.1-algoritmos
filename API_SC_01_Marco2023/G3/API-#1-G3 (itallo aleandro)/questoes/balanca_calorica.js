import {question} from 'readline-sync'
function main(){
    //entrada:
    const nome = obterTEXTO("Qual o seu nome? ")
    const sexo = obterTEXTO("Qual o seu sexo?(M/F) ")
    const idade = obterNUMERO("Qual sua idade?(anos) ")
    const peso = obterNUMERO("Qual seu peso?(Kg) ")
    const altura = obterNUMERO("Qual sua altura?(m) ")
    const perfilAF = obterTEXTO("Qual seu perfil de atividade fisica?(sedentario/ pouco ativo/ ativo/ muito ativo) ")
    //processamento:
    const necessidadeCALORICA = calcular_necessidade(sexo, idade, perfilAF, peso, altura)
    //saida:
    console.log("Sua necessidade calórica diária é de: ", necessidadeCALORICA,"kcal.")
    //entrada 2:
    const vontade = obterTEXTO("Você quer ganhar ou perder peso?")
    const quilos = obterNUMERO("O quanto você quer ganhar/perder(Kg)? ")
    const semanas = obterNUMERO("Em quantas semanas esta disposto a isso? ")
    //processamento 2:
    const KGsemanas = calcularKGsemanas(quilos, semanas)
    const CALsemanas = calcularCALsemanas(KGsemanas)
    const gramasDIAS = calculargramas(KGsemanas)
    const necessidadeGRAMAS = calcular_necessidadegramas(necessidadeCALORICA)
    //saida 2:
    resultadoCALORICO(vontade,KGsemanas,CALsemanas,semanas,necessidadeGRAMAS,gramasDIAS)
    alertaOUmotivaçao(KGsemanas)
}
function obterTEXTO(pergunta){
    const resultado = question(pergunta)
    return resultado
}
function obterNUMERO(pergunta){
    const resultado = Number(question(pergunta))
    return resultado
}
function calcular_necessidade(sexo,idade,perfilAF,peso,altura){
    if (sexo === "M"){
        if (perfilAF === "sedentario"){
            const valor = 662 - (9.53 * idade) + 1 * (15.91 * peso) + (539.6 *altura)
            return valor
        }else if(perfilAF === "pouco ativo"){
            const valor = 662 - (9.53 * idade) + 1.11 * (15.91 * peso) + (539.6 *altura)
            return valor
        }else if(perfilAF === "ativo"){
            const valor = 662 - (9.53 * idade) + 1.25 * (15.91 * peso) + (539.6 *altura)
            return valor
        }else{
            const valor = 662 - (9.53 * idade) + 1.48 * (15.91 * peso) + (539.6 *altura)
            return valor
        }
    }else{
        if (perfilAF === "sedentario"){
            const valor = 662 - (9.53 * idade) + 1 * (15.91 * peso) + (539.6 *altura)
            return valor
        }else if(perfilAF === "pouco ativo"){
            const valor = 662 - (9.53 * idade) + 1.12 * (15.91 * peso) + (539.6 *altura)
            return valor
        }else if(perfilAF === "ativo"){
            const valor = 662 - (9.53 * idade) + 1.27 * (15.91 * peso) + (539.6 *altura)
            return valor
        }else{
            const valor = 662 - (9.53 * idade) + 1.45 * (15.91 * peso) + (539.6 *altura)
            return valor
        }
    }
}
function calcularKGsemanas(quilos, semanas){
    const valor = (quilos / semanas).toFixed(2)
    return valor
}
function calcularCALsemanas(KGsemanas){
    const calorias = (KGsemanas * 7700).toFixed(2)
    return calorias
}
function calculargramas(KGsemanas){
    const resultado = KGsemanas * 1000 / 7
    return resultado
}
function calcular_necessidadegramas(necessidadeCALORICA){
    const resultado = necessidadeCALORICA / 7700
    return resultado
}
function resultadoCALORICO(vontade, KGsemanas,CALsemanas,semanas,necessidadeGRAMAS,gramasDIAS){
    if (vontade === "ganhar"){
        console.log("Você deve ingerir ",KGsemanas,"Kg a mais por semana.")
        console.log("Aproximadamente ",CALsemanas,"kcal.")
        const nova_dieta = necessidadeGRAMAS + gramasDIAS
        const proteinas = (nova_dieta * 0.4).toFixed(2)
        const carboidratos = (nova_dieta * 0.4).toFixed(2)
        const gorduras = (nova_dieta *0.2).toFixed(2)
        console.log("Nas proximas ",semanas," semanas, você deve ingerir diariamente: ", proteinas,'g de proteinas',carboidratos, 'g de carboidratos e ',gorduras,'g de gorduras.')
    }else{
        console.log("Você deve deixar de ingerir ",KGsemanas,"Kg por semana.")
        console.log("Aproximadamente ",CALsemanas,"kcal.") 
        const nova_dieta = necessidadeGRAMAS - gramasDIAS
        const proteinas = (nova_dieta * 0.4).toFixed(2)
        const carboidratos = (nova_dieta * 0.4).toFixed(2)
        const gorduras = (nova_dieta *0.2).toFixed(2)
        console.log("Nas proximas ",semanas," semanas, você deve deixar de ingerir diariamente: ", proteinas,'g de proteinas',carboidratos, 'g de carboidratos e ',gorduras,'g de gorduras.')
    }
}
function alertaOUmotivaçao(KGsemanas){
    if (KGsemanas > 1){
        console.log("ALERTA: ESSA META DE MUDANÇA DE PESO PODE COMPROMETER SUA SAÚDE POR SER MUITO ABRUPTA!")
    }else{
        console.log("BOA SORTE: mantendo-se motivado você irá atingir seu objetivo caso siga a nova dieta e mantenha os exercicios!")
    }
}
main()
//concluido!