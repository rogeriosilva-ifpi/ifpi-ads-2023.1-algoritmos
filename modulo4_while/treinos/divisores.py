"""
1. Leia uma lista de números e que para cada número lido, 
escreva o próprio número e a relação de seus
divisores. (flag número = 0).
"""


def main():
    print('****** Divisores de N Números *****')

    # Entrada
    numero = int(input('Favor digite um Número: '))

    while numero != 0:
        mostrar_divisores(numero)
        numero = int(input('Favor digite um Número: '))

    print(f'> Vc digitou {numero} e por isso tchau!')


def mostrar_divisores(numero):
    candidato = numero

    while candidato >= 1:
        if eh_divisor(candidato, numero):
            print(f'> {candidato}')

        # convergencia
        candidato = candidato - 1


def eh_divisor(candidato, numero):
    return numero % candidato == 0


main()
