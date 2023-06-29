import {prompt} from "prompt-sync"
let input = prompt()

function main(){

    const nome = Number(input("Digite um nome:"))
    let composta = 0
    let simples = 0
    let camel_Case = ""

    for(let i = Q; i<nome; i++){

        console.log('\n')
        let snake_Case = input("Digite o nome:")


        if (eh_composta(snake_Case)){

            composta++

        }else{

            simples++

        }
    


    }





}

main()

function eh_composta(composta){

    for(let i =0; i<composta.lenght;i++){

        if(composta[i]="-"){

            return true
        }



    }
}