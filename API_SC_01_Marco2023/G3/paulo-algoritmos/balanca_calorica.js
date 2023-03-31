import * as readsync from 'readline-sync'

//entrada

const nome = Number(readsync.question('Nome: '))
const sexo = Number(readsync.question('sexo(homem ou mulher): '))
const idade = Number(readsync.question('idade(anos): '))
const peso = Number(readsync.question('peso(kg): '))
const altura = Number(readsync.question('altura(m): '))
const pefil_atividade = Number(readsync.question('Perfil Atividade Fisica: '))
const 
//processamento 

const proteinas = 4 
const carboidratos = 4
const gorduras = 9


if(sexo === 'homem' ){
const necessidade_calorica = (9,53 * idade) + AF * (15,91 *peso) + (539,6 * altura)
}
else if(sexo === 'mulher'){
const necessidade_calorica = (6,91 * idade) + AF * (9,36 *peso) + (726 * altura)
}
