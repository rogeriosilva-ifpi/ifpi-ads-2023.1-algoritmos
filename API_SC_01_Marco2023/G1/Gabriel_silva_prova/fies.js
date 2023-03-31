import prompt from "prompt-sync"
let input = prompt()

function main(){

    let duracao_anos = Number(input('Digite a duração em anos do curso: '))
    let valor_mensalidade = Number(input('Digite o valor da mensalidade: '))
    let taxa_selic = Number(input('Digite o valor da taxa SELIC: '))
    let salario_minimo = Number(input('Digite o salário mínimo: '))
    let renda_familiar = Number(input('Digite a renda total da família: '))
    let numero_pessoas = Number(input('Digite o número de pessoas da família: '))
    let semestre_inicio = Number(input('Digite o semestre de início: '))
    let ano_inicio = Number(input('Digite o ano de início: '))
    let salario_por_pessoa = renda_familiar / numero_pessoas
    let duracao_curso_meses = duracao_anos * 12
    let juros = 0
    let valor_total_curso = valor_mensalidade * duracao_curso_meses
    //parcela de 150 a ser paga a cada 3 meses, descontada do juros
    let total_parcela_150 = ((duracao_curso_meses + 18) / 3) * 150 //parcela durante o curos + carencia
    //valor total = juros + valor total curso
    let valor_a_pagar = 0
    let juros_restante = 0
    let parcela_financiamento = 0
    let renda_minima_aluno = 0
    let meses_conclusao_pagamento = duracao_curso_meses + 18 + (4*duracao_anos)

   
    if(renda_familiar>= 0 && renda_familiar <= (1.5 * salario_minimo)){
        // 10 % da taxa selic
        juros = (((taxa_selic / 100) * (0.1)) * valor_total_curso) * duracao_anos  // taxa exercida sobre o valor total em x anos.
        valor_a_pagar = valor_total_curso + juros
        juros_restante = juros - total_parcela_150
        parcela_financiamento = (valor_a_pagar + juros_restante) / (4 * duracao_anos)
        renda_minima_aluno = parcela_financiamento * 10

        console.log('O Aluno está habilitado a contratar o FIES!')
        console.log(`O valor a ser financiado é de : ${valor_total_curso}`)
        console.log(`O valor dos juros totais e de: ${juros}`)
        console.log(`O valor total a pagar é de ${valor_a_pagar}`)
        console.log(`Durante o curso e a carência será pago um valor de: ${total_parcela_150}`)
        console.log(`A renda miníma do aluno ao iniciar o pagamento deve ser de: ${renda_minima_aluno}`)
        console.log(`O aluno terminará de pagar ${meses_conclusao_pagamento} meses após o término do curso.`)
        


    }else if(renda_familiar <= (2 * salario_minimo)){
        // 15% da selic
        juros = (((taxa_selic / 100) * (0.15)) * valor_total_curso) * duracao_anos  // taxa exercida sobre o valor total em x anos.
        valor_a_pagar = valor_total_curso + juros
        juros_restante = juros - total_parcela_150
        parcela_financiamento = (valor_a_pagar + juros_restante) / (4 * duracao_anos)
        renda_minima_aluno = parcela_financiamento * 10

        console.log('O Aluno está habilitado a contratar o FIES!')
        console.log(`O valor a ser financiado é de : ${valor_total_curso}`)
        console.log(`O valor dos juros totais e de: ${juros}`)
        console.log(`O valor total a pagar é de ${valor_a_pagar}`)
        console.log(`Durante o curso e a carência será pago um valor de: ${total_parcela_150}`)
        console.log(`A renda miníma do aluno ao iniciar o pagamento deve ser de: ${renda_minima_aluno}`)
        console.log(`O aluno terminará de pagar ${meses_conclusao_pagamento} meses após o término do curso.`)
    
    }else if(renda_familiar <= (2.5 * salario_minimo)){
        //20% da selic
        juros = (((taxa_selic / 100) * (0.2)) * valor_total_curso) * duracao_anos  // taxa exercida sobre o valor total em x anos.
        valor_a_pagar = valor_total_curso + juros
        juros_restante = juros - total_parcela_150
        parcela_financiamento = (valor_a_pagar + juros_restante) / (4 * duracao_anos)
        renda_minima_aluno = parcela_financiamento * 10

        console.log('O Aluno está habilitado a contratar o FIES!')
        console.log(`O valor a ser financiado é de : ${valor_total_curso}`)
        console.log(`O valor dos juros totais e de: ${juros}`)
        console.log(`O valor total a pagar é de ${valor_a_pagar}`)
        console.log(`Durante o curso e a carência será pago um valor de: ${total_parcela_150}`)
        console.log(`A renda miníma do aluno ao iniciar o pagamento deve ser de: ${renda_minima_aluno}`)
        console.log(`O aluno terminará de pagar ${meses_conclusao_pagamento} meses após o término do curso.`)
      
    }else if (renda_familiar > (2.5 * salario_minimo)){
        //25% da selic
        juros = (((taxa_selic / 100) * (0.25)) * valor_total_curso) * duracao_anos  // taxa exercida sobre o valor total em x anos.
        valor_a_pagar = valor_total_curso + juros
        juros_restante = juros - total_parcela_150
        parcela_financiamento = (valor_a_pagar + juros_restante) / (4 * duracao_anos)
        renda_minima_aluno = parcela_financiamento * 10

        console.log('O Aluno está habilitado a contratar o FIES!')
        console.log(`O valor a ser financiado é de : ${valor_total_curso}`)
        console.log(`O valor dos juros totais e de: ${juros}`)
        console.log(`O valor total a pagar é de ${valor_a_pagar}`)
        console.log(`Durante o curso e a carência será pago um valor de: ${total_parcela_150}`)
        console.log(`A renda miníma do aluno ao iniciar o pagamento deve ser de: ${renda_minima_aluno}`)
        console.log(`O aluno terminará de pagar ${meses_conclusao_pagamento} meses após o término do curso.`)
       

    }else if(salario_por_pessoa > (3*salario_minimo)){
        console.log('Aluno NÃO está habilitado a contratar o FIES')
}
}
main()