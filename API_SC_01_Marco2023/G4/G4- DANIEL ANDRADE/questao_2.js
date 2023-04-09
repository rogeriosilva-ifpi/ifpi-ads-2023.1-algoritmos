// Coraçao gelado
import {question} from 'readline-sync'
function main(){
const nome = question('Qual seu nome: ')
const idade = Number(question('Insira sua idade: '))

//PROCESSAMENTO
const fcm = 220 - idade

const maxima_1 =  fcm * 0.9
const maxima_2 = fcm

const dificil_1 = fcm * 0.80
const dificil_2 = fcm * 0.89

const moderade_1 = fcm * 0.70
const moderade_2 = fcm * 0.79

const leve_1 = fcm * 0.60
const leve_2 = fcm * 0.69

const mt_leve_1 = fcm * 0.50 
const mt_leve_2 = fcm * 0.59 

//SAIDA

console.log(`Olá ${nome} aqui esta a tabela de Atividade Física indicando as
FC mínimas e máximas`)
console.log(`Na atividade maxima seus batimentos devem estar entre ${maxima_1} e ${maxima_2}`)
console.log(`Na atividade dificil seus batimentos devem estar entre ${dificil_1} e ${dificil_2}`)
console.log(`Na atividade moderada seus batimentos devem estar entre ${moderade_1} e ${moderade_2}`)
console.log(`Na atividade leve seus batimentos devem estar entre ${leve_1} e ${leve_2}`)
console.log(`Na atividade Muito leve  seus batimentos devem estar entre ${mt_leve_1} e ${mt_leve_2}`)
//PROCESSAMENTO 2 
const min = Number(question( 'quantos minutos de atividade fisica vc vai fazer: '))

const tempo_mt_leve = min * 0.20
const tempo_leve = min * 0.20
const tempo_moderada = min * 0.60
const tempo_dificil = min * 0.10
//SAIDA 2
console.log( `Para esse tempo é aconselhavel que vc faça :`)
console.log( `${tempo_mt_leve} minutos em nivel MUITO LEVE`)
console.log( `${tempo_leve} minutos em nivel LEVE`)
console.log( `${tempo_moderada} minutos em nivel MODERADO`)
console.log( `${tempo_dificil} minutos em nivel DIFICIL`)
console.log('<<<<<<<<<<--->>>>>>>>>>')

}
main()