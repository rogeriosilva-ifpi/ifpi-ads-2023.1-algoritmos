import prompt from 'prompt-sync'
const input = prompt()

function main()
{
    const name = input('Seu nome: ')
    const years = Number(input('Sua idade: '))

    console.log(tabela(years, name))
    console.log(time(years, name))
}

function tabela(years, name)
{
    const fc = 220 - years
    console.log('Sua Fc: ', fc)

    //tabela
    console.log('--Classificação da Intensidade da Atividade Física--')
    console.log(' Fc  ----Intensidade  ---  Sua Frequênci ')
    console.log('Nome:',name,'--------------------------')
    console.log('90 - 100 -  Maxima      ------', fc - 0.9)
    console.log('90 - 80 --  Difícil     ------', fc - 0.8)
    console.log('80 - 70--  Moderada     ------', fc - 0.7)
    console.log('70 - 60--      Leve     ------', fc - 0.6)
    console.log('60 - 50-- Muito leve    ------', fc - 0.5)

}

function time(years, name)
{
    const time = Number(input('Quantos minutos você fará a atv: '))
    const fcm = 220 - years

    // time e classificação
    console.log('---------------Time de ATV-------------')
    console.log('Nome:',name,'--------------------------')
    console.log('FC - ---------Intensidade ------- Tempo')
    console.log(fcm - 0.7,'-','-   Moderada-', time - 0.6)
    console.log(fcm - 0.6,'-','-   Leve-    ', time - 0.2)
    console.log(fcm - 0.5,'-','-Muito leve-', time - 0.02)
    console.log(fcm - 0.8,'-','    -Difícil-', time - 0.1)


}

main()