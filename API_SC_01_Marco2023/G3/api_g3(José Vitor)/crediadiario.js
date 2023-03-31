// 6. (crediario)

import { question } from "readline-sync";

//Entrada
function main(){
const valorIphone = Number(question(`Insira o valor do Iphone: `))
const pagamento = Number(question(`Escolha uma forma de pagamento (1 a 3): `)) // 1 = pix, 2 = cartão debito e 3 = entrada + cartão crédito

//Procesamento
const opcaoPagamento = formaPagamento(valorIphone)
const pix = pagamentoPix(valorIphone)
const cartaoDebito = pagamentoDebito(valorIphone)
const cartaoCredito = pagamentoCredito(valorIphone, entrada, juros) // entrada
const entrada = Number(question(`Digite o valor da Entrada: `))
const juros = Number(question(`Digite o juros (%): `))
const prazo = Number(question(`Prestacoes em ate 12x: `))
const valorFinal = calculo_valorFinal(valorIphone, entrada, juros)
const parcelas = calculo_parcelas(valorFinal, prazo)
//Saída


}
main()

//funções

function formaPagamento(pagamento){
    if(pagamento === 1){
        return `Pagamento em PIX/Espécie`
    }else if (pagamento === 2){
        return `Pagamento em Cartão de Débito`
    }else{
        return  `Pagamento será Entrada + Cartão de Crédito`
    }
}

function pagamentoPix(valorIphone){
    return valorIphone * 0.85
}

function pagamentoDebito(valorIphone){
    return valorIphone * 0.90
}

//parcelas
function calculo_valorFinal(valorIphone, entrada, juros){
 return (valorIphone - entrada) * (juros / 100)
}

function calculo_parcelas(valorFinal, prazo){
    return valorFinal / prazo
}

// credito
function pagamentoCredito(valorFinal, juros, parcelas){
    return valorFinal
}