def main():
    valor_iphone = float(input('Digite o valor do Iphone: '))
    entrada = float(input('Digite o valor de entrada: '))
    metodo_pagamento = int(input('1-- pix\n2 -- cartao de debito\n3 -- cartao de credito\nDigite a forma de pagamento: '))
    if metodo_pagamento == 3:
        parcela = float(input('Digite em quantas parcelas voce quer dividir: '))

    pix_debito = calcular_pix_debito(valor_iphone, entrada, metodo_pagamento)
    credito = calcular_credito(valor_iphone, entrada, parcela) 
    validar = validar_juro(metodo_pagamento)
        
    if metodo_pagamento == 1 or metodo_pagamento == 2:
        print('O valor original era de {} e com o desconto {}  e o novo valor é de {}'.format(valor_iphone, validar, pix_debito))

    if metodo_pagamento  == 3:
        print('O valor original era de {} e com o desconto {}  as parcelas serão de {}'.format(valor_iphone, validar, credito))


def validar_juro(valor):
    if valor == 1:
        return 15
    else:
        return 10
    
def calcular_pix_debito(valor, entrada, metodo):
    if metodo == 1:
        print((valor * 15) / 100 + entrada)
    elif metodo == 2:
        print((valor * 10) / 100 + entrada)

def calcular_credito(valor_iphone, entrada, parcela):
    print(valor_iphone - entrada) / (parcela * 1.5 + 3.99)

main()