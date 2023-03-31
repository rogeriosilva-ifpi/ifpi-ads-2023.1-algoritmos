import { question } from "readline-sync";

function main(){
    const valor_iphone = Number(question('Valor do Iphone: '))
    console.log()
    console.log('Opções de Pagamento:')
    console.log('1 - PIX/Espécie')
    console.log('2 - Cartão de Débito')
    console.log('3 - Entrada + Cartão de Crédito')
    console.log()
    const metodo = Number(question('Qual o Método de Pagamento (1, 2 ou 3): '))
    const entrada = Number(question('Qual o valor da entrada: '))
    const parcelamento = Number(question('Em quantas vezes quer dividir: '))

    

    const valor_final = calculo_valor_final(metodo, valor_iphone, entrada, parcelamento)
    const economia = verificar_economia(metodo, valor_iphone, valor_final)

    console.log(economia)

}

function calculo_valor_final(metodo, valor_iphone, entrada, parcelamento){
    if (metodo === 1){
        return valor_iphone - (valor_iphone * (15 / 100))
    }else if(metodo === 2){
        return valor_iphone - (valor_iphone * (10 / 100))
    }else{
        return valor_iphone + ((3.99 / 100) * (valor_iphone - entrada)) + ((1.5 / 100) * parcelamento) 
    }
}

function verificar_economia(metodo, valor_iphone, valor_final){
    if(metodo === 1 || metodo === 2){
        return `Pelo método escolhido, você pagará pelo Iphone o valor de R$ ${valor_final}, economizando R$ ${valor_iphone - valor_final} reais.`
    }else{
        return `Pelo método escolhido, você pagará pelo Iphone o valor de R$  ${valor_final}, pagando de juros o montante de R$ ${valor_final - valor_iphone}.`
    }
}

main()