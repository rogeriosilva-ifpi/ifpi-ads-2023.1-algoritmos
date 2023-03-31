const input = require('prompt-sync')()

function main(){
    //ENTRADA
    const valor_moto = Number(input("Digite o valor do bem R$: "))
    const prazo = Number(input("Parcelado em quantos meses: "))
   const taxa_administracao = Number(input("Qual a taxa de administração: "))
    //const valor_lance = Number(input("Qual o valor do lance: "))
    //const prazo_parcela = Number(input("Se deseja manter o prazo digite: prazo, se deseja manter as parcelas digite: parcela:  "))
    const renda_mensal = Number(input("Qual a sua renda mensal R$: "))


    //Processamento
    const valor_com_taxa = calcular_valor_total_com_taxa_administracao(taxa_administracao, valor_moto)
    const parcelas = calcular_parcelas(valor_com_taxa, prazo)
    const valor_taxa_administracao = calcular_taxa_administracao(valor_moto, taxa_administracao)
    const resgate = calcular_resgate_veiculo(renda_mensal, parcelas)


    //Saída
    console.log(`O total a pagar com a taxa de administração é R$ ${valor_com_taxa}`)
    console.log(`Cada parcela será no valor de R$ ${parcelas}`)
    console.log(`O valor da taxa de administração é R$ ${valor_taxa_administracao}`)
    console.log(resgate)








}
main()

function calcular_parcelas(valor_com_taxa, prazo){
    const calculo_parcelas = valor_com_taxa/ prazo
    return calculo_parcelas
}


function calcular_valor_total_com_taxa_administracao(taxa_administracao, valor_moto){
    const valor_total = valor_moto + (valor_moto *(taxa_administracao/100))
    return valor_total
}

function calcular_taxa_administracao(valor_moto, taxa_administracao){
    const valor_taxa_administracao = valor_moto * (taxa_administracao / 100)
    return valor_taxa_administracao

}

function calcular_resgate_veiculo(renda_mensal, parcelas){
    const minimo = renda_mensal * 0.3
    

    if (parcelas <= minimo){
        return 'Sua renda é o suficiente para resgate do veículo'

    }else{
        
        return `Sua renda é insuficiente para resgate do veiculo, sua renda mínima precisa ser ${minimo} a mais do que ganha atualmente`

    }
}


