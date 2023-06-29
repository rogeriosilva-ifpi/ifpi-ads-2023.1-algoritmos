def main():
    digito = str()

    menu()

    for count in range(2):
        digito = input('Escolha uma das opções: ')

        if (digito == 'Q' or digito == 'q'):
            calcular_area_quadrado()
        elif (digito == 'R' or digito == 'r'):
            calcular_area_retangulo()
        elif (digito == 'T' or digito == 't'):
            calcular_area_triangulo()
        elif (digito == 'Z' or digito == 'z'):
            calcular_area_trapezio()
        elif (digito == 'C' or digito == 'c'):
            calcular_area_circulo()
        else:
            print('OPÇÃO INVÁLIDA!')
            input('Pressione ENTER para continuar...')


def retornar_area(area):
    print('A área da figura informada é de {}'.format(area))


def calcular_area_quadrado():
    lados = float(input('Digite o tamanho dos lados do quadrado: '))
    area = lados ** 2

    retornar_area(area)


def calcular_area_retangulo():
    lado1 = float(input('Digite o tamanho do primeiro lado do retângulo: '))
    lado2 = float(input('Agora digite o tamanho do segundo lado: '))
    area = lado1 * lado2

    retornar_area(area)


def calcular_area_triangulo():
    base = float(input('Digite o tamanho da base do triângulo: '))
    altura = float(input('Digite a altura do triângulo: '))
    area = base * altura / 2

    retornar_area(area)


def calcular_area_trapezio():
    base_maior = float(input('Digite o tamanho da base maior: '))
    base_menor = float(input('Digite o tamanho da base menor: '))
    altura = float(input('Digite a altura do trapézio: '))
    area = (base_maior + base_menor) * altura / 2

    retornar_area(area)


def calcular_area_circulo():
    PI = 3.14
    raio = float(input('Digite o tamanho do raio do círculo: '))
    area = PI * raio**2

    retornar_area(area)


def menu():
    print('=' * 45, 'MENU', '=' * 45)
    print('''- Digite Q para analisar um quadrado
- Digite R para analisar um retângulo
- Digite T para analisar um triângulo
- Digite Z para analisar um trapézio
- Digite C para analisar um círculo\n
''')


main()
