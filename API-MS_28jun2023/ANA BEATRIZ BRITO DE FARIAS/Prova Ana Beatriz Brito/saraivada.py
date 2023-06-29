import random
def main():
    pedra = int(input("Quantas pedras você quer na chuva: (de 1 a 50):"))
    vetor = []
    pedras(pedra, vetor)

def pedras(pedra, vetor):

    for i in range(pedra):
        s = random.randint(1,50)
        vetor.append(s)
        print("O volume de cada pedra em L é:", (s * 1000))
    print("O volume de cada pedra em ml é:", vetor)


main()






