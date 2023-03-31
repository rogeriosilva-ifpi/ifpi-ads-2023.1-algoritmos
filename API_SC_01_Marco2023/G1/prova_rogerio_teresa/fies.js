import {question} from 'readline-sync'

function main (){
    const duracao_curso= Number(question('Informe a duração do seu curso em anos:'))
    const mensalidade= Number (question('Informe o valor da mensalidade:'))
    const selic = Number(question('Taxa SELIC:'))
    const salario= Number(question('Salário mínimo vigente:'))
    const renda = Number(question('Renda familiar:'))
    const familia= Number(question('Pessoas na família:'))
    const ano= Number(question('Ano de ingresso:'))
    const semestre= Number(question('Semestre de ingresso:'))
  
    if (renda/salario>3){
        console.log('Empréstimo REPROVADO')
    }else if (renda/salario<=3){
        console.log('Empréstimo APROVADO')
    }
    
    if (renda/salario<=1.5){
        console.log('10% da taxa SELIC')
    } else if (salario2){
        console.log('15% da taxa SELIC')
    } else if (salario3){
        console.log('20% da taxa SELIC')
    } else if (salario4){
        console.log('25% da taxa SELIC')
    }
    

}
main()