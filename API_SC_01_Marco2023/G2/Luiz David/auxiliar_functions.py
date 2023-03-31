def get_number(text):
    n = float(input(text))

    if n.is_integer():
        return int(n)
    
    return n


def get_valid_value(text):
    n = get_number(text)

    if n < 0:
        print("digite um valor positivo")

    return n

def get_valid_qualification(text):
    formacao = input(text)

    if formacao != "especialização" and formacao != "mestrado" and formacao != "doutorado":
        print("opções válidas: especialização, mestrado ou doutorado")

        formacao = get_valid_qualification(text)

    return formacao