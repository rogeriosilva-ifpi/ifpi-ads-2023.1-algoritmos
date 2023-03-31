def main():
  nome = input('Nome: ')
  sexo = input('Sexo: ')
  idade = int(input('Idade: '))
  peso = float(input('Peso: '))
  altura = float(input('Altura: '))
  perfil_atv_fisica = input('Perfil de atividade física: ')

  necessidade_cal_masculina = calcular_necessidade_calorica_masculina(perfil_atv_fisica, idade, peso, altura)
  necessidade_cal_feminina = calcular_necessidade_calorica_feminina(perfil_atv_fisica, idade, peso, altura)
  

  if sexo == 'h':
    print(f'Necessidade calórica diária: {necessidade_cal_masculina} Kcal')
    perder_ou_ganhar_peso = input('Ganhar ou perder peso: ')
    if perder_ou_ganhar_peso == 'perder':
      novo_peso = float(input('Novo peso: '))
      semanas = int(input('Em quantas semanas: '))
      peso_semanal = calcula_ganha_perda_peso_semanal(peso,novo_peso, semanas)

      print(f'Você deve consumir a menos semanalmente: {peso_semanal} Kcal')

    if perder_ou_ganhar_peso == 'ganhar':
      novo_peso = float(input('Novo peso: '))
      semanas = int(input('Em quantas semanas: '))
      peso_semanal = calcula_ganha_perda_peso_semanal(perder_ou_ganhar_peso, peso, novo_peso, semanas)
      print(f'Você deve ganhar a mais semanalmente: {peso_semanal} Kcal')

      print(f'Você deve consumir a menos semanalmente: {peso_semanal} Kcal')

    
    if perder_ou_ganhar_peso == 'perder':
      novo_peso = float(input('Novo peso: '))
      semanas = int(input('Em quantas semanas: '))
      peso_semanal = calcula_ganha_perda_peso_semanal(perder_ou_ganhar_peso, peso, novo_peso, semanas)
      print(f'Você deve ganhar a mais semanalmente: {peso_semanal} Kcal')

      print(f'Você deve consumir a menos semanalmente: {peso_semanal} Kcal')

      peso_final_em_gramas = (((peso * 7700)/7700)) + (peso_semanal / 7700) * 1000 

      peso_final_em_gramas = (((peso * 7700)/7700)) + (peso_semanal / 7700) * 1000 

      valor_proteina_g = peso_final_em_gramas / 4
      valor_carboidrato_g = peso_final_em_gramas / 4
      valor_gordura_g = peso_final_em_gramas / 9

      valor_proteina = valor_proteina_g * (0.4)
      valor_carboidrato = valor_carboidrato_g * (0.4)
      valor_gordura = valor_gordura_g * (0.2)

      print('Nova dieta')

      print(f'Valor de ingestão de proteína: {valor_proteina} g')
      print(f'Valor de ingestão de carboidrato: {valor_carboidrato} g')
      print(f'Valor de ingestão de gordura: {valor_gordura} g')

  if sexo == 'f':
    print(f'Necessidade calórica diária: {necessidade_cal_feminina} Kcal')
    perder_ou_ganhar_peso = input('Ganhar ou perder peso: ')
    if perder_ou_ganhar_peso == 'perder':
      novo_peso = float(input('Novo peso: '))
      semanas = int(input('Em quantas semanas: '))
      peso_semanal = calcula_ganha_perda_peso_semanal(peso,novo_peso, semanas)

      print(f'Você deve consumir a menos semanalmente: {peso_semanal} Kcal')
      
      peso_final_em_gramas = (((peso * 7700)/7700)) + (peso_semanal / 7700) * 1000 

      peso_final_em_gramas = (((peso * 7700)/7700)) + (peso_semanal / 7700) * 1000 

      valor_proteina_g = peso_final_em_gramas / 4
      valor_carboidrato_g = peso_final_em_gramas / 4
      valor_gordura_g = peso_final_em_gramas / 9

      valor_proteina = valor_proteina_g * (0.4)
      valor_carboidrato = valor_carboidrato_g * (0.4)
      valor_gordura = valor_gordura_g * (0.2)

      print('Nova dieta')

      print(f'Valor de ingestão de proteína: {valor_proteina} g')
      print(f'Valor de ingestão de carboidrato: {valor_carboidrato} g')
      print(f'Valor de ingestão de gordura: {valor_gordura} g')



    if perder_ou_ganhar_peso == 'ganhar':
      novo_peso = float(input('Novo peso: '))
      semanas = int(input('Em quantas semanas: '))
      peso_semanal = calcula_ganha_perda_peso_semanal(peso,novo_peso, semanas)

      print(f'Você deve ganhar a mais semanalmente: {peso_semanal} Kcal')
      peso_final_em_gramas = (((peso * 7700)/7700)) + (peso_semanal / 7700) * 1000 

      valor_proteina_g = peso_final_em_gramas / 4
      valor_carboidrato_g = peso_final_em_gramas / 4
      valor_gordura_g = peso_final_em_gramas / 9

      valor_proteina = valor_proteina_g * (0.4)
      valor_carboidrato = valor_carboidrato_g * (0.4)
      valor_gordura = valor_gordura_g * (0.2)

      print('Nova dieta')

      print(f'Valor de ingestão de proteína: {valor_proteina} g')
      print(f'Valor de ingestão de carboidrato: {valor_carboidrato} g')
      print(f'Valor de ingestão de gordura: {valor_gordura} g')


def calcular_necessidade_calorica_masculina(perfil, idade, peso, altura):
  if perfil == 'sedentario':
    necessidade_calorica = 662 - (9.53 - idade) + 1 * (15.91 * peso) + (539.6 * altura)
  if perfil == 'pouco ativo':
    necessidade_calorica = 662 - (9.53 - idade) + 1.11 * (15.91 * peso) + (539.6 * altura)
  if perfil == 'ativo':
    necessidade_calorica = 662 - (9.53 - idade) + 1.25 * (15.91 * peso) + (539.6 * altura)
  if perfil == 'muito ativo':
    necessidade_calorica = 662 - (9.53 - idade) + 1.48 * (15.91 * peso) + (539.6 * altura)

  return necessidade_calorica

def calcular_necessidade_calorica_feminina(perfil, idade, peso, altura):
  if perfil == 'sedentario':
    necessidade_calorica = 354 - (6.91 - idade) + 1 * (9.36 * peso) + (726 * altura)
  if perfil == 'pouco ativo':
    necessidade_calorica = 354 - (6.91 - idade) + 1.12 * (9.36 * peso) + (726 * altura)
  if perfil == 'ativo':
    necessidade_calorica = 354 - (6.91 - idade) + 1.27 * (9.36 * peso) + (726 * altura)
  if perfil == 'muito ativo':
    necessidade_calorica = 354 - (6.91 - idade) + 1.45 * (9.36 * peso) + (726 * altura)
  
  return necessidade_calorica

def calcula_ganha_perda_peso_semanal(opcao, peso, novo_peso, qtd_semanas):
  if opcao == 'perder':
    valor_kcal = (peso * 7700) - (novo_peso * 7700)
  if opcao == 'ganhar':
    valor_kcal = (peso * 7700) + (novo_peso * 7700)
  
  valor_por_semana = valor_kcal / qtd_semanas

  return valor_por_semana

'''def calcular_nova_dieta(peso, novo_peso):

  peso_final_em_gramas = (((peso * 7700)/7700)) + (novo_peso / 7700) * 1000 

  valor_proteina_g = peso_final_em_gramas / 4
  valor_carboidrato_g = peso_final_em_gramas / 4valor_proteina_g = peso_final_em_gramas / 4
      valor_carboidrato_g = peso_final_em_gramas / 4
      valor_gordura_g = peso_final_em_gramas / 9

      valor_proteina = peso_final_em_gramas * (0.4)
      valor_carboidrato = peso_final_em_gramas * (0.4)
      valor_gordura = peso_final_em_gramas * (0.2)

      print('Nova dieta')

      print(f'Valor de ingestão de proteína: {valor_proteina} g')
      print(f'Valor de ingestão de carboidrato: {valor_carboidrato} g')
      print(f'Valor de ingestão de gordura: {valor_gordura} g')
  valor_gordura = peso_final_em_gramas / 9

  valor_proteina_g = peso_final_em_gramas * (0.4)
  valor_carboidrato_g = peso_final_em_gramas * (0.4)
  valor_gordura_g = peso_final_em_gramas * (0.2)
 
'''
  
main()