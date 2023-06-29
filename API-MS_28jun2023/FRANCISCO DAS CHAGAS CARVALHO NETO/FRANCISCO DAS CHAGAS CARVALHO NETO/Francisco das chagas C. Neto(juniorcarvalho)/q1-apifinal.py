def main():
    lista = ["q","Q","T","Z","R","C","t","z","r","c"]
    def calcula_area(a):
        #area do circulo:

        if a == "c" or a == "C":
            raio = float(input("digite o valor do raio"))
            while raio <= 0:
                raio = float(input("digite o valor do raio"))
            area = raio*raio * 3.14159
            print(f"nome: Circulo, area: {area}")

        #area do quadrado:

        elif a == "q" or a == "Q":
            lado = float(input("digite o valor do lado"))
            while lado <= 0:
                lado = float(input("digite o valor do lado"))
            area = lado * lado
            print(f"nome: Quadrado, area: {area}")

        #area do retangulo:

        elif a == "R" or a == "r":
            comprimento = float(input("digite o valor do comprimento"))
            altura = float(input("digite a altura: "))
            while comprimento <= 0 and altura <= 0 :
                comprimento = float(input("digite o valor do comprimento"))
                altura = float(input("digite a altura: "))                
            area = comprimento * altura
            print(f"nome: Retangulo, area: {area}")
        #area do triangulo:

        elif a == "t" or a == "T":
           base = float(input("digite o valor da base"))
           altura = float(input("digite o valor da altura"))
           while base <= 0 or altura <= 0:
                base = float(input("digite o valor da base"))
                altura = float(input("digite o valor da altura"))
           area = (base * altura)/2
           print(f"nome: triangulo, area: {area}")
        
        #area do trapezio
        elif a == "z" or a == "Z":
           base_maior = float(input("digite o valor da base maior"))
           altura = float(input("digite o valor da altura"))
           base_menor = ("digite o valor da base menor")
           while (base_menor <= 0 or altura <= 0) or (base_maior <= 0):
            base_maior = float(input("digite o valor da base maior"))
            altura = float(input("digite o valor da altura"))
            base_menor = ("digite o valor da base menor")
           area = (base_maior + base_menor)*altura/2
           print(f"nome: trapezio, area: {area}")
        return area

    print("######### MENU #########")
    print("escolha duas opcoes abaixo")
    print("1.q/Q - quadrado\n2.R/r para retangulo\n3.T/t para triangulo\n4.z/Z para trapézio\n5.c/C para circulo")
    nome_figura1 = input("nome da figura 1: ")
    nome_figura2 = input("nome da figura 2: ")
    while (nome_figura1 == nome_figura2):
        nome_figura1 = input("nome da figura 1: ")
        nome_figura2 = input("nome da figura 2: ")

    figura1 = calcula_area(nome_figura1)
    figura2 = calcula_area(nome_figura2)
    if figura1 > figura2:
        print("figura 1 tem area maior")
        proporcao = figura2/figura1 * 100
        print(f"a figura 2 tem {proporcao:.2f} % da area da figura 1")
    elif figura1 < figura2:
        print("figura 2 tem area maior")
        print(f"a figura 1 tem {proporcao:.2f} % da area da figura 2")
    else:
        print("as duas tem mesma area")
    


main()