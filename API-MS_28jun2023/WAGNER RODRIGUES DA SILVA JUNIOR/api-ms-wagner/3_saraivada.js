const input = require('prompt-sync')()

function main(){
    let qtd_pedras = obter_numero("Quantas pedra você quer na chuva (até 50): ")


    while(qtd_pedras >  50){
        mostrar_texto('Quantidade não permitida')
        qtd_pedras = obter_numero("Digite um valor até 50: ")

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

function qtd_pedras_ate_50(qtd_pedras){
   
}