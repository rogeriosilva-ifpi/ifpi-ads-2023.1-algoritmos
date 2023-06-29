
def cadastrar_produto():
    print(" -------- Digite o produto que quer cadastrar(nome, id e valor): ----------")
    id = int(input("ID:"))
    nome = input("Nome:")
    valor = float(input("Valor:"))
    vetor = [id, nome, valor]
    print(vetor)


def mostrar_cardapio():
    print(''' --------------- Cardápio ------------------
      1 - Café > Preço: 3,50 reais
      2 - Bolo > Preço: 8,00 reais
      3 - Chá  > Preço: 2,00 reais''')
    op = input("Digite a opção desejada:")
    if (op == 1):
        ("O valor a pagar é 3,50 reais")
    if (op == 2):
        ("O valor a pargar é 8,00 reais")
    if (op == 3):
        ("O valor a pagar é 2,00 reais")











