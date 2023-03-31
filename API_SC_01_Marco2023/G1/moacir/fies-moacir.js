import { question } from "readline-sync";

function main(){
    //recebimento de dados do aluno
    const duracao_curso = question('Duração do curso em anos: ')
    const valor_mensalidade = Number(question('Valor da mensalidade: '))
    const taxa_selic = Number(question('Valor taxa selic: '))
    const salario_minimo = Number(question('Valor do salário mínimo atual: '))
    const renda_familiar = Number(question('Renda familiar em R$: '))
    const qnt_pessoas_familia = Number(question('Quantidade de pessoas na família: '))
    const ano = Number(question('Ano de início do curso: '))
    const semestre = Number(question('Semestre de início: '))

    const aprovado = habilitado_a_contratar(salario_minimo,renda_familiar,qnt_pessoas_familia)
    console.log(`Aluno ${aprovado}`)

    const valor_financiamento = calcular_valor_financiado(valor_mensalidade,ano,semestre,duracao_curso)
    console.log(`O valor a ser financiado é de R$${valor_financiamento.toFixed(2)}`)

    const total_juros = calcular_total_juros(valor_financiamento,taxa_selic,salario_minimo,renda_familiar,qnt_pessoas_familia)
    console.log(`Somente de juros, o valor é de R$${total_juros.toFixed(2)}`)

    const total_a_pagar = calcular_valor_total(total_juros,valor_financiamento)
    console.log(`Total a pagar é de R$${total_a_pagar.toFixed(2)}`)

    const valor_durante_curso = calcular_valor_durante(ano,semestre,duracao_curso)
    console.log(`Valor total a ser pago durante o curso é de R$${valor_durante_curso.toFixed(2)}`)
    const valor_carencia = (18*150)
    
    calcular_saldo_devedor(total_a_pagar,valor_durante_curso,valor_carencia,duracao_curso,ano,semestre)
   
    
}

function habilitado_a_contratar(salario_minimo,renda_familiar,qnt_pessoas_familia){
    let resultado
    let salario_pessoa
    salario_pessoa = renda_familiar / qnt_pessoas_familia
    if (salario_pessoa > (3*salario_minimo)){
        resultado = 'NÃO habilitado a contratar. Mais de 3 salários mínimos por pessoa!'
    }else{
        resultado = 'HABILITADO A CONTRATAR!'
    }
    return resultado

}

function calcular_valor_financiado(valor_mensalidade,ano,semestre,duracao_curso){
    let total
    let restante_curso
    restante_curso = duracao_curso - ano
    if (ano === 1){
        restante_curso = duracao_curso
    }
    if (semestre === 1){
        total = valor_mensalidade * (restante_curso*12)
    }else {
        restante_curso = (duracao_curso - ano) - 0.5
        total = valor_mensalidade * (restante_curso*12)
    }
    return total
    

}

function calcular_total_juros(valor_financiamento,taxa_selic,salario_minimo,renda_familiar,qnt_pessoas_familia){
    let total_juros
    let juros
    let salario_pessoa

    salario_pessoa = renda_familiar / qnt_pessoas_familia
    if(salario_pessoa <= 1.5*salario_minimo){
        juros = 0.1 * (taxa_selic/100)
    }else if(salario_pessoa <= 2*salario_minimo){
        juros = 0.15 * (taxa_selic/100)
    }else if(salario_pessoa <= 2.5*salario_minimo){
        juros = 0.2 * (taxa_selic/100)
    }else{
        juros = 0.25 * (taxa_selic/100)
    }
    
    total_juros = (juros * valor_financiamento)
    return total_juros


}

function calcular_valor_total(total_juros,valor_financiamento){
    let total
    total = total_juros + valor_financiamento
    return total
}

function calcular_valor_durante(ano,semestre,duracao_curso){
    let total
    let restante_curso
    let meses
    
    restante_curso = duracao_curso - ano
    if (ano === 1){
        restante_curso = duracao_curso
    }
    if (semestre === 2){
        restante_curso = (duracao_curso - ano) - 0.5
    }

    meses = (restante_curso * 12) / 3
    total = meses * 150
    return total 
}

function calcular_saldo_devedor(total_a_pagar,valor_durante_curso,valor_carencia,duracao_curso,ano,semestre){
    let total
    let total_parcelas
    let valor_parcelas
    let salario
    let restante_curso
    let fim

    total = total_a_pagar - (valor_durante_curso + valor_carencia)
    total_parcelas = duracao_curso * 4 * 12
    valor_parcelas = total / total_parcelas
    

    console.log(`O saldo devedor é de R$${total.toFixed(2)}. Pode ser dividido em ${total_parcelas}x parcelas de R$${valor_parcelas.toFixed(2)}`)
    
    salario = 10 * valor_parcelas
    console.log(`Aluno deverá ter de renda mínima R$${salario} baseado no valor das parcelas.`)

    restante_curso = duracao_curso - ano
    if (ano === 1){
        restante_curso = duracao_curso
    }
    if (semestre === 2){
        restante_curso = (duracao_curso - ano) - 0.5
    }

    fim = (restante_curso * 12) + total_parcelas
    console.log(`Aluno iniciária no ${ano}º ano da faculdade e terminará ${fim} meses depois.`)



    
}

main()