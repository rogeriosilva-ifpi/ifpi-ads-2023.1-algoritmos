def main():
    fipe = float(input('A quantos porcentos da tabela fipe vendeste o carro? '))
    meses_parcelas = float(input('Em quantas parcelas você quer pagar o carro? '))
    taxa_juros_cdc = float((input('Qual a taxa de juros do empréstimo? ')))
    taxa_consorcio = float((input('Qual a taxa de adm do consórcio? ')))
    
    entrada_lance = 890 * fipe 
    parcela_co = consorcio(entrada_lance, taxa_consorcio, meses_parcelas)
    parcela_cdc = cdc(entrada_lance, taxa_juros_cdc, meses_parcelas)
    print('-'*10 + ' Consórcio ' + '-'*10)
    print('Valor bem: R$ 185.000,00')
    print(f'Valor a ser parcelado')
    print(f'Juros totais: R$ {parcela_co * meses_parcelas + entrada_lance - 185000}')
    print(f'Parcelamento: {meses_parcelas} prestações de R$ {parcela_co}')
    print(f'Total a pagar: R$ {parcela_co * meses_parcelas + entrada_lance}')
    print()
    print('-'*10 + ' CDC ' + '-'*10)
    print('Valor bem: R$ 185.000,00')
    print(f'Valor a ser parcelado: {185000 - entrada_lance}')
    print(f'Juros totais: R$ {parcela_cdc * meses_parcelas + entrada_lance - 185000}')
    print(f'Parcelamento: {meses_parcelas} prestações de R$ {parcela_cdc}')
    print(f'Total a pagar: R$ {parcela_cdc * meses_parcelas + entrada_lance}')
    if parcela_co * meses_parcelas + entrada_lance > parcela_cdc * meses_parcelas + entrada_lance:
        print('CDC é a melhor opção para você!')
    if parcela_cdc * meses_parcelas + entrada_lance > parcela_co * meses_parcelas + entrada_lance:
        print('Consórcio é a melhor opção para você!')
    else:
        if parcela_cdc > parcela_co:
            print('O CDC é melhor!')
        if parcela_co > parcela_cdc:
            print('Consórcio é melhor!')
        else:
            print("Os dois são opções igualmete boas. Fica a seu critério.")
    
    
def consorcio(lance,taxa_adm,meses):
    valor_total = (185000 - lance + (1850 * taxa_adm))
    valor_parcela = valor_total / meses
    return valor_parcela
    
def cdc(entrada, juros, meses):
    valor_a_parcelar = 185000 - entrada
    parcela = (valor_a_parcelar / meses) + (juros * valor_a_parcelar / 100)##estou em dúvida
    total = parcela * meses + entrada
    return parcela

    

main()
