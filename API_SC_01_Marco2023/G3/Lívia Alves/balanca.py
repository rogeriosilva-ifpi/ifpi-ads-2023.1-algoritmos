def main():
    nome = input('Digite seu nome: ')
    sexo = input('Digite seu sexo (M -- para mulher)\n(H -- para homem): ')
    idade = input('Digite sua idade: ')
    peso = input('Digite seu peso: ')
    altura = input('Digite sua altura:  ')
    af = input('Digite seu Perfil de atividade Física \nS -- para sedentario\nPA -- pouco ativo\nA -- ativo\nMA -- muito ativio: ')
    
    af_valor = valor_af( sexo,af)

    af_homem = 662 - (9.53 * idade) + af_valor * (15.91 * peso) + (539,6 * altura)
    af_mulher = 354 - (6.91 * idade) + af_valor * (9.36 * peso) + (726 * altura)

    ingestao = calcular_ingestao_kcal(af_homem, af_mulher, valor_af)

    peso_atual = input('Deseja perder Peso?: ')
    peso_a_diminuir = input('Quantos kg?: ')
    dias = input('Em quantas semanas: ')

    peso_a_reduzir = calcular_redu_peso(peso_atual, peso_a_diminuir, dias)

    ganhar_a_peso = ganhar_peso(peso_atual, peso_a_diminuir, dias)

    print(ingestao)
    print(peso_a_reduzir)

def valor_af(sexo, valor):
    if sexo == 'H':
        if valor == 'S':
            return 1
        elif valor == 'PA':
            return 1.11
        elif valor == 'A':
            return 1.25
        elif valor  == 'MA':
            return 1.48
    if sexo == 'M':
        if valor == 'S':
            return 1
        elif valor == 'PA':
            return 1.12
        elif valor == 'A':
            return 1.27
        elif valor  == 'MA':
            return 1.45

def calcular_ingestao_kcal(valor, h, m):
    if valor == 1:
        return h  
    elif valor ==2:
        return m

def calcular_redu_peso(peso_atual, peso_a_diminuir, dias):
    return peso_atual - (peso_a_diminuir * 7700) / dias * 7

def ganhar_peso(peso_atual, peso_a_diminuir):
    return peso_atual + (peso_a_diminuir * 7700) / dias * 7



main()




