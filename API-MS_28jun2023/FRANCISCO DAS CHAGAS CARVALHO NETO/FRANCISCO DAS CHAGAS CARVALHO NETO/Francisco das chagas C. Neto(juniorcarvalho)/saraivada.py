import random
def main():
    lista = []
    volume_chuva = 0
    numero_de_pedras = int(input("quantas pedras vc quer?"))
    while (numero_de_pedras>50 or numero_de_pedras<0):
        numero_de_pedras = int(input("quantas pedras vc quer?"))
    while numero_de_pedras > 0:
        numero_de_pedras -= 1
        volume_pedra = random.randint(1,50)
        volume_chuva += volume_pedra
        lista.append(volume_pedra)
    print(f"volume total da chuva:{volume_chuva/1000 :.2f} L")
    def minimos(l):
         contador = 0
         volume = 0
         for i in l:
            if i == 1:
                contador += 1
                volume += 1
         return print(f"quantidade de volumes minimos:{contador}\nvolume total minimos:{volume}\nporcentagem{(volume_chuva/volume)* 100}%")
    def maximos(l):
         contador = 0
         volume = 0
         for i in l:
              if i == 1:
                contador += 1
                volume += 50
         return print(f"quantidade de volumes maximos:{contador}\nvolume total maximos:{volume}\nporcentagem{(volume_chuva/volume)* 100}%")
    def valores_primos(l):
         primos = [2,3,5,7,11,13,17,19,23,29,31,37,39,41,43,47]
         novo_primos = []
         for i in l:
            for i in primos:
                novo_primos.append(i)
         return print(novo_primos)
    #def diferenca(l):
    #for i in range(len(l)):
    maximos(lista)
    minimos(lista)
    valores_primos(lista) 
      
    
main()

