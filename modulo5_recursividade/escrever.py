def main():
    n = int(input('N: '))
    escrever_ate_um(n)


def escrever_ate_um(valor):
    print(valor)
    if valor > 1:
        escrever_ate_um(valor - 1)


main()
