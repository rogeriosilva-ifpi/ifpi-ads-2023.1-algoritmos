import { enter_limpar_tela, maximo_entre_tres_diferentes, mostrar_texto, obter_numero, obter_numero_positivo } from './input_utils.js'

function main(){

    const NULO = 9
    const BRANCO = 0
    mostrar_texto('***** Eleição ****')

    const qtd_eleitores = obter_numero_positivo('Quantidade de Votos: ')
    let contador = 0
    let votos_01 = 0
    let votos_02 = 0
    let votos_03 = 0
    let votos_brancos = 0
    let votos_nulos = 0

    // pedir e computador os votos
    while (contador < qtd_eleitores){
        let voto = obter_voto()

        // verificar
        if (voto === NULO){
            votos_nulos++
        }else if (voto === BRANCO){
            votos_brancos++
        }else if (voto === 1){
            votos_01++
        }else if (voto === 2){
            votos_02++
        }else{
            votos_03++
        }

        enter_limpar_tela()
        contador++
    }

    // Apresentados resultados
    mostrar_texto('------ Apuração ------')
    mostrar_texto(`> Candidato 01: ${votos_01}`)
    mostrar_texto(`> Candidato 02: ${votos_02}`)
    mostrar_texto(`> Candidato 03: ${votos_03}`)
    mostrar_texto(`>      Brancos: ${votos_brancos}`)
    mostrar_texto(`>      Nulos  : ${votos_nulos}`)

    // Verificar resultado
    const maior_votacao = maximo_entre_tres_diferentes(votos_01, votos_02, votos_03)
    let campeao = ''
    if (votos_01 === maior_votacao){
        campeao = '01'
    }else if (votos_02 === maior_votacao){
        campeao = '02'
    }else if (votos_03 === maior_votacao){
        campeao = '03'
    }

    if (empatou(votos_01, votos_02, votos_03)){
        mostrar_texto('!!! EMPATE DETECTADO !!!')
    }else{
        mostrar_texto(`> Campeão Candidato ${campeao} (Votos ${maior_votacao})`)
    }

}

function empatou(votos_01, votos_02, votos_03){
    const maximo = maximo_entre_tres_diferentes(votos_01, votos_02, votos_03)
    return (votos_01 === maximo && votos_01 === votos_02) 
            || (votos_01 === maximo && votos_01 === votos_03)
            || (votos_02 === maximo && votos_02 === votos_03)
}


function obter_voto(){
    const menu = `Voto
    1 - Candidato 01
    2 - Candidato 02
    3 - Candidato 03
    0 - Branco
    9 - Nulo\n
    
    > `
    let voto = obter_numero(menu)
    while (voto !== 1 && voto !== 2 && voto !== 3 && voto !== 0 && voto !== 9){
        mostrar_texto('Valor Inválido!')
        voto = obter_numero(menu)
    }
    
    return voto
}

main()