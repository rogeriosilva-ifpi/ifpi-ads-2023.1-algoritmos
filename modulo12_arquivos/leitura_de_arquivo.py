def main():
    # check modes ('a', 'r', etc)
    arquivo = open('arquivo.txt', 'r')

    linhas = arquivo.readlines()

    # clean lines
    linhas = map(str.strip, linhas)

    for linha in linhas:
        print(linha)

    arquivo.close()


main()
