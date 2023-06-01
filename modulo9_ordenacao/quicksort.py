import math
from random import random as aleatorio


def main():
    colecao = [8, 1, 10, 5, 3, 6]
    # colecao = ['Mari', 'Ana', 'Pedrinhu',
    #            'Rogerio', 'Zenóbian', 'Ana Letíciab']

    print(colecao)

    # Coleção de Números
    colecao_ordenada = quicksort(colecao)
    # colecao_ordenada = quicksort(colecao, reverse=True)

    # Colecao de Nomes
    # colecao_ordenada = quicksort(colecao, chave=len)
    # colecao_ordenada = quicksort(colecao, chave=len, reverse=True)
    # colecao_ordenada = quicksort(colecao, chave=ultima_letra)

    print(colecao_ordenada)


def ultima_letra(nome):
    return nome[len(nome) - 1]


def quicksort(vetor, chave=lambda x: x, reverse=False):

    if len(vetor) <= 1:
        return vetor

    random_index = math.floor(aleatorio() * len(vetor))
    pivot = vetor[random_index]
    # sorry: using method (implemente remover_item_colecao(colecao, item))
    vetor.remove(pivot)

    if reverse:
        left = filtro_colecao(vetor, lambda x: chave(x) > chave(pivot))
        right = filtro_colecao(vetor, lambda x: chave(x) <= chave(pivot))
    else:
        left = filtro_colecao(vetor, lambda x: chave(x) <= chave(pivot))
        right = filtro_colecao(vetor, lambda x: chave(x) > chave(pivot))

    return quicksort(left, chave, reverse) + [pivot] + quicksort(right, chave, reverse)


# utils
def filtro_colecao(colecao, funcao_criterio):
    colecao_filtrada = []

    for item in colecao:
        if funcao_criterio(item):
            colecao_filtrada.append(item)

    return colecao_filtrada


def mapear_colecao(colecao, funcao_mapeadora):
    nova_colecao = []

    for item in colecao:
        nova_colecao.append(funcao_mapeadora(item))

    return nova_colecao


main()
