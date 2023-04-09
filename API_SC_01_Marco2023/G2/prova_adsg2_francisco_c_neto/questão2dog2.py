from random import *
Francisco das chagas carvalho neto
# ENTRADAS
fipe       = float(input("percentual fipe pelo qual venderá seu carro:numero decimal "))
qtd_meses  = float(input("quantidade de meses:36 ou 48 ou 60 "))
taxa_juros = float(input("taxa de juros:1.2 a 2.5%")) 
taxa_adm   = float(input("taxa de administração:10 a 20% "))
#Processamento
valor_bem  = fipe * 89000
taxa_de_juros_cdc = (taxa_juros * (185000 - valor_bem)) * (qtd_meses)
juros_consorcio = taxa_adm * (185000 - valor_bem) 
valorf_cdc = taxa_de_juros_cdc + (185000 - valor_bem) #valor total a pagar no cdc
parcelas_cdc = valorf_cdc / qtd_meses
valorf_consorcio = juros_consorcio + (185000 - valor_bem) #valor total a pagar no consorcio
parcelas_consorcio = valorf_consorcio / qtd_meses
valor_a_ser_parcelado = 185000 - valor_bem

#saidas
print(f"o valor do bem: {valor_bem}")
print(f"valor a ser parcelado: {valor_a_ser_parcelado}")
print(f"juros totais: {taxa_de_juros_cdc} e {juros_consorcio}")
print(f"{qtd_meses} prestacoes de {parcelas_cdc} no cdc e {parcelas_consorcio} no consorcio ")
print(f"total a pagar - cdc:{valorf_cdc} e consorcio:{valorf_consorcio}")
