from auxiliar_functions import *


def main():
    # solicitar dados
    valor_hr = get_valid_value("valor da hora/aula na universidade: ")
    nome_professor = input("nome: ")
    qtd_hr_semanais = get_valid_value("quantidade de horas semanais: ")
    qualificacao = get_valid_qualification("sua formação profissional: ")
    qtd_filhos = get_valid_value("quantidade de filhos menores de 6 anos: ")
    valor_plano_saude = get_valid_value("valor do seu plano de saúde R$:")
    anos_experiencia = get_valid_value("quantidade de anos de experiencia: ")

    salario_base_mensal = calcular_salario_mensal(
        valor_hr, qtd_hr_semanais, qualificacao, anos_experiencia)
    
    auxilio_creche, valor_ressarcimento, valor_auxilio_combustivel = calcular_auxilios(qtd_filhos, valor_plano_saude, qtd_hr_semanais)
    
    inss = calcular_inss(salario_base_mensal)
    ir = calcular_ir(salario_base_mensal)
    
    salario_bruto = (auxilio_creche + valor_auxilio_combustivel + valor_ressarcimento)
    desconto_total = inss + ir
    salario_liquido = salario_bruto - desconto_total
    
    print(f"\nprofessor: {nome_professor}")
    print(f"valor da hora: {valor_hr:.2f}")
    print(f"salário base semanal sem auxilio: R$ {(salario_base_mensal / 4.5):.2f}")
    print(f"\nsalário base mensal sem auxilio: R$ {salario_base_mensal:.2f}")
    print(f"auxilio creche: R$ {auxilio_creche:.2f}")
    print(f"reassarcimento do plano de saúde: R$ {valor_ressarcimento:.2f}")
    print(f"auxílio combustível: R$ {valor_auxilio_combustivel:.2f}")
    print(f"salário bruto: R$ {salario_bruto:.2f}")
    print(f"desconto ir: R$ {ir:.2f}")
    print(f"desconto inss: R$ {inss:.2f}")
    print(f"desconto total: R$ {desconto_total}")
    print(f"salário líquido: R$ {salario_liquido:.2f}")


def calcular_salario_mensal(valor_hr, qtd_hrs, qualificacao, anos_experiencia):
    # calcular salario sem beneficios e descontos
    salario = valor_hr * qtd_hrs

    if qualificacao == "especilização":
        bonus_qualificacao = salario * 0.2

    elif qualificacao == "mestrado":
        bonus_qualificacao = salario * 0.3

    elif qualificacao == "doutorado":
        bonus_qualificacao = salario * 0.5

    # calcular anos de experiencia
    if anos_experiencia > 1:
        valor_experiencia = valor_hr * 0.5
        salario_base_mensal += valor_experiencia


    salario_base_mensal = (salario + bonus_qualificacao) * 4.5

    return salario_base_mensal


def calcular_inss(salario_base_mensal):
    # calcular previdencia social

    if salario_base_mensal <= 1320:
        inss = salario_base_mensal * (7.5 / 100)

    elif salario_base_mensal > 1320 and salario_base_mensal <= 2500:
        inss = salario_base_mensal * (9 / 100)

    elif salario_base_mensal > 2500 and salario_base_mensal <= 3900:
        inss = salario_base_mensal * (12 / 100)

    elif salario_base_mensal > 3900 and salario_base_mensal <= 7500:
        inss = salario_base_mensal * (14 / 100)

    elif salario_base_mensal > 7500:
        inss = salario_base_mensal * (16 / 100)

    return inss


def calcular_ir(salario_base_mensal):
    # calcular ir

    if salario_base_mensal <= 5000:
        ir = 0

    else:
        ir = salario_base_mensal * (27.5 / 100)

    return ir


def calcular_auxilios(qtd_filhos, valor_plano_saude, qtd_hr_semanais):
    qtd_aulas = qtd_hr_semanais * 4.5

    # calcular salario com bonus sem descontos
    auxilio_creche = qtd_filhos * 700

    # calcular quanto ressarcer do plano de saúde
    valor_ressarcimento = valor_plano_saude / 2

    if valor_plano_saude > 1000:
        valor_ressarcimento = 500
    
    # calcular valor do auxilio combustível
    import math

    valor_auxilio_combustivel = math.floor(qtd_aulas / 8) * 30

    return auxilio_creche, valor_ressarcimento, valor_auxilio_combustivel


main()




