import math

def main():

    def calcular_area_quadrado():
        lado = float(input("Digite o valor do lado do quadrado: "))
        area = lado ** 2
        return area

    def calcular_area_retangulo():
        base = float(input("Digite o valor da base do retângulo: "))
        altura = float(input("Digite o valor da altura do retângulo: "))
        area = base * altura
        return area

    def calcular_area_triangulo():
        base = float(input("Digite o valor da base do triângulo: "))
        altura = float(input("Digite o valor da altura do triângulo: "))
        area = (base * altura) / 2
        return area

    def calcular_area_trapezio():
        base_maior = float(input("Digite o valor da base maior do trapézio: "))
        base_menor = float(input("Digite o valor da base menor do trapézio: "))
        altura = float(input("Digite o valor da altura do trapézio: "))
        area = ((base_maior + base_menor) * altura) / 2
        return area

    def calcular_area_circulo():
        raio = float(input("Digite o valor do raio do círculo: "))
        area = math.pi * raio ** 2
        return area

    def validar_opcao(opcao):
        opcoes_validas = ["Q", "B", "I", "T", "C"]
        return opcao.upper() in opcoes_validas

    def cadastrar_figura():
        figura = ""
        while not validar_opcao(figura):
            figura = input("Digite a opção da figura (Q - Quadrado, B - Retângulo, I - Triângulo, T - Trapézio, C - Círculo): ")
            if not validar_opcao(figura):
                print("Opção inválida. Tente novamente.")

        if figura.upper() == "Q":
            area = calcular_area_quadrado()
            nome_figura = "Quadrado"
        elif figura.upper() == "B":
            area = calcular_area_retangulo()
            nome_figura = "Retângulo"
        elif figura.upper() == "I":
            area = calcular_area_triangulo()
            nome_figura = "Triângulo"
        elif figura.upper() == "T":
            area = calcular_area_trapezio()
            nome_figura = "Trapézio"
        elif figura.upper() == "C":
            area = calcular_area_circulo()
            nome_figura = "Círculo"

        return nome_figura, area

    def exibir_resultado(figura1, area1, figura2, area2):
        print("Figura 1: {} - Área: {:.2f}".format(figura1, area1))
        print("Figura 2: {} - Área: {:.2f}".format(figura2, area2))

        if area1 > area2:
            proporcao = (area2 / area1) * 100
            print("A {} tem {:.2f}% da área da {}".format(figura2, proporcao, figura1))
        elif area2 > area1:
            proporcao = (area1 / area2) * 100
            print("A {} tem {:.2f}% da área da {}".format(figura1, proporcao, figura2))

main()


