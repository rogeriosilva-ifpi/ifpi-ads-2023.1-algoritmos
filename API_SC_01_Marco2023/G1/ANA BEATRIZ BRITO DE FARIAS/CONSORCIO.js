import {question} from 'readline-sync'


function Consorcio(){
    const valor = Number(question('Digite o valor do bem:'))
    const tempo = Number(question('Digite a quantidade de meses:'))
    const valor_lance = Number(question('Digite o valor do lance:'))
    const renda_mensal = Number(question('Digite o valor da sua renda:'))   
    const manter = Number(question('Manter o Prazo ou a Parcela:'))

    const taxa_adm = (valor * 15) / 100
    const parcela = (valor / tempo)
    const total = (valor + taxa_adm)
    const porce_renda = (renda_mensal *30) / 100
    const lance = (total - valor_lance)
    

function prazo(){

    if (manter== 'Prazo'){
        return lance
    }
    else{
       return 'você pode reduzir o numero de parcelas'
    }
}

    if (porce_renda > parcela){
        return `Sua renda permite o resgate, o valor da parcela eh: ${parcela} e a taxa eh: ${taxa_adm} e o valor total a pagar eh: ${total}`
    }
    else{
        return `Sua renda não permite resgate, a renda mínima deve ser de: `
    }

}

console.log(Consorcio())