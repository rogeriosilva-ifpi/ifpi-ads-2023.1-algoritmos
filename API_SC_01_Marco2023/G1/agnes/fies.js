import {question} from 'readline-sync'

function main(){
    //Entrada
    
    const duracao = Number(question('Duração do cursoem anos: '))
    const mensalidade = Number(question('Mensalidade do curso: '))
    const renda_familiar = Number(question('Renda familiar: '))
    const pessoas = Number(question('Pessoas na família: '))
    const ano_inicio = Number(question('Ano de início do curso: '))
    const semestre_inicio = Number(question('Semestre de inicio: '))
    const parcela_fixa = Number(150)
    
    //Processamento

    

    const selic = Number(13.75)
    const salario_minimo = Number(1302)

    const renda_pessoa = (renda_familiar)/(pessoas)

    const saldo_devedor = original + juros - total_parcela_fixa 
    const original = mensalidade * meses

    const duracao_meses = duracao * 12
    const meses_total = duracao_meses + 18





//Saída
console.log(`De acordo com a renda por pessoa na família, o candidato está ${situacao}`)

function situacao (renda_pessoa, salario_minimo){
    if ((renda_pessoa) > (3*salario_minimo)){
        return 'Não habilitado a contratar o financiamento'
    } else
        return 'Habilitado a contratar o financiamento'
}

function total_parcela_fixa (meses_total, parcela_fixa){
    const total_parcela_fixa = meses_total * parcela_fixa
}

function taxa_aplicada (renda_pessoa, selic, salario_minimo){
    if (renda_pessoa) <= (1.5* salario_minimo){
        return '10% da SELIC'
    }else if((renda_pessoa) >= (1.5* salario_minimo) && (renda_pessoa) <= (2*salario_minimo)){
        return '15% da SELIC'
    }else if ((renda_pessoa) >= (2* salario_minimo) && (renda_pessoa) <= (2.5*salario_minimo)){
        return '20% da SELIC'
    }else if (renda_pessoa) > (2.5*salario_minimo){
        return '25% da SELIC'

    }

}

}

main()