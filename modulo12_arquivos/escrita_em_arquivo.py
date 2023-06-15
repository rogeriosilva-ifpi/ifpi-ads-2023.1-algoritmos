def main():
    arquivo = open('arquivo.txt', 'w')  # check modes ('a', 'r', etc)

    for i in range(10):
        arquivo.write(f'Linha {i}: Escrita em Python\n')

    arquivo.close()


main()
