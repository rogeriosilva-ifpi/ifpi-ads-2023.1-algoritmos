const input = require('prompt-sync')()

function main(){
    const valor_n = obter_numero()
    let contador = 1 

    while (contador <= valor_n){
        const nome_variaveis = obter_texto("Digite nomes de variáveis(ex: nome_completo): ")
        contador++

    }

}
main()


function mostrar_texto(texto){
    console.log(texto)
}


function obter_texto(mensagem){
     const texto = input(mensagem)
     return texto
}

function obter_numero(){
    const numero = Number(input("Digite um valor: "))
    return numero
}