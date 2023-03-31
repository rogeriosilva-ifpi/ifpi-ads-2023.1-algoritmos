import {question} from 'readline-sync'

// Entrada

{
    const hora_aula = question(input('digite aqui a duraçao da aula em horas: '))
    const nome_prof = question(input('digite aqui o seu nome: '))
    const qualificacao = question(input('digite aqui qual sua área(Especialização,Mestrado ou Doutorado): '))
    const tempo_experiencia = question(input('digite  aqui o seu tempo de experiencia docente em meses:'))
    const qtd_filhos = question(input('digite aqui a quantidade de filhos menores de 06 anos: '))
    const plano_saude = question(input('digite aqui o valor do seu plano de saúde: '))
}


// processamento
const salariobase_mensal = Math.floor( 3.5 * valorsemanal)

// saida

console.log('Olá', nome_prof)
console.log('Salário base semanal:', )
