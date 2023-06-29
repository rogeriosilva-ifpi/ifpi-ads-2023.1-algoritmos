def main():
    open('./alegria.txt', encoding='UTF-8')
    nome = str(input('Digite o seu nome: '))
    digito = -1


def fazer_saudacao(digito):
    if (digito > 0):
        print('Olá, ', end='')
    else:
        print('Tchau, ', end='')


main()
