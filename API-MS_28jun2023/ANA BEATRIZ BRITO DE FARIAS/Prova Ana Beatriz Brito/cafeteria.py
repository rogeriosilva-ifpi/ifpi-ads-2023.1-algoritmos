from utilcafeteira import *

def main():
    print ('''  -------Menu -------:
        1 - Cadrastar Café
        2 - Mostrar Cardapio

        ''')

    opcoes()


def opcoes():
    n = int(input("Digite a opçao desejada:"))
    if (n == 1):
        return cadastrar_produto()
    elif (n == 2):
        return mostrar_cardapio()


main()
