import { mostrar_texto, obter_numero_minimo, obter_numero_positivo, obter_texto } from './my_io_utils.js'

function main(){
    let pontos_clube_a = 0
    let pontos_clube_b = 0

    let prova = obter_numero_minimo('Prova: ', 0 )
    let qtd_nadadores = obter_numero_minimo('Qtd Nadadores: ', 0)

    while (prova != 0 || qtd_nadadores != 0){
        /*
        if (prova == 0 && qtd_nadadores == 0){
            break
        }*/

        let contador = 0
        while (contador < qtd_nadadores){
            mostrar_texto(`Dados do Nadador ${contador+1}`)
            let nome = obter_texto('Nome: ')
            let classificacao = obter_numero_minimo('Classificaçao: ', 1)
            let clube = obter_texto('Clube "a" ou "b": ')
            let tempo = obter_numero_positivo('Tempo (s): ')

            let pontos = calcular_pontos(classificacao)

            if (clube == 'a'){
                pontos_clube_a += pontos
            }else{
                pontos_clube_b += pontos
            }

            mostrar_texto('-------------------')
            contador++
        }

        mostrar_texto('Proxima prova--')
        prova = obter_numero_minimo('Prova: ', 0 )
        qtd_nadadores = obter_numero_minimo('Qtd Nadadores: ', 0)
    }

    // Apurar os resultados
    mostrar_texto('>>>>> Pontuações Gerais <<<<<<<')
    mostrar_texto(`Team A: ${pontos_clube_a}`)
    mostrar_texto(`Team B: ${pontos_clube_b}`)

    let campeao = verificar_resultado(pontos_clube_a, pontos_clube_b)
    mostrar_texto(`RESULTADO: ${campeao}`)
    

    mostrar_texto('Fim..')
}

function calcular_pontos(classificacao){
    if (classificacao == 1){
        return 9
    }else if (classificacao == 2){
        return 6
    }else if (classificacao == 3){
        return 4
    }else if (classificacao == 4){
        return 3
    }else{
        return 0
    }
}

function verificar_resultado(pontos_clube_a, pontos_clube_b){
    if (pontos_clube_a > pontos_clube_b){
        return 'A'
    }else if (pontos_clube_b > pontos_clube_a){
        return 'B'
    }

    return 'EMPATE'
}

main()