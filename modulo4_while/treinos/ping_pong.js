import { obter_numero_positivo } from './my_io_utils.js'

function main(){
    let pontos_a = 0
    let pontos_b = 0

    // let jogador = obter_numero_positivo('Jogador [1 - 2]: ')
    /*
    while (
            nenhum_alcancar_21(pontos_a, pontos_b) 
            || 
            (pelo_menos_um_obter_21(pontos_a, pontos_b) && diff(pontos_a, pontos_b) < 2)
            ){

        jogador = obter_numero_positivo('Jogador [1 - 2]: ')
    }*/

    let diff = 0

    while ((pontos_a < 5 && pontos_b < 5) || (diff < 2)){
        
        let jogador = obter_numero_positivo('Jogador [1 - 2]: ')

        if (jogador == 1){
            pontos_a++
        }else{
            pontos_b++
        }

        // A - B e não A, B
        diff = Math.abs(pontos_a, pontos_b)
    }
}


main()