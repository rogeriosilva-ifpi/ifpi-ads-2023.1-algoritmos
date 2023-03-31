import {question} from 'readline-sync'

function main (){
    const valor_bem= Number(question('Informe o valor do bem em reais:'))
    const prazo= Number(question('Informe o prazo em meses:'))
    const parcel= Number(question('Parcelas em reais:')) 
    const taxa_adm= Number(question('Informe a taxa de administração:'))
    const lance= Number(question('Informe o valor do lance proposto:'))
    const renda= Number(question('Informe sua renda mensal:'))

    const parcela= (valor_bem+ taxa_adm/100 * valor_bem) / prazo
    const total_p= valor_bem+ taxa_adm/100 * valor_bem 
    const total_adm= valor_bem * taxa_adm/100 

    if (lance> 30/100 * renda){
        console.log('Resgate Reprovado')
    } else if (lance<=30/100 * renda){
        console.log('Resgate Aprovado')
        console.log('Nova parcela:', parcela)
        console.log('Novo prazo:', prazo)  
    }
    

 

}
main()
