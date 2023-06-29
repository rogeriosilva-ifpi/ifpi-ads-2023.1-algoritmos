import math

 def calcular_area_quadrado(lado):
    return lado ** 2

def calcular_area_retangulo(base, altura):
    return base * altura

def calcular_area_triangulo(base, altura):
    return (base * altura) / 2

 def calcular_area_trapezio(base_menor, base_maior, altura):
    return ((base_menor + base_maior) * altura) / 2

def calcular_area_circulo(raio):
    return math.pi * (raio ** 2)

def obter_figura():
    figura = input("Digite a figura (Q - Quadrado, R - Retângulo, T - Triângulo, P - Trapézio, C - Círculo): ").upper()
    while figura not in ['Q', 'R', 'T', 'P', 'C']:
        figura = input("Figura inválida. Digite novamente: ").upper()
    return figura

def obter_medidas(figura):
    if figura == 'Q':
        lado = float(input("Digite o lado do quadrado: "))
        while lado <= 0:
            lado = float(input("Valor inválido. Digite novamente o lado do quadrado: "))
        return lado
    elif figura == 'R':
        base = float(input("Digite a base do retângulo: "))
        altura = float(input("Digite a altura do retângulo: "))
        while base <= 0 or altura <= 0:
            base = float(input("Valores inválidos. Digite novamente a base do retângulo: "))
            altura = float(input("Valores inválidos. Digite novamente a altura do retângulo: "))
        return base, altura
    elif figura == 'T':
        base = float(input("Digite a base do triângulo: "))
        altura = float(input("Digite a altura do triângulo: "))
        while base <= 0 or altura <= 0:
            base = float(input("Valores inválidos. Digite novamente a base do triângulo: "))
            altura = float(input("Valores inválidos. Digite novamente a altura do triângulo: "))
        return base, altura
    elif figura == 'P':
        base_menor = float(input("Digite a base menor do trapézio: "))
        base_maior = float(input("Digite a base maior do trapézio: "))
        altura = float(input("Digite a altura do trapézio: "))
        while base_menor <= 0 or base_maior <= 0 or altura <= 0:
            base_menor = float(input("Valores inválidos. Digite novamente a base menor do trapézio: "))
            base_maior = float(input("Valores inválidos. Digite novamente a base maior do trapézio: "))
            altura = float(input("Valores inválidos. Digite novamente a altura do trapézio: "))
        return base_menor, base_maior, altura
    elif figura == 'C':
        raio = float(input("Digite o raio do círculo: "))
        while raio <= 0:
            raio = float(input("Valor inválido. Digite novamente o raio do círculo: "))
        return raio

def calcular_proporcao(area1, area2):
    proporcao = min(area1, area2) / max(area1, area2)


def  main():

    main()


