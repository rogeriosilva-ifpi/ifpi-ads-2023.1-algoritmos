
# Germano Júnior 2023111TADS0015 2023-março-27

def main():
    # ENTRADA
    dur_curso = float(input("Duração do curso (em anos): "))
    men = float(input("Valor da mensalidade: "))
    selic = float(input("Taxa Selic (em porcentagem): "))
    sal_min = float(input("Salario mínimo vigente: "))
    renda_familiar = float(input("Renda familiar: "))
    familiares = int(input("Número de familiares: "))
    ano = int(input("Ano de início do curso: "))
    semestre = int(input("Semestre de início do curso (1 ou 2): "))
    # PROCESSAMENTO
    capita = renda_familiar / familiares
    if not aprovado(capita, sal_min):
        print("Você não foi aprovado, pois a sua renda per capita familiar é maior que 3 salários mínimos")
        return
    meses_carencia = 18
    parcela_fixa_trimestral = 150
    financiado = dur_curso * men * 12
    juros = calc_juros(capita, selic, sal_min)
    total_juros = financiado * juros
    total_geral = financiado + total_juros
    pago_curso = dur_curso * 12 * parcela_fixa_trimestral / 3
    pago_carencia = meses_carencia * parcela_fixa_trimestral / 3
    saldo_devedor = financiado + total_juros - pago_curso - pago_carencia
    numero_parcelas = meses_parcelas(dur_curso)
    valor_parcela = saldo_devedor / numero_parcelas
    renda_minima = valor_parcela / 0.10 # o oposto de pegar 10% de um número é dividir por 10%
    inicio = ano_composto(ano, semestre) + dur_curso + meses_carencia / 12
    fim = inicio + numero_parcelas / 12
    # SAÍDA
    print("---------------------------------------------------------")
    print("Você foi aprovado para ter um financiamento do seu curso!")
    print(f"Valor financiado: {financiado}")
    print(f"Valor total dos juros: {total_juros}")
    print(f"Valor total a pagar: {total_geral}")
    print(f"Valor pago durante o curso e a carência: {pago_curso + pago_carencia}")
    print(f"Valor da parcelas pós carência: {valor_parcela}")
    print(f"Renda mínima ao iniciar o pagamento das parcelas: {renda_minima}")
    print(f"Ano em que iniciará o pagamento: {inicio}")
    print(f"Ano em que finalizará o pagamento: {fim}")

def aprovado(capita, sal_min):
    # só é aprovado se a renda per capita familiar não for maior que 3 salários minimos
    return capita <= sal_min * 3

def meses_parcelas(dur_curso):
    # quantidade de meses na qual se pode pagar as parcelas é 4 vezes a duração do curso
    return dur_curso * 12 * 4

def ano_composto(ano, semestre):
    if semestre == 2:
        return ano + 0.5
    else:
        return ano

def calc_juros(capita, selic, sal_min):
    salarios = capita / sal_min
    if salarios <= 1.5:
        return 0.10 * selic
    elif salarios <= 2:
        return 0.15 * selic
    elif salarios <= 2.5:
        return 0.20 * selic
    else:
        return 0.25 * selic

if __name__ == "__main__":
    main()

