const input = require('prompt-sync')()

function main(){
    const nome = obter_texto("Digite seu nome: ")
    mostrar_texto(`Olá, ${nome}`)

    const numero = obter_numero("Digite um número: ")

    if(numero == 0){
        //Parar o programa
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

function obter_numero(mensagem){
    const numero = Number(input(mensagem))
    return numero
}