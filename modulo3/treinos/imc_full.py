def main():
    print('--- IMC Full ----')
    nome = input('Nome: ')
    altura = float(input('Altura (m): '))
    peso = float(input('Peso (kg): '))

    imc = calcular_imc(altura, peso)
    situacao = verificar_situacao(imc)

    print(f'Olá {nome} seu IMC foi {imc:.1f}')
    print(f'> E você está {situacao}')


def calcular_imc(altura, peso):
    imc = peso / altura**2
    return imc


def verificar_situacao(imc):
    if imc < 18:
        return 'ABAIXO DO PESO'
    elif imc <= 25:
        return 'NORMAL'
    elif imc < 30:
        return 'SOBREPESO'
    else:
        return 'OBESO'


main()
