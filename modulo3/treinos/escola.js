import { question } from 'readline-sync'

function main(){
    console.log('---- Média de Notas ----')
    const nome = question('Nome: ')
    const nota1 = Number(question('Nota 1: '))
    const nota2 = Number(question('Nota 2: '))

    const media_semestral = calcular_media(nota1, nota2)
    const situacao = verificar_situacao(media_semestral, 'semestral')

    console.log(`Olá ${nome} sua média foi ${media_semestral.toFixed(1)} e vc foi ${situacao}`)

    if (situacao === 'PROVA FINAL'){
        console.log('--- PF ----')
        const nota_pf = Number(question('Nota PF: '))
        const media_final = calcular_media(nota_pf, media_semestral)
        const situacao_final = verificar_situacao(media_final, 'momento-pf')
        console.log(`> ${nome} sua média pós PF foi ${media_final.toFixed(2)}`)
        console.log(`> Sua Sitação Final foi ${situacao_final}`)
    }else{
        console.log(`>>> Você não está habilitado para PF porque vc foi ${situacao}!`)
    }

}

function calcular_media(n1, n2){
    const media = (n1 + n2) / 2

    return media
}


function verificar_situacao(media, momento){
    // >= 7 --> APROVADO **** < 7 --> REPROVADO
    if (momento === 'semestral'){
        if (media >= 7){
            return 'APROVADO'
        }else if (media >= 4){
            return 'PROVA FINAL'
        }else{
            return 'REPROVADO'
        }
    }else{ // sitaucao-pf
        if (media >= 6){
            return 'APROVADO PF'
        }else{
            return 'REPROVADO PF'
        }
    }
}

main()