export function contem_na_colecao(item, colecao){

    for (let elemento of colecao) {

        if (item === elemento) {

            return true

        }
        
    }

    return false

}

export function gerar_saraivada(num_de_elementos) {

    let saraivada = []
    let pedra_random

    for (let i = 0; i < num_de_elementos; i++) {
        
        pedra_random = Math.floor(Math.random() * (1 + 50) - 1)

        saraivada.push(pedra_random)
        
    }



}