def main():
    nome = input('Qual o seu nome? ')
    print('Abaixo, digite 2 para Especialização, 3 para Mestrado ou 4 para Dutorado!')
    grau = int(input('Qual seu nível superior? ')) * 10
    hora_money = int(input('Quanto sua faculdade paga por aula base? '))
    aulas_sem = int(input('Quantas horas você trabalha por semana? '))
    exp = int(input('Há quantos meses você leciona? ')) // 12
    if exp % 12 > 6:
        exp += 1
    valor_aula_real = (hora_money + (hora_money * grau / 100) + (hora_money * (5 * exp) / 100))
    money_por_semana = aulas_sem * valor_aula_real
    salario_mensal = money_por_semana * 4.5
    
    #benefícios
    filhos = int(input('Quantos filhos menores de 6 anos voce têm? '))
    plano = float(input('Quanto você gasta com plano de saúde? '))
    
    if filhos != 0:
        auxilio_creche = 700 * filhos
    else:
        auxilio_creche = 0
    auxilio_comb = 3.25 * aulas_sem
    if plano != 0:
        if 0.5 * plano <= 500:
            auxilio_plano = 0.5 * plano
        else:
            auxilio_plano = 500
    
    #descontos
    #*INSS
    if salario_mensal <= 1302:
        inss = 7.5 * salario_mensal / 100
    elif salario_mensal <= 2500:
        inss = 9 * salario_mensal / 100
    elif salario_mensal <= 3900:
        inss = 12 * salario_mensal / 100
    elif salario_mensal <= 7500:
        inss = 14 * salario_mensal / 100
    else:
        inss = 16 * salario_mensal / 100
        
    salario_sem_inss = salario_mensal - inss
    
    #*IOR
    if salario_sem_inss > 5000:
        ior = ((salario_sem_inss - 5000) * 27.5 / 100)
    else:
        ior = 0
    salario_mensal + auxilio_comb + auxilio_plano + auxilio_creche
    
    #saída
    print('-'*10 + f' Olá {nome}, aqui está seu contracheque detalhado. ' + '-'*10)
    print(f'Você ganha {valor_aula_real} reais por aula. ')
    print(f'Por semana você ganha {money_por_semana} reais.')
    print()
    print('-'*10 + ' Ganhos ' + '-'*10)
    print(f'Seu salário base mensal é de {salario_mensal} reais.')
    print(f'Auxílio creche: {auxilio_creche} reais.')
    print(f'Ressarcimento do plano de saúde: {auxilio_plano} reais')
    print(f'Auxílio combustível: {auxilio_comb} reais')
    print(f'Salário bruto: {salario_mensal + auxilio_comb + auxilio_plano + auxilio_creche} reais.')
    print()
    print('-'*10 + ' Descontos ' + '-'*10)
    print(f'Previdência: {inss} reais.')
    print(f'Imposto de renda: {ior} reais.')
    print(f'Total descontos: {inss + ior} reais.')
    print()
    print('-'*10 + ' Salário líquido ' + '-'*10)
    print(f'R$ {salario_mensal + auxilio_comb + auxilio_plano + auxilio_creche - (inss + ior)}')
main()
