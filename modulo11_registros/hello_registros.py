import random


def main():
    bilhetes = []
    next_id = len(bilhetes) + 1

    bilhete1 = gerar_bilhete(next_id, '002', 'ROGERIO SILVA', '01/07/1984')
    next_id += 1

    bilhete2 = gerar_bilhete(next_id, '002', 'ROGERIO SILVA', '01/07/1984')
    next_id += 1

    bilhete3 = gerar_bilhete(next_id, '002', 'ROGERIO SILVA', '01/07/1984')
    next_id += 1

    bilhetes.append(bilhete1)
    bilhetes.append(bilhete2)
    bilhetes.append(bilhete3)

    for bilhete in bilhetes:
        show_bilhete(bilhete)
        print(30*'-')


def show_bilhete(bilhete):
    print(f'Bilhete #{bilhete["id"]}')
    print('APOSTADOR: ')
    print(f'> Nome: {bilhete["apostador"]["nome"]}')
    print('DEZENAS: ', end='')
    for dezena in bilhete['dezenas']:
        print(f'{dezena}, ', end='')
    print()


def gerar_bilhete(id, cpf, nome, dt_nasc):
    bilhete = {}  # dict() << REGISTRO
    bilhete['id'] = id
    bilhete['apostador'] = {'cpf': cpf, 'nome': nome, 'dt_nascimento': dt_nasc}
    bilhete['dezenas'] = gerar_dezenas()
    bilhete['premiado'] = False
    bilhete['acertos'] = 0

    return bilhete


def gerar_dezenas():
    dezenas = []

    while len(dezenas) < 6:
        numero = random.randrange(1, 60)
        if numero not in dezenas:
            dezenas.append(numero)

    return dezenas


main()
