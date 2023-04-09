from random import *
#francisco das chagas carvalho neto
    #entradas com variaveis de nome especifico
valor_base   = float(input("digite o valor base da hora aula: "))
nome         = str(input("digite o nome do professor"))
hora_semanal = float(input("digite a quantidade de horas semanais"))
qualificacao = str(input("digite a qualificação: E para especialização,M para mestrado, D para doutorado").upper())
experiencia  = float(input("digite aqui o tempo de experiencia docente em meses"))
qtd_filhos   = float(input("quantidade de filhos menores de 6 anos:"))
plano_saude  = float(input("valor do plano de saude"))
    #verificando a qualificação e respectiva bonificação
if (qualificacao == "E"):
    valor_qualificado = valor_base * 1.2
elif (qualificacao == "M"):
    valor_qualificado = valor_base * 1.3
elif(qualificacao == "D"):
    valor_qualificado = valor_base * 1.5
else:
    print("erro!")
    #PLANO DE SAUDE
if plano_saude <= 500:
    ressarcimento = plano_saude / 2
else:
    ressarcimento = 500 
    
    #Auxilio combustivel
combustivel = hora_semanal // 8
combustivel1 = combustivel * 30
auxilio_creche = qtd_filhos * 700
valor_semanal  = 7 * (valor_qualificado * 1.005)
valor_mensal   = 4.5 * valor_semanal   # valor base mensal
    #PREVIDENCIA SOCIAL
if valor_mensal <= 1302:
    valor_previdencia = valor_mensal * 0.075
elif valor_mensal > 1302 and valor_mensal<=2500:
    valor_previdencia = valor_mensal * 0.09
elif valor_mensal>2500 and valor_mensal <= 3900:
    valor_previdencia = valor_mensal * 0.12
elif valor_mensal>3900 and valor_mensal<= 7500:
    valor_previdencia = valor_mensal * 0.14
elif valor_mensal>7500
    valor_previdencia = valor_mensal * 0.16
    #IMPOSTO DE RENDA
ir = valor_mensal - valor_previdencia
if valor_mensal <= 5000:
    desconto_ir = 0
else:
    desconto_ir = 0.275 * (ir - 5000)    
salario_bruto = valor_mensal + auxilio_creche + ressarcimento + combustivel1
descontos = valor_previdencia + desconto_ir
salario = valor_mensal + auxilio_creche + ressarcimento + combustivel1 - valor_previdencia - desconto_ir
#saidas
print(f"valor hora/professor: {hora_semanal}")
print(f"salario base semanal: {valor_semanal}")
print("###### Ganhos #######")
print(f"salario base mensal: {valor_mensal}")
print(f"auxilio creche: {auxilio_creche}")
print(f"ressarcimento saúde:{ressarcimento}")
print(f"auxilio combustivel:{combustivel1}")
print(f"salario bruto:{salario_bruto}")    
print(f"###### DESCONTOS ######")
print(f"Previdencia:{valor_previdencia}")
print(f"IR: {desconto_ir}")
print(f"total descontos: {descontos}")
print(f"salario liquido R${salario}")


