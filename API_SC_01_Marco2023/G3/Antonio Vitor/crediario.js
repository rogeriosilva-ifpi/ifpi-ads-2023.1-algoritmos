import prompt from "prompt-sync"

function main (){
    
    let valor_cel = Number(input("Valor da compra: "))
    let pagamento = Number(input("Digite '1' se o pagamento for feito via PIX/Espécie. Digite '2' se o pagamento for no débito. Digite '3' se o pagamento for no crédito"))
    let novo_valor = 0
    let desconto_PIX = valor_cel*0.15
    let desconto_DEBITO = valor_cel*0.10 
    let entrada = 0 
    let parcelas = 0 
    let valor_parcela = 0
    let juro_credito = 0
    let valor_com_juros = 0


    if (pagamento == 1){
        novo_valor = valor_cel - desconto_PIX

        console.log (`O valor final do celular será de: ${novo_valor}`)
        console.log (`O valor do desconto no final da compra será de: ${desconto_PIX}`)

    }else if (pagamento == 2){
        novo_valor = valor_cel - desconto_DEBITO

        console.log (`O valor final do celular será de: ${novo_valor}`)
        console.log (`O valor do desconto no final da compra será de: ${desconto_DEBITO}`)

    }else if (pagamento == 3){
        entrada = Number(input("Valor a ser pago de entrada: "))
        quantidade_parcelas = Number(input("Valor de parcelas desejado: "))
        novo_valor = valor_cel - entrada
        valor_parcela = novo_valor/quantidade_parcelas
        juros_credito = (valor_parcela*0.15)*quantidade_parcelas
        valor_com_juros = juros_credito + entrada

        console.log (`O valor final do celular será de: ${valor_com_juros}`)
        console.log (`O valor dos juros é de: ${juros_credito}`)
    }

} main()