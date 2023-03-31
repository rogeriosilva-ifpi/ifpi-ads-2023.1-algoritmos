import math

def main():
    
    # Entrada
    duracao_curso = obter_dados('Qual a duracao do seu curso em anos?\n')
    valor_mensalidade = obter_dados('Qual o valor da mensalidade do seu curso?\n')
    taxa_selic = float(input('Qual a taxa selic vigente?\n'))
    salario_minimo = obter_dados('Qual o valor do salario minimo vigente?\n')
    renda_familiar = obter_dados('Qual o valor da renda familiar da sua familia?\n')
    numero_familiares = obter_dados('Quantas pessoas compoem sua familia? (contando com voce)\n')

    # Processamento
    renda_per_capita = calculo_renda_per_capita(renda_familiar,numero_familiares,salario_minimo)

    habilitacao = verificar_habilitacao_financiamento(renda_per_capita)
    
    if habilitacao == 'APROVADA':
        valor_a_ser_financiado = valor_financiamento(valor_mensalidade,duracao_curso,habilitacao)
        juros = valor_juros(valor_a_ser_financiado, taxa_selic,duracao_curso, renda_per_capita, salario_minimo)
        valor_total = calcular_montante(valor_a_ser_financiado, juros)
        carencia_durante_curso = calcular_carencia_durante_curso(duracao_curso)
        carencia_total = calcular_carencia_total(carencia_durante_curso)
        valor_parcelas_maximas = calcular_valor_parcelas(duracao_curso,valor_total, carencia_total)
        renda_minima = calcular_renda_necessaria_apos_conclusao(valor_parcelas_maximas)

    # Saida
    print('Sua situacao de habilitacao do FIES se enconta como {}'.format(habilitacao))
    print('O valor a ser financiado pelo FIES e: R${}'.format(valor_a_ser_financiado))
    print('O juros total deste financiamento sera de: R${}'.format(juros))
    print('O valor total (somando o valor a ser financiado mais o juros) e de R${}'.format(valor_total))
    print('A carencia paga durante o curso e igual a R${} e carencia total que sera paga sera de R${}.'.format(carencia_durante_curso,carencia_total))
    print('Caso opte em parcelar no maximo de parcelas permitidas, cada parcela custara R${}'.format(valor_parcelas_maximas))
    print('Para pagar o valor dessas parcelas, voce precisa de uma renda de no minimo R${}'.format(renda_minima))


def obter_dados(pedido):
    dado = int(input(pedido))
    return dado

def verificar_habilitacao_financiamento(renda_per_capita):
    if renda_per_capita >= 3:
        return 'NEGADA'
    else:
        return 'APROVADA'

def valor_financiamento(valor_mensalidade,duracao_curso,habilitacao):
        custo = (duracao_curso*12) * valor_mensalidade
        return custo    

def calculo_renda_per_capita(renda_familiar,numero_familiares,salario_minimo):
    renda = renda_familiar / numero_familiares
    renda_per_capita_salario_minimo =  renda / salario_minimo
    return renda_per_capita_salario_minimo

def valor_juros(valor_financiamento, taxa_selic,duracao_curso, renda_per_capita, salario_minimo):
    if renda_per_capita <= 1.5:
        juros = (valor_financiamento * (taxa_selic*0.1) * duracao_curso) / 100
        return juros
    elif renda_per_capita <= 2:
        juros = (valor_financiamento * (taxa_selic*0.15) * duracao_curso) / 100
        return juros
    elif renda_per_capita <= 2.5:
        juros = (valor_financiamento * (taxa_selic*0.2) * duracao_curso) / 100
        return juros
    else:
        juros = (valor_financiamento * (taxa_selic*0.25) *duracao_curso) / 100
        return juros
def calcular_montante(valor_financiamento, juros):
    montante = valor_financiamento + juros
    return montante

def calcular_carencia_durante_curso(duracao_curso):
    duracao_carencia_durante_curso = (duracao_curso * 12) / 3
    custo_durante_curso = duracao_carencia_durante_curso * 150
    return custo_durante_curso

def calcular_carencia_total(carencia_durante_curso):
    carencia_total = (18/3)*150 + carencia_durante_curso
    return carencia_total

def calcular_valor_parcelas(duracao_curso,valor_total, carencia_total):
    parcelas_maximas = (duracao_curso*12)*4
    valor_reduzido_da_carencia = valor_total - carencia_total
    valor_parcelas_maximas = valor_reduzido_da_carencia / parcelas_maximas
    return valor_parcelas_maximas

def calcular_renda_necessaria_apos_conclusao(valor_parcelas_maximas):
    renda_necessaria = valor_parcelas_maximas / 0.1
    return renda_necessaria

main()