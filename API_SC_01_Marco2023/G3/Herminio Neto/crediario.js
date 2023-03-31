import { question } from 'readline-sync'

function main(){

    // Entrada:

    const valor_iphone = Number(question('Informe o valor do IPhone em R$: '))
    const forma_de_pagamento = Number(question('Informe o método de pagamento (1 para PIX/Espécie; 2 para cartão de débito; 3 para cartão de crédito): '))

    // Processamento:

    const valor_final = calcular_valor(valor_iphone, forma_de_pagamento)

    // Saída:

    console.log(`Você deverá pagar ${valor_final}`)

}

function calcular_valor(valor_iphone, forma_de_pagamento){
    if (forma_de_pagamento === 1){
        const valor_final = (valor_iphone - (0.15 * valor_iphone)).toFixed(2)
        const economia = valor_iphone - valor_final

        return `${valor_final}, economizando ${economia}.`
    } else if (forma_de_pagamento === 2){
        const valor_final = (valor_iphone - (0.10 * valor_iphone)).toFixed(2)
        const economia = valor_iphone - valor_final

        return `${valor_final}, economizando ${economia}.`
    } else if (forma_de_pagamento === 3){
        const entrada = Number(question('Informe quanto você pagará de entrada: '))
        const parcelas = Number(question('Informe em quantas parcelas deseja dividir o valor restante (máximo 12): '))
        const valor_restante = valor_iphone - entrada
        const valor_parcelas = ((valor_restante / parcelas) + (valor_restante * (0.0399 + 0.015 * parcelas))).toFixed(2)
        
        return `uma entrada de ${entrada} e ${parcelas} parcelas de ${valor_parcelas}`
    }
}

main()