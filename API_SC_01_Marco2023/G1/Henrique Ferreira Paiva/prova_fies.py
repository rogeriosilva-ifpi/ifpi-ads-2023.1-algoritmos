# Questão 1 - FIES

def main():
    # Entrada
    duracao_anos = int(input('Digite a quantidade inteira de anos de duração do seu curso: '))

    # Solicitação da variável "duracao_meses"
    print('Digite [1], caso o seu curso termine no segundo semestre do ano - Ex: 4.0 anos')
    print('Digite [2], caso o seu curso termine no primeiro semestre do ano - Ex: 4.6 anos')
    duracao_meses = int(input('Escolha uma das alternativas acima: '))

    # Condicional referente à variável "duracao_meses"
    if (duracao_meses < 1 or duracao_meses > 2):
        print('OPÇÃO INVÁLIDA! Encerrando o programa...')
    else:
        mensalidade = float(input('Digite o valor da mensalidade: R$'))
        taxa_selic = float(input('Digite o valor da taxa selic (%): '))
        salario_minimo = float(input('Digite o valor do salário mínimo: '))
        renda_familiar = float(input('Digite o valor total da sua renda familiar bruta: '))
        pessoas = int(input('Digite o número de pessoas da sua família: '))
        ano_inicial = int(input('Digite o ano em que você pretende entrar na faculdade: '))

        # Solicitação da variável "semestre_inicial"
        print('\nDigite [1], caso você pretenda começar o seu curso no PRIMEIRO semestre - Ex: 2023.1')
        print('Digite [2], caso você pretenda começar o seu curso no SEGUNDO semestre - Ex: 2023.2')
        semestre_inicial = int(input('Escolha uma das alternativas acima: '))

        # Condicional relacionada à variável "semestre_inicial"
        if (semestre_inicial < 1 or semestre_inicial > 2):
            print('OPÇÃO INVÁLIDA! Encerrando o programa...')

    # Processamento
    juros_mensais, juros_totais, renda_per_capita = calcular_juros(taxa_selic, salario_minimo, renda_familiar, pessoas, duracao_meses, duracao_anos)
    divida_total = calcular_divida(duracao_meses, juros_mensais, mensalidade, duracao_anos)
    parcela_fixa = calcular_parcela_fixa(duracao_meses, duracao_anos)

    # Saída
    if (renda_per_capita > 3):
        print('REPROVADO - Você não está habilitado a contratar o financiamento estudantil!')
    else:
        print('APROVADO - Você está habilitado a contratar o financiamento estudantil!')

def calcular_juros(taxa_selic, salario_minimo, renda_familiar, pessoas, duracao_meses, duracao_anos):
    salario_selic = (taxa_selic * salario_minimo / 100)
    renda_per_capita = renda_familiar / pessoas

    if (renda_per_capita >= 0 or renda_per_capita <= 3):
        if (renda_per_capita >= 0 and renda_per_capita <= salario_minimo * 1.5):
            juros_mensais = (10 * salario_selic / 100)
        elif (renda_per_capita > salario_minimo * 1.5 and renda_per_capita <= salario_minimo * 2):
            juros_mensais = (15 * salario_selic / 100)
        elif (renda_per_capita > salario_minimo * 2 and renda_per_capita <= salario_minimo * 2.5):
            juros_mensais = (20 * salario_selic / 100)
        else:
            juros_mensais = (25 * salario_selic / 100)

        juros_anuais = juros_mensais * 12

        if (duracao_meses == 1):
            juros_totais = juros_anuais * duracao_anos
        else:
            juros_totais = (juros_anuais * duracao_anos) + (juros_anuais / 2)
    
        return juros_mensais, juros_totais, renda_per_capita

def calcular_parcela_fixa(duracao_meses, duracao_ano):
    if (duracao_meses == 1):
        periodicidade_de_pagamento_fixo = (duracao_ano * 12 / 3)
    else:
        periodicidade_de_pagamento_fixo = (duracao_ano * 12 / 3) + (duracao_meses / 3)

    parcela_fixa = 150 * periodicidade_de_pagamento_fixo
    
    return parcela_fixa

def calcular_divida(duracao_meses, juros_mensais, mensalidade, duracao_anos, parcela_fixa):
    mensalidade_nova = juros_mensais + mensalidade
    divida_anual = mensalidade_nova * 12

    if (duracao_meses == 1):
        divida_total = divida_anual * duracao_anos
    else:
        divida_total = (divida_anual * duracao_anos) + (divida_anual / 2)
        saldo_devedor = divida_total - parcela_fixa

    return saldo_devedor

def calcular_parcela_pos_curso(duracao_meses, duracao_anos, saldo_devedor):
    if (duracao_meses == 1):
        duracao_total = duracao_anos * 4
    else:
        duracao_total = (duracao_anos + 0.6) * 4
        
    parcelamento_max = duracao_total * 12
    valor_por_parcela = saldo_devedor / parcelamento_max

main()
