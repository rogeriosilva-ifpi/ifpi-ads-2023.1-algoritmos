def menu():       
    print('\n>>>> MENU <<<<')
    print('Escolha o tipo de figura')
    print('Q. Quadrado')
    print('R. Retângulo')
    print('T. Triângulo')
    print('Z. Trapézio')
    print('C. Círculo')


def obter_string(descricao):
    string = input(descricao)
    return string

def tipo_figura(figuras):
    
    if figuras == 'Q' or figuras == 'q':
        encontrado = 'Quadrado'
    if figuras == 'R' or figuras == 'r':
        encontrado = 'Retângulo'
    if figuras == 'T' or figuras == 't':
        encontrado = 'Triângulo'
    if figuras == 'Z' or figuras == 'z':
        encontrado = 'Trapézio'
    if figuras == 'C' or figuras == 'c':
        encontrado = 'Círculo'
    else:
        print('Informe uma figura válida conforme menu!')
        
    return encontrado


def calcular_area(figura):
    
    if figura == 'Q' or figura == 'q':
        lado = obter_numero_positivo('Informe o valor do lado da figura: ')
        area = lado ** 2
        return area
    elif figura == 'R' or figura == 'r':
        comprimento = obter_numero_positivo('Informe o comprimento da figura: ')
        largura = obter_numero_positivo('Informe a largura da figura: ')
        area = comprimento * largura
        return area
    elif figura == 'T' or figura == 't':
        base = obter_numero_positivo('Informe a base da figura: ')
        altura = obter_numero_positivo('Informe a altura da figura: ')
        area = (base * altura) / 2
        return area
    elif figura == 'Z' or figura == 'z':
        base_maior = obter_numero_positivo('Informe a base maior da figura: ')
        base_menor = obter_numero_positivo('Informe a base menor da figura: ')
        altura = obter_numero_positivo('Informe a altura da figura: ')
        area = ((base_maior + base_menor) * altura) / 2
        return area
    elif figura == 'C' or figura == 'c':
        pi = 3.14159
        raio = obter_numero_positivo('Informe o valor do raio: ')
        area = pi * (raio**2)
        return area
    
    return area

def maior_area(area_figura1, area_figura2):
    maior_area = area_figura1
    if area_figura2 > maior_area:
        maior_area = area_figura2
    else:
        maior_area = area_figura1

    return maior_area

def obter_numero_positivo(descricao):
    numero = float(input(descricao))
    while numero < 0:
        print('Informe um valor positivo: ')
        numero = float(input(descricao))
    return numero 