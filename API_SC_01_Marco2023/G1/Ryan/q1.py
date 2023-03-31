def main():
    duracao_curso = float(input('Qual é a duração do seu curso (em anos)?: '))
    mensalidade = float(input('Quanto é a mensalidade da faculdade aplicante?: '))
    selic = float(input('Qaul é o valor atual da taxa selic?: '))
    sal_minimo = float(input('Valor do salário mínimo atual: '))
    renda_familiar = float(input('Renda familiar: '))
    tamanho_familia = int(input('Tamanho da família: '))
    ano_inicio = int(input('Ano de início: '))
    semestre_inicio = int(input('Semestre de início (1 ou 2):'))
    
    # Renda per capita
    salarios = renda_familiar / sal_minimo
    duracao_curso_meses = duracao_curso * 12
    percapita = salarios / tamanho_familia
    
    # Ano e semestre final
    ano_final = int(duracao_curso + ano_inicio + 18)# Estou considerando o ano e o mês final sem os anos e meses depois da carência, pois é do CURSO
    duracao_total_meses = duracao_curso_meses 
    if not(duracao_curso_meses // 6 % 2 == 0):        
        semestre_final = semestre_inicio + 1
        if semestre_final > 2:
            semestre_final = 1
    else:
        semestre_final = semestre_inicio
    print(f'ANO INICIAL DO PAGAMENTO: {ano_inicio}')
    print(f'ANO FINAL DO PAGAMENTO: {ano_final}')
    print(f'SEMESTRE INICIAL: {semestre_inicio} ')
    print(f'SEMESTRE FINAL: {semestre_final}')
        
    
    
    # Verificar se é habilitado ou não
    if not(habilitado(percapita)): # Fail fast
        print('Você não está apto para ter um financiamento pelo FIES ')
        return
    print('Você está habilitado! ')
    
    # Total financiado
    financiamento = float(duracao_curso_meses * mensalidade)
    print(f'O total a ser financiado é de R${financiamento:.2f}')
    
    
    
    # Valor na carência e durante o curso:
    meses_carencia = duracao_curso_meses // 3
    carencia = 18 * 150
    print(f'O total pago durante o curso é de {meses_carencia * 150:.2f}')
    print(f'O total pago na carência será de {carencia:.2f}')
    
    
    # Juros totais
    taxa = calcular_taxa(salarios, selic)
    juros = calcular_juros((financiamento/12), duracao_curso, taxa)
    montante = juros + financiamento
    valor_total = montante - meses_carencia - carencia
    print(f'O VALOR TOTAL COM JUROS SELIC = R${montante:.2f}\nJUROS SELIC: R${juros:.2f}')
    print(f'O VALOR TOTAL APÓS CARÊNCIA: R${valor_total:.2f}')
    
    #Valor da parcela do financiamento
    parcelamento = int(input('Em quanto deseja parcelar? \n>>  '))
    if parcelamento > 4 * duracao_curso_meses: # Fail fast
        print('São muitas parcelas!')
        return 
    print(f'O valor da parcela é de {valor_total/parcelamento:.2f}')
    
    # Renda mínima do aluno
    renda_min = (valor_total/parcelamento) / sal_minimo
    print(f'Você deve ter uma renda superior a {renda_min:.2f} salários mínimos para pagar essa mensaliade')
    
    

def calcular_juros(valor, taxa, tempo):
    return valor * taxa * tempo 

def calcular_taxa(sal_minimo, selic):
    if sal_minimo <= 1.5:
        return 10/100 * selic
    elif sal_minimo <= 2:
        return 15/100 * selic
    elif sal_minimo <= 2.5:
        return 20/100 * selic
    else:
        return 25/100 * selic
    
def habilitado(percapita): # Se tem até 3 salários mínimos per capita
    return percapita <= 3


main()