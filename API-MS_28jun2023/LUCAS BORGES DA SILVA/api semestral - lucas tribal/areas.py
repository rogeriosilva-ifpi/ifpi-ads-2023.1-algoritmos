
def main():
    
    opcoes_validas = ['Q','q','R','r','T','t',]
    print (f"As figuras disponíveis são : Quadrado,Retângulo,Triângulo,Trapézio e círculo")

    primeira_figura = obter_texto("Digite a letra inicial de sua figura (Digite P para trapézio): ")

    while primeira_figura != 'Q' and primeira_figura != 'q' and primeira_figura !='R' and primeira_figura != 'r' and primeira_figura != 'T' and primeira_figura != 'P' and primeira_figura !='p' and primeira_figura != 'C' and primeira_figura != "C":
        print("Figura inválida! Digite uma letra válida!")
        primeira_figura = obter_texto("Digite a letra inicial de sua figura (Digite P para trapézio): ")

    segunda_figura = obter_texto("Digite a letra inicial de sua figura (Digite P para trapézio): ")

    while segunda_figura != 'Q' and segunda_figura != 'q' and segunda_figura !='R' and segunda_figura != 'r' and segunda_figura != 'T' and segunda_figura != 'P' and segunda_figura !='p' and segunda_figura != 'C' and segunda_figura != "C":
        print("Figura inválida! Digite uma letra válida!")
        primeira_figura = obter_texto("Digite a letra inicial de sua figura (Digite P para trapézio): ")


    while primeira_figura == segunda_figura: 
        print("As duas figuras não podem ser do mesmo tipo! Digite novamente !")
        primeira_figura = obter_texto("Digite a letra inicial de sua figura (Digite P para trapézio): ")
        segunda_figura = obter_texto("Digite a letra inicial de sua figura: Digite P para trapézio): ")


    area_figura_1 = calcular_area_1(primeira_figura)
    area_figura_2 = calcular_area_2(segunda_figura)

    tipo_figura_1 = verificar_tipo_figura_1(primeira_figura)
    tipo_figura_2 = verificar_tipo_figura_1(primeira_figura)
    percentual_entre_areas = proporcao_percentual_das_areas(area_figura_1,area_figura_2)

    print(f"A figura 1 é um {tipo_figura_1} e sua área é de {area_figura_1:.2f}")
    print(f"A figura 2 é um {tipo_figura_2} e sua área é de {area_figura_2:.2f}")

    if area_figura_1>area_figura_2:
        print(f"A maior área é a da figura 1")
    else:
        print(f"A maior área é a da figura 2")

    
    print(f"A proporção  percentual entre a área da menor figura sobre a área da maior é de {percentual_entre_areas:.2f} ")
     








        
def proporcao_percentual_das_areas(area_figura_1,area_figura_2):
    if area_figura_1>area_figura_2:
        percentual = (area_figura_2/area_figura_1)*100
    else:
        percentual = (area_figura_1/area_figura_2)*100
    return percentual
        


            
def calcular_area_1(primeira_figura):
        
        if primeira_figura == 'Q' or primeira_figura == 'q':
            figura = "Quadrado"
            lado_quadrado = obter_numero_positivo("Digite o valor do lado de seu quadrado: ")
            area1 = calcular_area_quadrado(lado_quadrado)

        elif primeira_figura == 'R' or primeira_figura == 'r':
            figura = "Retângulo"
            comprimento_retangulo =obter_numero_positivo("Digite o valor do comprimento de seu retângulo: ")
            largura_retangulo = obter_numero_positivo("Digite o valor da largura de seu retângulo: ")
            area1 = calcular_area_retangulo(comprimento_retangulo,largura_retangulo)

        elif primeira_figura == 'T' or primeira_figura == 't':
            figura = "Triângulo"
            base_triangulo = obter_numero_positivo("Digite a base do triângulo: ")
            altura = obter_numero_positivo("Digite a altura do triângulo")
            area1 = calcular_area_triangulo(base_triangulo,altura)

        elif primeira_figura == 'P' or primeira_figura == 'p':
            base_maior_trapézio = obter_numero_positivo("Digite a base maior do trapézio: ")
            base_menor_trapézio = obter_numero_positivo("Digite a base menor do trapézio: ")
            altura_trapezio = obter_numero_positivo("Digite a altura do triângulo: ") 
            area1 = calcular_area_trapezio(base_maior_trapézio,base_menor_trapézio,altura_trapezio)
            
        elif primeira_figura == 'C' or primeira_figura == 'c':
            pi = 3.14159
            raio = obter_numero_positivo("Digite o raio do círculo: ")
            area1 = calcular_area_circulo(pi,raio)
        return area1


def calcular_area_2(segunda_figura):
        
        if segunda_figura == 'Q' or segunda_figura == 'q':
            figura = "Quadrado"
            lado_quadrado = obter_numero_positivo("Digite o valor do lado de seu quadrado: ")
            area2 = calcular_area_quadrado(lado_quadrado)

        elif segunda_figura == 'R' or segunda_figura == 'r':
            figura = "Retângulo"
            comprimento_retangulo =obter_numero_positivo("Digite o valor do comprimento de seu retângulo: ")
            largura_retangulo = obter_numero_positivo("Digite o valor da largura de seu retângulo: ")
            area2 = calcular_area_retangulo(comprimento_retangulo,largura_retangulo)

        elif segunda_figura == 'T' or segunda_figura == 't':
            figura = "Triângulo"
            base_triangulo = obter_numero_positivo("Digite a base do triângulo: ")
            altura = obter_numero_positivo("Digite a altura do triângulo")
            area2 = calcular_area_triangulo(base_triangulo,altura)

        elif segunda_figura == 'P' or segunda_figura == 'p':
            base_maior_trapézio = obter_numero_positivo("Digite a base maior do trapézio: ")
            base_menor_trapézio = obter_numero_positivo("Digite a base menor do trapézio: ")
            altura_trapezio = obter_numero_positivo("Digite a altura do triângulo: ") 
            area2 = calcular_area_trapezio(base_maior_trapézio,base_menor_trapézio,altura_trapezio)
            
        elif segunda_figura == 'C' or segunda_figura == 'c':
            pi = 3.14159
            raio = obter_numero_positivo("Digite o raio do círculo: ")
            area2 = calcular_area_circulo(pi,raio)
        return area2

def verificar_tipo_figura_1(primeira_figura):
        if primeira_figura == 'Q' or primeira_figura == 'q':
            figura = "Quadrado"
            return figura
        elif primeira_figura == 'R' or primeira_figura == 'r':
            figura = "Retângulo"
            return figura
        elif primeira_figura == 'T' or primeira_figura == 't':
            figura = "Triângulo"
            return figura
        elif primeira_figura == 'P' or primeira_figura == 'p':
            figura = "Trapézio"
            return figura
        elif primeira_figura == 'C' or primeira_figura == 'c':
            figura = "Círculo"
            return figura
        

def verificar_tipo_figura_2(segunda_figura):
        if segunda_figura == 'Q' or segunda_figura == 'q':
            figura = "Quadrado"
            return figura
        elif segunda_figura == 'R' or segunda_figura == 'r':
            figura = "Retângulo"
            return figura
        elif segunda_figura == 'T' or segunda_figura == 't':
            figura = "Triângulo"
            return figura
        elif segunda_figura == 'P' or segunda_figura == 'p':
            figura = "Trapézio"
            return figura
        elif segunda_figura == 'C' or segunda_figura == 'c':
            figura = "Círculo"
            return figura

        

def calcular_area_circulo(pi,raio):
    area = pi*raio**2
    return area


def calcular_area_quadrado(lado_quadrado):
    area = lado_quadrado**2
    return area


def calcular_area_retangulo(comprimento_retangulo,largura_retangulo):
    area = comprimento_retangulo*largura_retangulo
    return area


def calcular_area_triangulo(base_triangulo,altura):
    area = (base_triangulo*altura)/2
    return area


def calcular_area_trapezio(base_maior_trapézio,base_menor_trapézio,altura_trapezio):
    area = ((base_maior_trapézio+base_menor_trapézio)*altura_trapezio)/2


def obter_numero_positivo (label = "Digite um número positivo: "):
    numero = input(label)
    while not numero.isnumeric() or numero == '' or numero<=0:
        print ("Valor inválido!")
        numero = input(label)
        return int(numero)


def obter_numero (label = "Digite um número: "):
    numero = input(label)
    while not numero.isnumeric() or numero == '':
        print ("Valor inválido!")
        numero = input(label)
        return int(numero)
    

def obter_texto(label = "Digite uma string: "):
    texto = input(label)
    return texto


def mostrar_texto(texto):
    print(texto)

main()