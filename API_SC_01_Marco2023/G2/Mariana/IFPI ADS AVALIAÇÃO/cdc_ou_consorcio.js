const readline = require("readline-sync")

function main(){
// Entrada
const valor_carro_usado = Number(readline.question("Digite o valor do carro a ser vendido:"))
const perc_tabela_fipe = Number(readline.question("Digite o valor percentual da TABELA FIPE:"))
const valor_carro_novo = Number(readline.question("Digite o valor do novo carro que sera comprado:")) 

// Processamento
const valor1_reajustado = ( valor_carro_usado * ((perc_tabela_fipe)/100) )
// Esse valor acima será a entrada do valor do carro a ser comprado

console.log(`***Apresentamos duas formas do senhor(a) pagar o seu novo carro: CDC (credito direto ao consumidor) ou Consorcio***`)
console.log(`PAGAMENTO CDC:`)
const taxa_cdc = Number(readline.question("Digite o valor da taxa de juros informada (entre 1,2% ate 2,5%):"))
const qtd_parcelas_cdc = Number(readline.question('Digite a quantidade de parcelas:'))

// Processmento CDC

const valor_CDC = ((valor_carro_novo - valor1_reajustado ) * (taxa_cdc/100) * qtd_parcelas_cdc)
const valor_parcelas_mensal_CDC = (((valor_carro_novo - valor1_reajustado ) * (taxa_cdc/100) * qtd_parcelas_cdc))/qtd_parcelas_cdc


// Saída CDC
console.log(`O valor do seu automovel pelo financiamento CDC é de ${valor_CDC} reais.`)
console.log(`PAGAMENTO CONSÓRCIO:`)
const taxa_consorcio = Number(readline.question("Digite o valor da taxa de juros informada (entre 10% a 20%):"))
const qtd_parcelas_consorcio = Number(readline.question('Digite a quantidade de parcelas:'))
// Total a pagar CDC
const total_real_CDC = valor_CDC + valor1_reajustado

// Processamento Consórcio
const valor_taxa_consorcio = (valor_carro_novo - valor1_reajustado ) * (taxa_consorcio/100)
const valor_consorcio = (((valor_carro_novo - valor1_reajustado )) + valor_taxa_consorcio)
const valor_parcela_mensal_consorcio = (((valor_carro_novo - valor1_reajustado )) + valor_taxa_consorcio)/qtd_parcelas_consorcio

// Total a pagar consorcio
const total_real_consorcio = valor_consorcio + valor1_reajustado


// Saída Consórcio
console.log(`O valor do seu automovel pelo financiamento Consórcio é de ${valor_consorcio} reais.`)

// Dados para o cliente 
console.log(`O Valor do Bem é de ${valor_carro_novo}, o valor a ser parcelado sem a entrada é de ${valor1_reajustado}.`)
console.log(`Os juros totais são de:(em CDC) ${valor_CDC} reais, (em Consorcio) ${valor_consorcio} reais.`)
console.log(`Serão ${qtd_parcelas_cdc}parcelas de ${valor_parcelas_mensal_CDC} reais em CDC.`)
console.log(`Serão ${qtd_parcelas_consorcio}parcelas de ${valor_parcelas_mensal_consorcio} reais em Consorcio.`)
console.log(`Valor total em CDC é de ${total_real_CDC} reais. Valor total em Consorcio é de ${total_real_consorcio} `)

// CDC ou Consorcio?
if(total_real_CDC > total_real_consorcio){
    console.log("CDC mais indicado.")
}else(total_real_CDC < total_real_consorcio){
    console.log("CONSORCIO mais indicado.")
}

} main()









