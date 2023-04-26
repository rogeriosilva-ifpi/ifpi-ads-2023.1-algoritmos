import { mostrar_texto, obter_numero_minimo } from './my_io_utils.js'
import { calcular_porcentagem } from './my_math_utils.js'

function main(){
    const valor_emprestimo = obter_numero_minimo('Valor Empréstimo (1k+): ', 1000)

    const dias_pagamento = calcular_dias_quitacao(valor_emprestimo)

    mostrar_texto(`O Empréstimo será pago em ${dias_pagamento} dias`)
}

function calcular_dias_quitacao(valor_emprestimo){
    let saldo_devedor = valor_emprestimo
    const parcela = 200
    let dias = 0
    let week_day = 0

    while (true){
        dias += 1
        mostrar_texto(`Dia ${week_day}: ${dias}`)
        mostrar_texto(`SD Anterior R$ ${saldo_devedor.toFixed(2)}`)

        if (dia_util(week_day)){
            const parcela_mes = (saldo_devedor > parcela) ? parcela : saldo_devedor
            saldo_devedor = saldo_devedor - parcela_mes
        }
        mostrar_texto(`SD pós-parcela R$ ${saldo_devedor.toFixed(2)}`)
        if (saldo_devedor <= 0){
            break
        }
        
        const juros = calcular_porcentagem(saldo_devedor, 0.85)
        
        mostrar_texto(`Juros diário R$ ${juros.toFixed(2)}`)
        saldo_devedor += juros

        mostrar_texto(`Novo SD R$ ${saldo_devedor.toFixed(2)}`)
        mostrar_texto('-'.repeat(12))

        if (saldo_devedor <= 0){
            break
        }
        
        week_day = dias % 7
    }

    return dias
}

function dia_util(day){
    return !final_de_semana(day)
}

function final_de_semana(day){
    return (day == 0 || day == 6)
}

main()