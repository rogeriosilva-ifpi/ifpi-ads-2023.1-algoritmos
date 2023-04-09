import { question } from "readline-sync";

//Considerando tudo isso, peça ao usuário seu nome e idade e
//então construa a tabela dele de Atividade Física indicando as
//FC mínimas e máximas para cada uma das 5 faixas acima. Em
//seguida, pergunte a ele sobre Quanto minutos ele fará
//atividade física e faça um plano de FC de tal forma que deve
//ficar 60% do tempo em Moderada, 20% em Leve, 10% Difícil e
//20% em Muito Leve. Apresente as segmentações em minutos

function main(){
    const nome = Number(question('Nome:'))
    const idade = Number(question('Idade:'))
    const fc_maxima = calcular_fc_maxima(idade)
    const intensidade_maxima = calcular_intensidade_maxima(fc_maxima)
    const intensidade_dificil = calcular_intensidade_dificil(fc_maxima)
    const intensidade_moderada = calcular_intensidade_moderada(fc_maxima)
    const intensidade_leve = calcular_intensidade_leve(fc_maxima)
    const intensidade_muito_leve = calcular_intensidade_muito_leve(fc_maxima)
    const minutos_de_atividade_fisica = Number(question('Quantos minutos você fará de atividade física?'))
    const tempo_em_intensidae_moderada = calcular_tempo_em_atividade_moderada(minutos_de_atividade_fisica)
    const tempo_em_intensidae_leve = calcular_tempo_em_atividade_leve(minutos_de_atividade_fisica)
    const tempo_em_intensidae_muito_leve = calcular_tempo_em_atividade_muito_leve(minutos_de_atividade_fisica)
    const tempo_em_intensidae_dificil = calcular_tempo_em_atividade_dificil(minutos_de_atividade_fisica)

}

function calcular_fc_maxima(idade){
    const fc_maxima = 220 - idade 
    return fc_maxima
}

function calcular_intensidade_maxima(fc_maxima){
    const intensidade_maxima_90 = fc_maxima * 0.9
    const intensidade_maxima_100 = fc_maxima 
    return console.log(`Se a frequência cardíaca estiver entre ${intensidade_maxima_90.toFixed(2)}bmp e ${intensidade_maxima_100.toFixed(2)}bmp, então a classificação da intensidade da
    atividade física é máxima`)
}

function calcular_intensidade_dificil(fc_maxima){
    const intensidade_dificil_80 = fc_maxima * 0.8
    const intensidade_dificil_89 = fc_maxima * 0.89
    return console.log(`Se a frequência cardíaca estiver entre ${intensidade_dificil_80.toFixed(2)}bmp e ${intensidade_dificil_89.toFixed(2)}bmp, então a classificação da intensidade da
    atividade física é difícil`)
}

function calcular_intensidade_moderada(fc_maxima){
    const intensidade_moderada_70 = fc_maxima * 0.7
    const intensidade_moderada_79 = fc_maxima * 0.79
    return console.log(`Se a frequência cardíaca estiver entre ${intensidade_moderada_70.toFixed(2)}bmp e ${intensidade_moderada_79.toFixed(2)}bmp, então a classificação da intensidade da
    atividade física é moderada`)
}

function calcular_intensidade_leve(fc_maxima){
    const intensidade_leve_60 = fc_maxima * 0.6
    const intensidade_leve_69 = fc_maxima * 0.69
    return console.log(`Se a frequência cardíaca estiver entre ${intensidade_leve_60.toFixed(2)}bmp e ${intensidade_leve_69.toFixed(2)}bmp, então a classificação da intensidade da
    atividade física é leve`)
}

function calcular_intensidade_muito_leve(fc_maxima){
    const calcular_intensidade_muito_leve_50 = fc_maxima * 0.5
    const calcular_intensidade_muito_leve_59 = fc_maxima * 0.59
    return console.log(`Se a frequência cardíaca estiver entre ${calcular_intensidade_muito_leve_50.toFixed(2)}bmp e ${calcular_intensidade_muito_leve_59.toFixed(2)}bmp, então a classificação da intensidade da
    atividade física é muito leve`)
}

function calcular_tempo_em_atividade_dificil(minutos){
    const tempo_em_intensidade_dificil = minutos * 0.1
    return console.log(`Tempo em atividade física difícil = ${tempo_em_intensidade_dificil} minutos`)
}

function calcular_tempo_em_atividade_moderada(minutos){
    const tempo_em_intensidade_moderada = minutos * 0.5
    return console.log(`Tempo em atividade física moderada = ${tempo_em_intensidade_moderada} minutos`)
}

function calcular_tempo_em_atividade_leve(minutos){
    const tempo_em_intensidade_leve = minutos * 0.2
    return console.log(`Tempo em atividade física leve = ${tempo_em_intensidade_leve} minutos`)
}

function calcular_tempo_em_atividade_muito_leve(minutos){
    const tempo_em_intensidade_muito_leve = minutos * 0.2
    return console.log(`Tempo em atividade física difícil = ${tempo_em_intensidade_muito_leve} minutos`)
}

main()