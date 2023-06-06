import { mostrar_texto } from '../modulo4_while/treinos/my_io_utils.js'

function main(){
    // const vetor = ['Rogerio', 'PatroNet', 'Rodrigo', 'Luiz', 'Joaquim', 'Samia', 'Arthur']
    const vetor = [19, 5, 4, 0, -100, -1001]
    
    mostrar_texto(vetor)
    // const vetor_ordenado = bubble_sort(vetor, por_tamanho)
    // const vetor_ordenado = bubble_sort(vetor, t => t.length) // Arrow(=>) function
    // const vetor_ordenado = bubble_sort(vetor, t => t.length, true) // Arrow(=>) function
    bubble_sort(vetor) // Arrow(=>) function

    // mostrar_texto(vetor_ordenado)
    mostrar_texto(vetor)
}

function por_tamanho(texto){
    return texto.length
}

function bubble_sort(colecao, chave=v=>v, inverso=false){
    const ciclos = colecao.length - 1

    for (let i = 0; i < ciclos; i++){ // qtd vezes (5)
        let trocou = false
        for (let j = 0; j < ciclos - i; j++){ // (4)
            let atual = colecao[j]   
            let proximo = colecao[j+1]

            if (!inverso){
                if (chave(atual) > chave(proximo)){
                    colecao[j] = proximo
                    colecao[j+1] = atual
                    trocou = true
                }
            }else{
                if (chave(atual) < chave(proximo)){
                    colecao[j] = proximo
                    colecao[j+1] = atual
                    trocou = true
                }
            }
            
        }
        if (!trocou){ // se não realizou trocas então encerrou.
            // return vetor
            return
        }
    }

    // return vetor
}

main()