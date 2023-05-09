def main():
    # Entrada
    num1 = obter_inteiro()
    num2 = obter_inteiro()

    # Processamento
    soma = num1 + num2

    # Saída
    print(f'X = {soma}')


def obter_inteiro():
    return int(input('Número: '))


main()
