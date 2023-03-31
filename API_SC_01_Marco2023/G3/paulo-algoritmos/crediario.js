import * as readsync from 'readline-sync'

//entrada
const valor_entrada = Number(readsync.question('Valor de entrada: '))
const valor_iphone = Number(readsync.question('Valor do iphone: '))
const forma_pagamento = Number(readsync.question('Valor do iphone(Pix,cartão de crédito): '))
const parcelas = Number(readsync.question('Quantidade parcela: '))

    const pix = valor_iphone + (valor_iphone * 0.15)
    const cartao_debito = valor_iphone + (valor_iphone * 0.10)
    const cartao_credito = ((3.99/100) + (1.5/100))/12

//simular compra iphone 
    if(forma_pagamento === pix){
        console.log(pix)    
    }
    else if(forma_pagamento === cartao_credito){
console.log('valor de entrada: ', valor_entrada)
console.log('Quanta parcelas gostraia de dividir: ', parcelas)
console.log('juros: ', ((3.99/100 ) + (1.5/100)) / parcelas)
    }
    else if(forma_pagamento === cartao_debito){
        console.log(cartao_debito)
    }

    