import { question } from "readline-sync";

function main() {
    // ENTRADA
    const duracao = Number(question("Tempo de duracao do curso (anos): "))
    const mensalidade = Number(question("Mensalidade: "));
    const taxa_selic = Number(question("Taxa selic: "));
    const salario_minimo = Number(question("Salario minimo: "));
    const renda_familiar = Number(question("Renda familiar: "));
    const qtd_membro_familiar = Number(question("NUMEROs de Membrons familiares: "));
    const ano_inicio = Number(question("Ano inicio: "));
    const semestre_inicio = Number(question("Semestre inicio: "));
    const salario_pessoal = Number(question("Salario atual: "));

    // PROCESSAMENTO
    const habilitado = verificaAprovado(renda_familiar, qtd_membro_familiar, salario_minimo)
    let finaciamento = valorFinaciamento(mensalidade, duracao)
    let juros = calculaJuros(renda_familiar, salario_minimo, taxa_selic, duracao)
    let valor_curso = valorTotalCurso(finaciamento, juros)
    let valor_durante_curso = valorPagoDuranteCurso(duracao)
    let valor_carencia_curso = valorPagoDuranteCarencia()
    let renda_minima = calculaRendaMinimaPagamento(duracao, valor_curso);
    let ano_pg = verificaAnoInicioPagamento(duracao, ano_inicio, semestre_inicio);
    let semestre_pg = verificaSemestreInicioPagamento(duracao, ano_inicio, semestre_inicio);



    // SAIDA
    if (habilitado) {
        console.log(` \n -------->>>>>>>>>>>><<<<<<<<<<<<<<<<<<----------\n FINANCIAMENTO APROVADO    \n ________________________________________\n`);
        console.log(`valor a ser finaciado:R$ ${finaciamento}`);
        console.log(`total de juros: R$  ${juros}`);
        console.log(`valor total : R$ ${valor_curso}`);
        console.log(`valor durante o curso: R$ ${valor_durante_curso}`);
        console.log(`valor durante a carencia: R$ ${valor_carencia_curso}`);
        console.log(`renda minima:R$ ${renda_minima}`);
        console.log(`ano de inicio do  pagamento: ${ano_pg}`);
        console.log(`semestre de inicio do pagamento: ${semestre_pg} semestre`);
    } else {
        console.log(`\n___________________\nFINANCIAMENTO REPROVADO\n_______________________\n`)

    }


}

function verificaAprovado(renda_mensal, qtd_membro_familiar, salario_minimo) {
    if ((renda_mensal / qtd_membro_familiar) >= 0 && (renda_mensal / qtd_membro_familiar) <= salario_minimo * 3) {
        return true;
    } else {
        return false;
    }
}

function valorFinaciamento(mensalidade, duracao_anos) {
    let valor_curso;
    let duracao_meses;
    if (duracao_anos % 2 != 0) {
        duracao_meses = Math.floor(duracao_anos * 12) + 6;
    } else {
        duracao_meses = Math.floor(duracao_anos * 12);
    }
    valor_curso = duracao_meses * mensalidade;
    return valor_curso;
}

function calculaJuros(renda_mensal, salario_minimo, taxa_selic, duracao_anos) {
    let duracao_meses;
    if (duracao_anos - Math.floor(duracao_anos) != 0) {
        duracao_meses = (duracao_anos * 12) + 6
    } else {
        duracao_meses = duracao_anos * 12
    }

    if (renda_mensal >= 0 && renda_mensal <= 1.5 * salario_minimo) {
        return (0.1 * taxa_selic) * duracao_meses;
    } else if (renda_mensal > 1.5 * salario_minimo && renda_mensal <= 2) {
        return 0.15 * taxa_selic * duracao_meses;
    } else if (renda_mensal > 2 * salario_minimo && renda_mensal <= 2.5 * salario_minimo) {
        return 0.2 * taxa_selic * duracao_meses;
    } else if (renda_mensal > 2.5 * salario_minimo) {
        return 0.25 * taxa_selic * duracao_meses;
    }
}

function valorTotalCurso(finaciamento, juros) {
    return finaciamento + juros;
}

function valorPagoDuranteCurso(ano) {
    return ano * 600;
}

function valorPagoDuranteCarencia() {
    return (18 / 3) * 150;
}

function calculaRendaMinimaPagamento(duracao_anos, valor_curso) {
    let renda_minima;
    let duracao_meses;
    let prazo_maximo_anos = 3 * duracao_anos;
    if (prazo_maximo_anos % 2 != 0) {
        duracao_meses = (Math.floor(prazo_maximo_anos) * 12) + 6

    } else {
        duracao_meses = prazo_maximo_anos * 12;
    }
    renda_minima = ((valor_curso / duracao_meses) * 10).toFixed(2);
    return renda_minima;
}

function valorPagoAposCurso() {
    return 1350;
}

function verificaAnoInicioPagamento(duracao_anos, ano_inicio, semestre_inicio) {
    let semestre_em_ano;
    if (semestre_inicio == 1) {
        semestre_em_ano = 0.5
    } else if (semestre_inicio == 2) {
        semestre_em_ano = 1
    }
    let ano_pagamento = Math.floor(ano_inicio + duracao_anos + semestre_em_ano + 1.5);
    return ano_pagamento;
}

function verificaSemestreInicioPagamento(duracao_anos, ano_inicio, semestre_inicio) {
    let semestre_pagamento;
    if ((ano_inicio + duracao_anos + 1.5) % 2 != 0) {
        semestre_pagamento = 2;
    } else {
        semestre_pagamento = 1
    }
    return semestre_pagamento;
}



main()