import { question } from "readline-sync";

function main(){
    const valor_bem = Number(question('Valor do bem(R$): '))
    const prazo = Number(question('Prazo em meses: '))
    const taxa_administracao = Number(question('Taxa de administração em %:'))
    const valor_lace_prosposto = Number(question('Valor do lance proposto: '))
    const prazo_parcela = question('Prazo ou parcela: ')
    const renda_mensal = Number(question('Renda mensal: ')) 
    
    calcular_valor_parcelas(prazo,valor_bem,taxa_administracao)

    const total_administracao = calcular_administracao(valor_bem,taxa_administracao)
    console.log(`O valor total da taxa de adminsitração é de R$${total_administracao}`)

    const aprovado_reprovado = renda_parcela(prazo,valor_bem,taxa_administracao,renda_mensal)
    console.log(`Renda ${aprovado_reprovado} o resgate! `)
    




}

function calcular_valor_parcelas(prazo,valor_bem,taxa_administracao){
    let total
    let parcelas

    total = (valor_bem * (taxa_administracao/100)) + valor_bem
    parcelas = total / prazo

    console.log(`O total a ser pago é de R$${total.toFixed(2)}`)
    console.log(`O valor das parcelas será de ${parcelas.toFixed(2)}`)

}

function calcular_administracao(valor_bem,taxa_administracao){
    let total
    total = valor_bem * taxa_administracao

    return total
}

function renda_parcela(prazo,valor_bem,taxa_administracao,renda_mensal){
    let total
    let parcelas
    let resultado

    total = (valor_bem * taxa_administracao) + valor_bem
    parcelas = total / prazo

    if(0.3 * renda_mensal < parcelas){
        resultado = 'NÃO PERMITE.'
    }else{
        resultado = 'PERMITE.'
    }
    return resultado
}
    

main()