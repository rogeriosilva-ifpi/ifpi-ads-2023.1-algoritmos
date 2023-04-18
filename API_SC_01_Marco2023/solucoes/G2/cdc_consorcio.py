def main():
    print('---- CDC ou Consórcio ----')
    valor_argo = 89000
    valor_bem = 185000

    # Entrada
    percentual_fipe = float(input('Valor Venda (% FIPE): '))
    meses = int(input("Em quantas parcelas: "))
    taxa_cdc = float(input("Taxa de Juros do CDC (%): "))
    taxa_admin = float(input("Taxa de Admin. Consórcio (%): "))

    # Processamento
    valor_entrada_lance = calcular_valor_entrada(percentual_fipe, valor_argo)
    valor_parcelado = valor_bem - valor_entrada_lance
    juros_cdc = calcular_juros(valor_parcelado, taxa_cdc, meses)
    taxa_admin = calcular_taxa_admin(valor_bem, taxa_admin)

    parcela_cdc = calcular_parcela(valor_parcelado+juros_cdc, meses)
    parcela_consorcio = calcular_parcela(valor_parcelado+taxa_admin, meses)

    melhor_escolha = ''
    if parcela_cdc < parcela_consorcio:
        melhor_escolha = 'CDC'
    elif parcela_consorcio < parcela_cdc:
        melhor_escolha = 'Consórcio'
    else:
        melhor_escolha = 'CDC/Consórcio'

    # Saída
    print('---- SIMULAÇÃO CDC vs Consórcio ----')
    print(f'Valor de Bem R$ {valor_bem:.2f}')
    print(f'Entrada/Lance R$ {valor_entrada_lance:.2f}')
    print(f'Valor a ser Parcelado: R$ {valor_parcelado:.2f}')
    print('--- JUROS/TAXA DE ADMIN. ---')
    print(f'>          CDC Juros: R$ {juros_cdc:.2f}')
    print(f'> Consórcio Tx Admin: R$ {taxa_admin:.2f}')
    print('--- PARCELAMENTO ---')
    print(f'      CDC: {meses} parcelas de R$ {parcela_cdc:.2f}')
    print(f'Consórcio: {meses} parcelas de R$ {parcela_consorcio:.2f}')
    print('---- MELHOR ESCOLHA ---')
    print(f'>>> {melhor_escolha}')


def calcular_valor_entrada(percentual_fipe, valor):
    entrada = valor * (percentual_fipe/100)
    return entrada


def calcular_juros(valor_parcelado, taxa_cdc, meses):
    # J = CIT
    juros = valor_parcelado * (taxa_cdc/100) * meses
    return juros


def calcular_taxa_admin(valor_bem, taxa_admin):
    taxa = valor_bem * (taxa_admin/100)
    return taxa


def calcular_parcela(valor, meses):
    parcela = valor / meses
    return parcela


main()
