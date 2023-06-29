def main():
    print(''' ------- Opções: -------
Q ou q - Área do Quadrado
R ou r - Área do Retângulo
T ou t - Área do Triângulo
Ta ou ta - Área do Trapézio
C ou c - Área do Círculo
        ''')
    a = input("Informe a primeira a primeira letra do da figura geometrica:")
    b = input("Informe a primeira a primeira letra do da figura geometrica:")
    if (a == b):
        print("Digite duas figuras diferentes!")

    area_quadrado(a,b)
    area_retangulo(a,b)
    area_triangulo(a,b)
    area_trapezio(a,b)
    area_circulo(a,b)

def area_quadrado(a,b):
    if (a == 'Q') or (a == 'q'):
        lado = int(input("Informe o valor do lado do quadrado:"))
        area_qua = (lado * lado)
        print("O valor da area do quadrado de lado {} é {}".format(lado, area_qua))
    if (b == 'Q') or (b == 'q'):
        lado1 = int(input("Informe o valor do lado do quadrado:"))
        area_qua1 = (lado1 * lado1)
        print("O valor da area do quadrado de lado {} é {}".format(lado1, area_qua1))


def area_retangulo(a, b):
    if (a == 'R') or (a == 'r'):
        com = int(input("Informe o valor do comprimento do retângulo:"))
        lar = int(input("Informe o valor da largura do retângulo:"))
        area_ret = (com * lar)
        print("O valor da area do retangulo de comprimento {} e largura {} é {}".format(com, lar, area_ret))
    if (b == 'R') or (b == 'r'):
        com1 = int(input("Informe o valor do comprimento do retângulo:"))
        lar1 = int(input("Informe o valor da largura do retângulo:"))
        area_ret1 = (com1 * lar1)
        print("O valor da area do retangulo de comprimento {} e largura {} é {}".format(com1, lar1, area_ret1))

def area_triangulo(a, b):
    if (a == 'T') or (a == 't'):
        base = int(input("Informe o valor da base do triângulo:"))
        alt = int(input("Informe o valor da altura do triângulo:"))
        area_tri = ((base * alt)/2)
        print("O valor da area do triangulo de base {} e altura {} é {}".format(base, alt, area_tri))
    if (b == 'T') or (b == 't'):
        base1 = int(input("Informe o valor da base do triângulo:"))
        alt1 = int(input("Informe o valor da altura do triângulo:"))
        area_tri1 = ((base1 * alt1)/2)
        print("O valor da area do triangulo de base {} e altura {} é {}".format(base1, alt1, area_tri1))


def area_trapezio(a, b):
    if (a == 'Ta') or (a =='ta'):
        base_maior = int(input("Digite o valor da base maior:"))
        base_menor = int(input("Digite o valor da base menor:"))
        altura = int(input("Digite a altura:"))
        area_tra = (((base_maior + base_menor) * altura)/ 2)
        print(" O valor da area do trapezio de base {} e base {} e altura {} é {}".format(base_maior, base_menor, altura, area_tra))
    if (b == 'Ta') or (b =='ta'):
        base_maior1 = int(input("Digite o valor da base maior:"))
        base_menor1= int(input("Digite o valor da base menor:"))
        altura1 = int(input("Digite a altura:"))
        area_tra1 = (((base_maior1 + base_menor1) * altura1)/ 2)
        print(" O valor da area do trapezio de base {} e base {}  altura {} é {}".format(base_maior1, base_menor1, altura1, area_tra1))
    if (b == 'Ta') or (b == 'ta') and (a == 'Ta') or (a== 'ta'):
        print("Escolha duas figuras diferentes")

def area_circulo(a, b):
    if (a== 'C') or (a == 'c'):
        raio = int(input("Digite o raio:"))
        area_cir = (3.14159 * (raio * raio))
        print("A area do circulo de raio {} é de {}".format(raio, area_cir))
    if (b == 'C') or (b == 'c'):
        raio1 = int(input("Digite o raio:"))
        area_cir1 = (3.14159 * (raio1 * raio1))
        print("A area do circulo de raio {} é de {}".format(raio1, area_cir1))

main()
