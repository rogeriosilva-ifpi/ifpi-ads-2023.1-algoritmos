import { question } from "readline-sync";

function main(){
    const valorCarro = 185000
    const percentualFIPE = Number(question('Percentual FIPE que vai vender seu ARGO:'))
    const prazo = Number(question('Prazo (em meses):'))
    const juros = Number(question('Taxa de juros (1.2% a 2.5%):'))
    const taxaADM = Number(question('Taxa de Administração Consórcio:'))

    const valorParaParcelar = ValorAParcelar(valorCarro,percentualFIPE)
    const entrada= (percentualFIPE/100 * 89000)

    
    const valorJuros = obterJuros(valorParaParcelar,juros,prazo)
    const parcelaCDC = parcela(valorParaParcelar,valorJuros,prazo)
    const cdcTotal = (parcelaCDC * prazo)


    const jurosConsorcio = obterValorJuros(valorParaParcelar,taxaADM)
    const consorcioTotal = (obterValorTotal(valorParaParcelar,jurosConsorcio))
    const parceladoConsorcio = parcelaConsorcio(consorcioTotal,prazo)
    
    //Saída
    console.log(`Valor do Bem: R$ ${valorCarro}`)
    console.log(`Valor a ser parcelado: R$ ${valorParaParcelar}`)

    //CDC
    console.log(`-----CDC-----`)
    console.log(`Juros totais: R$ ${valorJuros}`)
    console.log(`Parcelamento: ${prazo} de R$ ${parcelaCDC}`)
    console.log(`Total a pagar : (R$ ${entrada} + Prestações : R$ ${cdcTotal})`)

    //Consorcio
    console.log(`---CONSORCIO---`)
    console.log(`Juros totais: R$ ${jurosConsorcio}`)
    console.log(`Parcelamento: ${prazo} prestações de R$ ${parceladoConsorcio}`)
    console.log(`Total a pagar : (R$ ${entrada} + Prestações : R$ ${consorcioTotal})`)
    
    if (consorcioTotal > cdcTotal){
        console.log(`O modo CDC é mais vantojoso!`)
    }else if (cdcTotal > consorcioTotal){
        console.log(`O modo consórcio é mais vantajoso!`)
    }else{
        console.log(`Ambos dão o mesmo valor, nenhum é mais vantajoso.`)
}
}
main()

function ValorAParcelar(valorCarro,percentualFIPE){
    const valor = (valorCarro - (89000 * percentualFIPE/100))  //Valor descontado da entrada
    return valor
}
function obterJuros(valorParaParcelar,juros,prazo){ //Juros CDC
    return (((valorParaParcelar/prazo) * juros/100)) 
}
function parcela(valorParaParcelar,valorJuros,prazo){  //Parcela c juros CDC
    const valorCJuros = ((valorParaParcelar/prazo) + valorJuros)
    return valorCJuros
}



function obterValorJuros(valorParaParcelar,taxaADM){  //Juros da Taxa de ADM
    return (valorParaParcelar * (taxaADM/100))
}

function obterValorTotal(valorParaParcelar,jurosConsorcio){   //Valor total do consorcio c juros
    return (valorParaParcelar + jurosConsorcio)
}
function parcelaConsorcio(consorcioTotal,prazo,){  //Parcela CONSORCIO
    return (consorcioTotal/prazo)

}

