def menu():
    print("====== AREAS =======")
    print("Q/q - AREA QUADRADO")
    print("R/r - AREA RETANNGULO")
    print("T/t - AREA TRIANGULO")
    print("Z/z - AREA TRAPEZIO")
    print("C/c - AREA CIRCULO")

def press_enter_to_continue():
    print("Press enter to continue")
    input("Enter")

def area_quadrado():
    lado = int(input("Difite o valor do lado do quadrado: "))
    area_quadrado = lado * lado
    print("---------------------------------------------------")
    print(f"O valor da area do quadrado e: {area_quadrado}u.a|")
    print("---------------------------------------------------")
    return area_quadrado

def area_retangulo():
    lado_retangulo = int(input("Digte o valor do lado do retangulo: "))
    altura_retangulo = int(input("Digite o valor da altura do retangulo"))
    area_do_retangulo = lado_retangulo * altura_retangulo
    print("----------------------")
    print(f"O valor da area do retangulo e: {area_do_retangulo}u.a|")
    print("----------------------")
    return area_do_retangulo

def area_triangulo():
    base_triangulo = int(input("Digite o valor da base do triangulo: "))
    altura_triangulo = int(input("Digite o valor da altura do triangulo: "))
    area_do_triangulo = (base_triangulo * altura_triangulo)/2
    print("----------------------")
    print(f"O valor da area do triangulo e: {area_do_triangulo}u.a|")
    print("----------------------")
    return area_do_triangulo


def area_trapezio():
    base_maior = int(input("Digite a base maior do trapezio: "))
    base_menor = int(input("Digite a base menor do trapezio: "))
    altura_trapezio = int(input("Digite o valor da altura do trapezio: "))
    area_do_trapezio = ((base_maior + base_menor) * altura_trapezio) * 0.5
    print("----------------------")
    print(f"O valor da area do trapezio e: {area_do_trapezio}u.a|")
    print("----------------------")
    return area_do_trapezio

def area_circulo():
    raio = int(input("Digite o valor do raio do circulo: "))
    area_do_circulo = (3.14) * (raio**2)
    print("--------------------------------------")
    print(f"O valor da area do circulo e: {area_do_circulo}u.a|")
    print("--------------------------------------")
    return area_do_circulo

