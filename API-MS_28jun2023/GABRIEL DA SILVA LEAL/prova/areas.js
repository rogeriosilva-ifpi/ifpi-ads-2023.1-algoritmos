import prompt from 'prompt-sync'
let input = prompt()

function main(){
    
    mostrar_opcoes()
    let figura_1 = input('Digite a letra correspondente a  primeira figura: ').toUpperCase()
    let figura_2 = input('Letra correspondente a segunda figura: ').toUpperCase()

    if(figura_1 !== figura_2){

        calculando_area_das_figuras(figura_1)
        calculando_area_das_figuras(figura_2)

        

    
    }

    

}
main()



function mostrar_opcoes(){
    let opcoes = 'Q- Quadrado' + '\n' + 'R- Retângulo' + '\n' + 'T- Triângulo' + '\n' + 'C- Círculo' + '\n' + 'Z- Trapézio'

    console.log(opcoes)
}



function calculando_area_das_figuras(figura1){
    let area = 0
    const PI = 3.14159

    if(figura1 == 'Q'){

        let lado = Number(input('Digite o lado do quadrado: '))

        if(lado < 0){

            lado =  Number(input('Digite o valor novamente: '))
        }

        area = lado ** 2

        console.log(`A área do Quadrado é de ${area}`)
    }

    else if(figura1 == 'R'){

        let largura = Number(input('Digite a largura do retângulo: '))
        let comprimento = Number(input('Digite o comprimento do retângulo: '))

        if(largura < 0){

        let largura = Number(input('Digite a largura novamente: '))
    
        }

        if(comprimento < 0){

            let comprimento = Number(input('Digite comprimento novamente: '))
        
            }
        
        area = largura * comprimento 

        console.log(`A área do Retângulo é de ${area}`)
    }

    else if(figura1 == 'T'){

        let base = Number(input('Digite a base do triângulo: '))
        let altura = Number(input('Digite a altura do triângulo: '))

        if(base < 0){

            let base = Number(input('Digite a base novamente: '))
        
            }
    
        if(altura < 0){
    
            let comprimento = Number(input('Digite a altura novamente: '))
            
            }


        area = (base * altura) / 2

        console.log(`A área do Triângulo é de ${area}`)
    }

    else if(figura1 == 'Z'){

        let altura = Number(input('Digite a altura do trapézio: '))
        let base_maior = Number(input('Digite o comprimento da base maior: '))
        let base_menor = Number(input('Digite o comprimento da base menor: '))

        if(altura < 0){

            altura = Number(input('Digite a altura novamente: '))
        }
        if(base_maior < 0){

            let base = Number(input('Digite a base maior novamente: '))
        
            }
    
        if(base_menor < 0){
    
            let comprimento = Number(input('Digite a base menor novamente: '))
            
            }


        
        area = ((base_maior + base_menor) * altura) / 2
        
        console.log(`A área do Trapézio é de ${area}`)
    }

    else if(figura1 == 'C'){

        let raio = Number(input('Digite o raio do cŕculo: '))

        if(raio < 0 ){

            raio = Number(input('Digite o raio novamente: '))
        }


        area = PI * (raio ** 2)
        console.log(`A área do Círculo é de ${area}`)
    }

    let area2 = 0 
   
}


function descobrindo_maior_area(area_figura1, area_figura2){

    if(area_figura1 > area_figura2){

        console.log('A área da figura 1 é maior que a da figura 2!')

    }else{

        console.log('A área da figura 2 é maior que a da figura 1!')
    }
}

