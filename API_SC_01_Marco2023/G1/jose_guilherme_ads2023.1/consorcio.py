def main():
    
    # Entrada
    valor_do_bem = obter_dados('Qual o valor do veiculo a ser adquirido?\n')
    prazo = obter_dados('Qual o prazo em meses do consorcio do veiculo a ser adquirido?\n')
    taxa_administracao = obter_dados('Qual o valor da taxa de administracao?\n')
    valor_lance_proposto = obter_dados('Qual o valor do lance proposto?\n')
    prazo_ou_parcela = obter_dados('Qual o objetivo do valor do lance?\n- Digite 1 para manter prazo\n- Digite 2 para manter parcela\n')
    renda_mensal = obter_dados('Qual o valor da sua renda renda mensal?\n')

    # Processamento
    valor_total = calcular_valor_total(valor_do_bem, valor_taxa_adm)
    valor_taxa_adm = calcular_taxa_administracao(valor_do_bem,taxa_administracao)
    valor_parcelas = calcular_valor_parcelas(valor_total, prazo)
    verificar_renda = verificar_renda(renda_mensal,valor_parcelas)
    resposta_opcao = novo_prazo_ou_novo_valor_parcelas(prazo_ou_parcela, valor_lance_proposto, valor_total, valor_parcelas)

    # Saida
    print('O valor das parcelas e de R${}'.format(valor_parcelas))
    print('O valor total do consorcio sera de R${}'.format(valor_total))
    print('O valor da taxa administrativa e de R$'.format(valor_taxa_adm))
    print(verificar_renda)
    print('De acordo com sua opcao escolhida, o novo valor da parcela ou novo prazo sera de: {}'.format(resposta_opcao))

def obter_dados(pedido):
    dado = int(input(pedido))

def calcular_taxa_administracao(valor_do_bem,taxa_administracao):
    taxa_adm = valor_do_bem * taxa_administracao
    return taxa_adm

def calcular_valor_total(valor_do_bem, taxa_adm):
    valor_total = valor_do_bem + taxa_adm
    return valor_total

def calcular_valor_parcelas(valor_total, prazo):
    valor_parcelas = valor_total/prazo
    return valor_parcelas

def verificar_renda(renda_mensal,valor_parcelas):
    if valor_parcelas > renda_mensal*(30/100)
        return 'Sua renda nao permite o resgate.'
    else:
        return 'Sua renda permite o resgate.'

def novo_prazo_ou_novo_valor_parcelas(prazo_ou_parcela, valor_lance_proposto, valor_total, valor_parcelas):
    if prazo_ou_parcela == '1':
        parcela_reduzida = (valor_total - valor_lance_proposto) / prazo
        return parcela_reduzida
    if prazo_ou_parcela == '2':
        # para reduzir o prazo, o valor do lance cobrira valor da parcela
        novo_prazo = prazo - (valor_lance_proposto / valor_parcelas)
        return novo_prazo
    else:
        return 'Opcao invalida'

main()

    




