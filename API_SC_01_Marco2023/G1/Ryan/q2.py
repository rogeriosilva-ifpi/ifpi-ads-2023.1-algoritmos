def main():
    valor_do_bem = float(input('Digite o valor do bem: '))
    prazo =  float(input('Digite o valor do prazo: '))
    taxa_adm = float(input('Digite o valor da taxa de adm: '))
    valor_lance = float(input('Digite o valor do lance; '))
    lance = int(input('vai dar lance? (1 ou 2)'))
    renda_mensal = float(input('Qual é a sua renda mensal? '))
    
    juros = taxa_adm * valor_do_bem * prazo
    valor_total = valor_do_bem + juros
    
    #quantidade de parcelas:
    if lance == 1:
        if renda_mensal > 30/100 * valor_lance:
            valor_total = valor_total - lance
            parcelas = int(input('Em quantas parcelas você quer dividir? '))
            valor_parcela = calcular_parcela(parcelas, valor_total)
            print(f'A renda mínima para aceite é de  {30/100 * valor_lance} ')
            print('o valor de cada parcela é de', valor_parcela)
            print('O valor da taxa de admnsitração é de', taxa_adm)
            print('O valor total é de', valor_total)
    else:
        print(f'A renda mínima para aceite do lance é de {30/100 * valor_lance}')
        parcelas = int(input('Em quantas parcelas você quer dividir? '))
        valor_parcela = calcular_parcela(parcelas, valor_total)
        print('o valor de cada parcela é de', valor_parcela)
        print('O valor da taxa de admnsitração é de', taxa_adm)
        print('O valor total é de', valor_total)
    
def calcular_parcela(quantidade, valor_total):
    return valor_total / quantidade
main()
