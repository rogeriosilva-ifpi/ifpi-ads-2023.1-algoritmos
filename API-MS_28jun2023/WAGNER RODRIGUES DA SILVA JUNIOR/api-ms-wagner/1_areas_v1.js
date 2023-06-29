const input = require('prompt-sync')()

function main(){
    let opcoes = `Favor escolher uma opção:\n Retângulo = Dgite R \n Triângulo = Digite T \n Trapézio = Digite Z \n Círculo = Digite C` 
    mostrar_texto(opcoes)
    let opcao_escolhida1 = input('Digite a letra correspondente a 1ª figura: ')

    let verificar_opcao1 = validar_opcao_digitada(opcao_escolhida1)

        while(verificar_opcao1 === false){
            mostrar_texto('opção inválida, favor digitar uma letra válida')
            opcao_escolhida1 = input('Digite a letra correspondente a 1ª figura: ')
            verificar_opcao1 = verificar_opcao_digitada(opcao_escolhida1)
        }

        let opcao_escolhida2 = input('Digite a letra correspondente a 2ª figura:')
        let verificar_opcao2 = verificar_opcao_digitada(opcao_escolhida2)
        while(verificar_opcao2 === false){
            mostrar_texto('opção inválida, favor digitar uma letra válida')
            opcao_escolhida2 = input('Digite a letra correspondente a 1ª figura: ')
            verificar_opcao2 = verificar_opcao_digitada(opcao_escolhida2)
        }

        



    //SAÍDA

   
}
main()


function mostrar_texto(texto){
    console.log(texto)
}


function verificar_opcao_digitada(opcao){
     if (opcao == 'R' || opcao == 'r'){
        return true

    }else if(opcao == 'T' || opcao == 't'){
        return true
    }else if(opcao == 'Z' || opcao == 'z'){
        return true
    }else if(opcao == 'C' || opcao == 'c'){
        return true
    }

    return false


}

