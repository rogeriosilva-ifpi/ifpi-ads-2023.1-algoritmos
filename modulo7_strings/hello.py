def main():
    frase = 'Feliz dia das maes!'

    caractere = frase[8]

    print(frase)
    print(f'Posição 8 temos -> {caractere}')

    # imutável
    try:
        frase[8] = 'o'
    except TypeError:
        print(';)')

    # mostrar_caracteres(frase)
    # mostrar_caracteres_pos(frase)
    # mostrar_caracteres_pos_pares(frase)
    # mostrar_caracteres_pos_impares(frase)
    # frase_inversa = inverter_frase(frase)
    # print(frase_inversa)
    frase_up = uppercase_frase(frase)
    print(frase_up)
    frase_lol = lolercase_frase(frase_up)
    print(frase_lol)

    frase_inversa = inverter_frase_v2(frase)
    print(frase_inversa)


def mostrar_caracteres(frase):
    print('Mostrar caracteres:')
    for caractere in frase:
        print(caractere)


def mostrar_caracteres_pos(frase):
    index = 0
    tamanho = len(frase)

    while index < tamanho:
        caractere = frase[index]
        print(f'{index} -> {caractere}')

        index += 1


def mostrar_caracteres_pos_pares(frase):
    for i in range(len(frase)):
        if eh_par(i):
            print(f'{i} -> {frase[i]}')


def mostrar_caracteres_pos_impares(frase):
    for i in range(len(frase)):
        if eh_impar(i):
            print(f'{i} -> {frase[i]}')


def inverter_frase(frase):
    nova_frase = ''
    for i in range(len(frase)):
        nova_frase = nova_frase + frase[len(frase) - 1 - i]

    return nova_frase


def inverter_frase_v2(frase):
    nova_frase = ''
    for caractere in frase:
        nova_frase = caractere + nova_frase

    return nova_frase


def eh_par(numero: int):
    return numero % 2 == 0


def eh_impar(numero: int):
    return not eh_par(numero)


def uppercase_frase(frase):
    frase_up = ''
    for caractere in frase:
        frase_up += uppercase_caractere(caractere)

    return frase_up


def lolercase_frase(frase):
    frase_lol = ''
    for caractere in frase:
        frase_lol += lowercase(caractere)

    return frase_lol


def uppercase_caractere(caractere):
    # fail fast
    if not eh_letra(caractere) or eh_letra_maiuscula(caractere):
        return caractere

    codigo = ord(caractere)
    novo_codigo = codigo - 32
    novo_caractere = chr(novo_codigo)
    return novo_caractere


def lowercase(caractere):
    if not eh_letra(caractere) or eh_letra_minuscula(caractere):
        return caractere

    codigo = ord(caractere)
    novo_codigo = codigo + 32
    novo_caractere = chr(novo_codigo)
    return novo_caractere


def eh_letra(caractere):
    return eh_letra_maiuscula(caractere) or eh_letra_minuscula(caractere)


def eh_letra_maiuscula(caractere):
    codigo = ord(caractere)
    return codigo >= 65 and codigo <= 90


def eh_letra_minuscula(caractere):
    codigo = ord(caractere)
    return codigo >= 97 and codigo <= 122


main()
