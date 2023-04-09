
# Germano Júnior 2023111TADS0015 2023-março-27


def main():
    print("TODO: terminar :(")
    # ENTRADA
    valor = float(input("Valor do bem: "))
    prazo = int(input("Prazo (meses): "))
    taxa_adm = float(input("Taxa de administração (em porcentagem): "))
    lance = float(input("Valor lance proposto: "))
    manter = input("manter (prazo ou parcela): ")
    if manter != "prazo" and manter != "parcela":
        print("informe ou prazo ou parcela no campo manter")
        return
    renda = float(input("Renda mensal: "))
    # PROCESSAMENTO
    total_adm = valor * taxa_adm
    total_valor = total_adm + valor
    valor_parcela = 2
    if manter == "prazo":
        valor_parcela = (total_valor - lance) / prazo
    elif manter == "parcela":
        valor_parcela = total_valor / prazo
        prazo = prazo - lance / valor_parcela
    valor_resgate = valor_parcela * 0.30
    # SAÍDA
    print("---------------------------------------------------------")
    print(f"Valor das parcelas: {valor_parcela * prazo}")
    print(f"Total a pagar: {total_valor}")
    print(f"Total taxa administração: {total_adm}")
    if renda < valor_resgate:
        print("É possível resgatar o bem")
    else:
        print("Não é possível resgatar o bem")
        print(f"Renda mínima para o resgate: {valor_resgate}")


if __name__ == "__main__":
    main()
