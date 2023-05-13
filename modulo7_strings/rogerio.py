def main():
    texto = input('Texto: ')

    # caracter = input('Buscar por (Não): ')
    # resultado = nao_contem(texto, caracter)
    # resultado = contem(texto, caracter)
    # mensagem = 'SIM' if resultado else "NÃO"
    # print(f'O texto contém "{caracter}"? {mensagem}')

    # caracter = obter_texto_tamanho_exato('Caractere: ', 1)
    # quantidade = contar_caractere(texto, caracter)
    # print(f'No texto temos {quantidade} ocorrência de "{caracter}"')

    alvo = obter_texto_tamanho_exato('Caracter a substituir: ', 1)
    subtituto = obter_texto_tamanho_exato('Caracter substituto: ', 2)

    novo_texto = subtituir_caractere(texto, alvo, subtituto)
    print(novo_texto)


def subtituir_caractere(texto, alvo, subtituto):
    novo_texto = ''

    for caracter in texto:
        if caracter == alvo:
            # novo_texto += subtituto
            novo_texto = novo_texto + subtituto
        else:
            novo_texto += caracter

    return novo_texto


def obter_texto_tamanho_exato(label, tamanho):
    entrada = input(label)
    if len(entrada) != tamanho:
        print('Tamanho inválido!')
        return obter_texto_tamanho_exato(label, tamanho)

    return entrada


def contar_caractere(texto, caracter):
    contador = 0
    for item in texto:
        if item == caracter:
            contador += 1

    return contador


def contem(texto, caracter):
    for item in texto:
        if item == caracter:
            return True

    return False


def nao_contem(texto, caracter):
    return not contem(texto, caracter)


main()
