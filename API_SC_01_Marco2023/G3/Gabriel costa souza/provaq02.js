/* Gabriel Costa Souza */
import {question, questionPath} from "readline-sync";

function main(){

// Entrada
const valor_iphone = Number(question('Digite o valor do iphone que você quer comprar: '))
const forma_pagamento1 = Number(question('Qual a forma de pagamento você quer utilizar?\nDigite 1 para PIX/ESPÉCIE\nDigite 2 para CARTÃO DE DÉBITO\nDigite 3 para ENTRADA + CARTÃO DE CRÉDITO\n'))

// Processamento 
forma_pagamento(valor_iphone,forma_pagamento1)




function forma_pagamento(valor_iphone,forma_pagamento){ //Função para ver o valor que vai ficar o iphone de acordo com a forma de pagamento
    if (forma_pagamento === 1){
        const valor_para_pagar = valor_iphone - ((valor_iphone / 100) * 15)
        console.log(`Com a forma de pagamento PIX/ESPECIE escolhida o valor total do iphone será de ${valor_para_pagar.toFixed(2)} e você economizou ${valor_iphone - valor_para_pagar} `)
    } else if (forma_pagamento === 2){
        const valor_para_pagar = valor_iphone - ((valor_iphone / 100) * 10)
        console.log(`Com a forma de pagamento CARTAO DE DEBITO escolhida o valor total do iphone será de ${valor_para_pagar.toFixed(2)} e você economizou ${valor_iphone - valor_para_pagar} `)
    }else if (forma_pagamento === 3){
        const entrada = Number(question('Qual valor de entrada que você quer dar?\n'))
        const parcelas = Number(question('Em quantas você quer parcelar?\n'))
        const porcentagem_juros = 3.99 + (1.5 * parcelas)
        const valor_para_pagar  =  (valor_iphone - entrada) + (((valor_iphone - entrada) / 100) * porcentagem_juros)
        const valor_da_parcela = valor_para_pagar / parcelas
        console.log(`Com a forma de pagamento ENTRADA + CARTAO DE CREDITO o valor total ja com a entrada sera de ${valor_para_pagar.toFixed(2)} que dividido em ${parcelas}x ficou em ${valor_da_parcela.toFixed(2)} a cada mês\nCom isso você pagou ${((valor_para_pagar + entrada) - valor_iphone).toFixed(2)} a mais que o valor total `)
    } 
}
}




main()
    