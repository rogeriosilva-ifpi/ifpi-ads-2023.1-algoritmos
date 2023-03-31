def main():
  valor_iphone = float(input('Informe o valor do Iphone: '))
  forma_pagamento = input('Informe a forma de pagamento: ')

  valor_pix_especie = calcular_valor_com_pix_especie(valor_iphone)
  valor_debito = calcular_valor_cartao_debito(valor_iphone)
  
  
  valor_economia = calcular_economia(forma_pagamento, valor_iphone)
  

  if forma_pagamento == 'pix' or forma_pagamento == 'especie':
    print(f'O valor do Iphone pagando por pix/espécie é: R$ {valor_pix_especie:.2f}\nVocê economizará: R$ {valor_economia:.2f}')
  
  if forma_pagamento == 'debito':
    print(f'O valor do Iphone pagando no cartão de débito é: R$ {valor_debito:.2f}\nVocê economizará: R$ {valor_economia:.2f}')

  if forma_pagamento == 'credito':

    entrada = float(input('Valor de entrada: '))
    qtd_parcelas = int(input('Informe a quantidade de parcelas (até 12x): '))
    valor_credito = calcular_valor_cartao_credito(entrada, qtd_parcelas, valor_iphone)
    valor_juros = calcular_juros(entrada, valor_credito, qtd_parcelas)
    print(f'O valor do Iphone pagando no cartão de crédito é: {valor_credito:.2f}\nVocê pagará: R$ {valor_juros:.2f} em juros')


def calcular_valor_com_pix_especie(valor):
  valor = valor - (valor * 0.15)
  return valor

def calcular_valor_cartao_debito(valor):
  return valor - (valor * 0.1)

def calcular_valor_cartao_credito(valor_entrada, parcelas, valor):
  valor_parcela = (valor - valor_entrada) / parcelas
  if valor_entrada == 0:
    if parcelas >= 2 and parcelas < 13:
      valor_final = valor_entrada + ((3.99/100) + (1.5/100 * valor_parcela))
  else:
    valor_final = (valor - valor_entrada) + ((3.99/100) + (1.5/100 * valor_parcela))

  return valor_final 

def calcular_economia(forma, valor):
  valor
  if forma == 'pix' or forma == 'especie':
    valor = valor * 0.15
  if forma == 'debito':
    valor = valor * 0.1
  
  return valor

def calcular_juros(entrada, valor, parcela):
  valor_parcela = (valor - entrada) / parcela
  if entrada == 0:
    if parcela >= 2 and parcela < 13:
      valor_final =  entrada + ((3.99/100) + (1.5/100 * valor_parcela)) - entrada
  else:
    valor_final = ((3.99/100) + (1.5/100 * valor_parcela))

  return valor_final
main()