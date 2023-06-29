def main():
    numero_variaveis = int(input("digite o numero de variaveis:"))

    def paracamelcase(s):
        return print("".join(x.capitalize() for x in s.lower().split("_")))

    def casopequeno(p):
        camel_string = paracamelcase(p)
        return print(p[0].lower() + camel_string[1:])

    while numero_variaveis > 0:
        numero_variaveis -= 1
        string = input()
        casopequeno(string)
        paracamelcase(string)


main()
