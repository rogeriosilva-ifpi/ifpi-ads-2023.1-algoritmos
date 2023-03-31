import {question} from 'readline-sync'
// ENTRADA
function main(){
const valor_bem = Number(question('Insira o valor do bem em R$'))
const prazo = Number(question('Insira a quantidade de meses que voce deseja parcelar: '))
const taxa_adm = Number(question('Insira a porcentagem da taxa de administracao'))
const lance  = Number(question('Insira o valor que voce deseja dar de lance: '))
const abater = question('Insira 1 se deseja abater o lance no prazo ou 2 se deseja abater o valor na parcela: ')
const renda = Number(question('Insira o valor da sua renda mensal:  '))
//PROCESSAMENTO/SAIDA

const valor_final = ((taxa_adm/ 100)+ 1) * valor_bem
const taxa_final = valor_final - valor_bem
const valor_parcela_final = valor_final / prazo
const verificarabater = verificar_abatimento(abater, valor_parcela_final, lance, prazo)
console.log(`O valor final do bem sera de ${valor_final}`)
console.log( ` A taxa de ADM sera de ${taxa_final}`)
console.log(`O valor da parcela sera de  ${verificarabater}`)
const verifica_retirada = verificar_retirada(renda,verificarabater)
console.log(verifica_retirada)
const verifica_prazo = verificar_prazo( prazo,lance , valor_parcela_final, abater)
console.log(`A quantidade de parcelas sera de ${verifica_prazo}`)

}
function verificar_abatimento(abater, valor_parcela_final, lance, prazo){
    let abater_valor = valor_parcela_final - (lance/ prazo)

//ABATER PRAZO
    if( abater === '1'){
        return valor_parcela_final;//Tem q colocar o tofixed
//ABATER NO VALOR
    }else if( abater === '2' ){
        return  abater_valor

    }else{
        return `valor INVALIDO`
    }

}
function verificar_retirada(renda,verificarabater){
    if(verificarabater < (renda * 0.3000001)){
        return `Sim vc esta apto a retirar o veiculo`
    }else{
        return `Nao, vc nao esta apto a retirar o veiculo`
    }
}
function verificar_prazo( prazo,lance , valor_parcela_final, abater){
    const abater_prazo = prazo - (lance/ valor_parcela_final)
    if(abater === 1){
        return `A quatidade de parcelas sera de ${abater_prazo}`
    }else if(abater === 2 ){
        return  `A quantidade de parcelas sera de ${prazo}`
    }else{
        return `Valor INVALIDO`
    }
}

main()