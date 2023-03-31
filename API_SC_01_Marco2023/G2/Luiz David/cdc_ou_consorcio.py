from auxiliar_functions import *

def main():
    valor_bem = get_valid_value("valor do seu veiculo: ")
    percentual_fipe = get_valid_value("percentual fipe veiculo: ")
    valor_carro_novo = get_valid_value("valor do veículo que deseja comprar: ")
    qtd_meses = get_valid_value("quantidade de parcelas: ")
    taxa_juros = get_valid_value("taxa de juros %: ")
    taxa_adm = get_valid_value("taxa de administração do consórcio%: ") / 100

    calcular_financiamento(valor_bem, percentual_fipe, qtd_meses, taxa_juros, taxa_adm)

def calcular_valor_veiculo(valor, percentual):
    return valor * (percentual / 100)

def calcular_financiamento(valor_bem, percentual_fipe, qtd_meses, taxa_juros, valor_carro_novo):
    valor_veiculo = calcular_valor_veiculo(valor_bem, percentual_fipe)

    valor_financiado = valor_carro_novo

    valor_juros = valor_financiado * taxa_juros

    valor_total = valor_financiado - (valor_veiculo + valor_juros)

    valor_parcelas = valor_total / qtd_meses

    return valor_total, valor_juros


def calcular_consorcio(valor_bem, percentual_fipe, qtd_meses, taxa_adm, valor_carro_novo):
    valor_taxa = taxa_adm * valor_carro_novo


main()


