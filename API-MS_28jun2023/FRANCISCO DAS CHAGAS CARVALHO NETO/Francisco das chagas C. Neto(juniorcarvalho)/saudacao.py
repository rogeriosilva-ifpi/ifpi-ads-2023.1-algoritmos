import random
def main():
    arquivo = open("alegria.txt","r")
    a = random.randint(1,500)
    nome = input("Qual seu nome?")
    saudacao = arquivo.readilines(a)
    print(f"Olá {nome}, {saudacao}")
    n = int(input("digite um numero,0-para sair"))
    while n > 0:
        saudacao = arquivo.readilines(a)
        print(f"Olá {nome}, {saudacao}")
        n = int(input("digite um numero,0-para sair"))
  