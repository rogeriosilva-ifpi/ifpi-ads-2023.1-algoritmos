import * as readsync from 'readline-sync'

function main(){

    //Entrada
    const base = Number(readsync.question('Digite o valor base hora/aula na universidade: '))
    const nome = Number(readsync.question('Digite o seu nome: '))
    const horas = Number(readsync.question('Digite a quantidade de horas semanais trabalhadas: '))
    const qual = Number(readsync.question('Digite a sua qualificacao (Use: E = especializacao, M = mestrado e D = doutorado): '))
    const tempo = Number(readsync.question('Digite o seu tempo de experiencia em meses: '))
    const filhos = Number(readsync.question('Digite o quantidade de filhos que voce tem, meores de 6 anos: '))
    const plano = Number(readsync.question('Digite o valor do seu plano de saude: '))

    //Processamento
    const valor_inicial = calcular_valor(base, horas)
    const creche = calcular_creche(filhos)
    const mes = calcular_mes(horas)
    const valor_plano = calcular_plano(plano)
    const combustivel = calcular_c(horas)
    //Saida 
    console.log(nome,'O valor que voce ira receber semanalmente e: ', valor_inicial)
    console.log('O valor que voce recebera de auxilio creche e: ', creche)
    console.log('O valor do seu plano, que sera coberto e: ', valor_plano)
    console.log('O valor que voce recebera de auxilio combustivel e: ', combustivel)
    console.log('O valor mensal a receber e: ', mes)

    function calcular_valor(base, horas){
        const resultado = (base * horas)
        return resultado
    }
    function calcular_creche(filhos){
        const resultado = (filhos * 700)
        return resultado
    }
    function calcular_mes(horas){
        const resultado = (horas * 4,5)
        return resultado
    }
    function calcular_plano(plano){
        const resultado = (plano / 100 * 50)
        return resultado
    }
    function calcular_c(horas){
        const resultado = (horas / 8 * 30)
        return resultado
    }
    function calcular_mes(horas){
        const resultado = (valor_inicial * 4,5)
        return resultado
    }
}
main()