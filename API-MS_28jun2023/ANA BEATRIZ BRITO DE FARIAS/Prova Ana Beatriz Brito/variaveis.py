n = int(input("Digite a quantidade de variaveis:"))
for i in range(n):
    mensagem = (input("Digite a variavel:"))
    s = mensagem.replace("_", "")
    
    print(s)
