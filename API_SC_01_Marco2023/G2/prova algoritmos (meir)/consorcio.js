import { question } from "readline-sync"
function main(){
    cabecalho()
// Entrada
    const percentual = obter_numero('Informe o percentual FIPE que vai vender seu Argo: ')
    const meses = obter_numero('Informe a quantidade de meses que deseja parcelar: ')
    const taxa_juros = obter_numero('Informe a taxa de juros ao mês: ')
    const taxa_adm = obter_numero('Informe a taxa Administração Consórcio: ')

// Processamento
    const incremento = calcular_incremento(qualificacao,valor_hora,tempo) 
    

// Saída
console.log()
console.log(`O valor do bem é de R$ 185000.`)
console.log()
console.log(`O valor a ser parcelado é de ${salario_semanal}.`)
console.log()

}

function cabecalho(){
    console.log('------------------------------------------------------------------------------------')
    console.log('Aluna: Meir Naã Castro Leandro (questão 2)')
    console.log()
}
function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}
function valor_parcelado_cdc(percentual, taxa_juros,meses){
 let obter_cdc = (185000 * (taxa_juros/100) * meses)-  (percentual * 185000)  
 return obter_cdc 
}
function valor_parcelado_consorcio(){
    
}

main() 