import { mostrar_texto, obter_numero_positivo, obter_texto } from '../../modulo4_while/treinos/my_io_utils.js'

function main(){
    let casos = obter_numero_positivo('')

    while (casos > 0){
        let cartas = obter_texto('')
        let estah_com_sorte = contem_cartas_sorte(cartas)

        if (estah_com_sorte){
            mostrar_texto('Aaah muleke')
        }else{
            mostrar_texto('Ooo raca viu')
        }
        casos--
    }
}

function contem_cartas_sorte(cartas){
    return string_contem(cartas, 'Q') 
        && string_contem(cartas, 'J') 
        && string_contem(cartas, 'K') 
        && string_contem(cartas, 'A') 
}


function string_contem(texto, caractere){
    for (let c of texto){
        if (c === caractere){
            return true
        }
    }

    return false
}
main()