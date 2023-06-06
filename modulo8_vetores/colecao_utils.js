import { mostrar_texto, mostrar_texto_inline, obter_numero } from "../modulo4_while/treinos/my_io_utils.js"

export function novo_vetor(tamanho, valor_padrao=-1){
    const vetor = Array(tamanho)
    return mapear(vetor, i => valor_padrao)
}

export function nova_matriz(qtd_linhas, qtd_colunas, valor_padrao=-1){
   const matriz = novo_vetor(qtd_linhas) 
   for (let i = 0; i < qtd_linhas; i++){
    matriz[i] = novo_vetor(qtd_colunas, valor_padrao)
   }

   return matriz
}

export function show_vetor(vetor){
    mostrar_texto_inline('[')
    for (let item of vetor){
        mostrar_texto_inline(` ${item}`)
    }
    mostrar_texto(' ]')
}

export function show_matriz(matriz){
    for (let linha of matriz)
        show_vetor(linha)
}

export function preencher_matriz_manual(matriz1){
    const qtd_linhas = matriz1.length
    for (let i = 0; i < qtd_linhas; i++){
        for (let j = 0; j < matriz1[i].length; j++){
            matriz1[i][j] = obter_numero(`[${i}][${j}]: `)
        }
    }
}

export function somar_matrizes(matriz1, matriz2){
    // considerando matrizes iguais(l=l, c=c)
    const qtd_linhas = matriz1.length;
    const qtd_colunas = matriz1[0].length

    const matriz_soma = nova_matriz(qtd_linhas, qtd_colunas, 0)

    for (let i = 0; i < qtd_linhas; i++){
        for (let j = 0; j < qtd_colunas; j++){
            matriz_soma[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }

    return matriz_soma
}


export function mapear(vetor, funcao){
    const vetor_mapeado = Array(vetor.length)
  
    for (let i = 0; i < vetor.length; i++) {
    // for (let i in vetor) {
        vetor_mapeado[i] = funcao(vetor[i])
    }
  
    return vetor_mapeado
  }