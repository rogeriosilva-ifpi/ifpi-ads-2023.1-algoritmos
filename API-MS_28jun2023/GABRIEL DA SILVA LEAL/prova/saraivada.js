import prompt from 'prompt-sync'
let input = prompt()

function main(){

    let numero_pedras = Number(input('De 0-50 quantas pedras você quer na chuva: '))
    let guarda_volume_pedras = []

    while(numero_pedras > 50){

        numero_pedras = Number(input('Digit novamente o número de pedras dentro do valor mencionado!'))
    }

    let array_volumes = calcular_volume_pedras(numero_pedras, guarda_volume_pedras)
    let volume_chuva = calcular_volume_da_chuva(array_volumes)
    //calcular_saraivas_em_volume_minimo_maximos(array_volumes, volume_chuva)
    let diferenca_soma = diferenca_soma_index_par_impar(array_volumes)

    mostrar_opcoes()

    let resposta = 1
    while(resposta >= 1 && resposta < 5){
    
    resposta = Number(input('Digite a opção que deseja seguir: '))

    if(resposta == 1){

        console.log(`Esse é o volume total: ${volume_chuva} `)
    }

    else if(resposta == 2){

        calcular_saraivas_em_volume_minimo_maximos(array_volumes, volume_chuva)
    }
    else if(resposta == 3){

        console.log(`A difernça na soma é de: ${diferenca_soma}`)
    }

    else if(resposta == 4){

        calcular_valores_distantes_media(array_volumes, volume_chuva, numero_pedras)
    }
}
    
}
main()

function mostrar_opcoes(){
    let opcoes = '1- Calcular volume total' + '\n' + '2- Saraivas de volume mínimo e máximo ' + '\n' + '3- Diferença da soma dos volumes de posição par e ímpares' + '\n' + '4- Média de volumes distantes:'

    console.log(opcoes)
}


function calcular_volume_pedras(numero_pedras, guarda_volume_pedras){

    for (let i = 0; i < numero_pedras; i++) {
        
        guarda_volume_pedras[i] = Math.floor(Math.random()* (50 - 1) + 1)
        
    }

    return guarda_volume_pedras
}

function calcular_volume_da_chuva(guarda_volume_pedras){

    let volume_total = 0 

    for (let i = 0; i < guarda_volume_pedras.length; i++) {
        
        volume_total += guarda_volume_pedras[i]
    }

   return volume_total
}

function calcular_saraivas_em_volume_minimo_maximos(guarda_volume_pedras, volume_total){

    let guarda_volumes_minimos = 0 
    let guarda_volumes_maximos = 0
    let quantidade_saraivas_max = 0

    for (let i = 0; i < guarda_volume_pedras.length; i++) {
      
    if(guarda_volume_pedras[i] == 1){

        guarda_volumes_minimos++
    }

    if(guarda_volume_pedras[i] == 50){

        guarda_volumes_maximos += 50
        quantidade_saraivas_max++
    }

    }

    let porcentagem_de_volumes_minimos = (guarda_volumes_minimos / volume_total) * 100
    let porcentagem_de_volumes_maximos = (guarda_volumes_maximos / volume_total) * 100

    console.log(`A porcentagem de saraivas com valores mínimos é de ${porcentagem_de_volumes_minimos} e sua quantidad é de ${guarda_volumes_minimos}`)

    console.log(`A porcentagem de saraivas com valores máximos é de ${porcentagem_de_volumes_maximos} e sua quantidad é de ${quantidade_saraivas_max}`)

}

function diferenca_soma_index_par_impar(guarda_volume_pedras){

    let soma_index_pares = 0
    let soma_index_impares = 0

    for (let i = 0; i < guarda_volume_pedras.length; i++) {
        
        if(guarda_volume_pedras[i] % 2 == 0){

            soma_index_pares += guarda_volume_pedras[i]

        }else{

            soma_index_impares += guarda_volume_pedras[i]
        }
    }

    let diferenca = soma_index_pares - soma_index_impares

    return diferenca
} 

function calcular_valores_distantes_media(guarda_volume_pedras, volume_total, numero_pedras){

    let volume_medio = volume_total / numero_pedras
    let porcentagem_distante = volume_medio * 0.3
    let pedras_volume_distante = 0
    let contador_pedras_volume_distante = 0


    for (let i = 0; i < guarda_volume_pedras.length; i++) {
       
        if(guarda_volume_pedras[i] < porcentagem_distante || guarda_volume_pedras[i] > porcentagem_distante){

            pedras_volume_distante += guarda_volume_pedras[i]
            contador_pedras_volume_distante ++
        }
        
    }

    let media_pedras_volume_distante = pedras_volume_distante / contador_pedras_volume_distante
    
    console.log(`Este é o volume de pedras distantes da média: ${media_pedras_volume_distante}`)
}