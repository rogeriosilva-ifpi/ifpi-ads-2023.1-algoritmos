def main():
    n = int(input("Digite o valor de n: "))
    for i in range(n):
        texto = obter_texto("Digite o nome da próxima variável ")
        resultado_em_camel_case = converter_de_snake_para_kamel(texto)
        print(resultado_em_camel_case)





    
def meu_uppercase(letra):
    if "a" <= letra <= "z":
        return chr(ord(letra)- ord("a")+ord("A"))
    return letra
    
    

def converter_de_snake_para_kamel(texto):
    palavras = texto.split('_')
    palavra_convertida = palavras[0]
    for palavra in  palavras[1:]:
        palavra_convertida = palavra_convertida + meu_uppercase(palavra[0]) + palavra[1:]
    return palavra_convertida





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