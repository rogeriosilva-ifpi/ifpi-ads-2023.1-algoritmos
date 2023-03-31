import { question } from "readline-sync";

function main(){
    //Entrada
    const nome = question('Informe seu nome: ')
    const valor_hora_aula = obter_numero('Informe o valor da sua hora/aula: ')
    const qtd_horas_semanais = obter_numero('Informe a quantidade de horas semanais: ')
    const qualificacao = question('Informe sua qualificação (E - Especialização; M - Mestrado; D - Doutorado): ')
    const tempo_exp = obter_numero('Informe seu tempo de experiência docente em meses: ')
    const qtd_filhos = obter_numero('Informe a quantidade de filhos que você tem menores de 6 anos: ')
    const plano_saude = obter_numero('Informe o valor do plano de saúde: R$ ')

    //Processamento
    const valor_qualif = valor_qualificacao(qualificacao, valor_hora_aula)
    const valor_exper = valor_experiencia(tempo_exp, valor_qualif)
    const valor_h_prof = valor_prof(valor_qualif, valor_exper)
    const sal_sem = salario_semanal(qtd_horas_semanais, valor_h_prof)
    const sal_mens = salario_mensal(sal_sem)
    const aux_cre = auxilio_creche(qtd_filhos)
    const pla_saude = plano(plano_saude, sal_mens)
    const aux_combustivel = combustivel(qtd_horas_semanais)
    const previdencia = prev_social(sal_mens)
    const imposto = imposto_renda(sal_mens, previdencia)
    const sal_bru = salario_bruto(sal_mens, aux_cre, pla_saude, aux_combustivel)
    const sal_des = salario_descontos(previdencia, imposto)
    const sal_liq = salario_liquido(sal_bru, sal_des)



    //Saída
    console.log(`\n>>> Contracheque mensal detalhado do(a) ${nome}<<<`)
    console.log(`\n> Valor hora/professor: R$ ${valor_h_prof}`)
    console.log(`> Salário Base Semanal: R$ ${sal_sem}`)
    console.log(`\n-- Ganhos --`)
    console.log(`\n> Salário Base Mensal: R$ ${sal_mens}`)
    console.log(`> Auxílio creche: R$ ${aux_cre} `)
    console.log(`> Ressarcimento saúde: R$ ${pla_saude}`)
    console.log(`> Auxílio combustível: R$ ${aux_combustivel}`)
    console.log(`\n> > Salário Bruto (Soma dos itens acima): R$ ${sal_bru}`)
    console.log(`\n-- Descontos --`)
    console.log(`\n> Previdência: R$ ${previdencia}`)
    console.log(`> Imposto de renda: R$ ${imposto}`)
    console.log(`\n> > Total de descontos (soma dos iten acima): R$ ${sal_des}`)
    console.log(`\n-- Salário Líquido (Ganhos - Descontos) --`)
    console.log(`> R$ ${sal_liq}`)

}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function valor_qualificacao(qualificacao, valor_hora_aula){
    if (qualificacao === 'E'){
        let valor_h = valor_hora_aula * 0.20
        let valor_qual = valor_hora_aula + valor_h
        return valor_qual
    }else if (qualificacao === 'M'){
        let valor_h = valor_hora_aula * 0.30
        let valor_qual = valor_hora_aula + valor_h
        return valor_qual
    }else if (qualificacao === 'D'){
        let valor_h = valor_hora_aula * 0.50
        let valor_qual = valor_hora_aula + valor_h
        return valor_qual
    }else{
        return 'Informe uma das iniciais referentes a sua qualificação !'
    }
}

function valor_experiencia(tempo_exp, valor_qualificacao){
    if (tempo_exp > 6){
        let valor_exp = valor_qualificacao * 0.05
        return valor_exp
    }else{
        return valor_qualificacao
    }
}

function valor_prof(valor_qualificacao, valor_experiencia){
    let soma = valor_qualificacao + valor_experiencia
    return soma
}

function salario_semanal(qtd_horas_semanais, valor_prof){
    let sal_semanal = qtd_horas_semanais * valor_prof
    return sal_semanal
}

function salario_mensal(salario_semanal){
    let sal_mensal = 4.5 * salario_semanal
    return sal_mensal
}

// Benefícios

function auxilio_creche(qtd_filhos){
    let sal_creche = 700 * qtd_filhos
    return sal_creche
}

function plano(plano_saude, salario_mensal){
    if (plano_saude <= 1000){
        let sal_plano = 0.5 * salario_mensal
        return sal_plano
    }else{
        let sal_plano = 500
        return sal_plano
    }
}

function combustivel(qtd_horas_semanais){
    let horas = Math.trunc(qtd_horas_semanais / 8)
    let aux_comb = horas * 30
    return aux_comb
}
//Descontos
function prev_social(salario_mensal){
    if (salario_mensal <= 1302.00){
        let prev = salario_mensal * 0.075
        return prev
    }else if(salario_mensal > 1302.00 || salario_mensal <= 2500.00){
        let prev = salario_mensal * 0.09
        return prev
    }else if(salario_mensal > 2500.00 || salario_mensal <= 3900.00){
        let prev = salario_mensal * 0.12
        return prev
    }else if(salario_mensal > 3900.00 || salario_mensal <= 7500.00){
        let prev = salario_mensal * 0.14
        return prev
    }else if(salario_mensal > 7500.00){
        let prev = salario_mensal * 0.16
        return prev
    }
}

function imposto_renda(salario_mensal, prev_social){
    let imp_prev = salario_mensal - prev_social
    if(salario_mensal <= 5000){
        return 'Isento'
    }else{
        let imp = salario_mensal - 5000
        let perc_imp = imp * 0.275
        return perc_imp 
    }
}

function salario_bruto(salario_mensal, auxilio_creche, plano, combustivel){
    let soma = salario_mensal + auxilio_creche + plano + combustivel
    return soma
}

function salario_descontos(prev_social, imposto_renda){
    let descontos = prev_social + imposto_renda
    return descontos
}

function salario_liquido(salario_bruto, salario_descontos){
    let liquido = salario_bruto - salario_descontos
    return liquido
}

main()