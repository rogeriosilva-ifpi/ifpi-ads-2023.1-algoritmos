
import {question} from 'readline-sync'
function main(){
    const valorVeiculo = Number(question('Digite o valor do veículo: R$ '));
    const rendaComprador = Number(question('Digite a renda mensal do comprador: R$ '));
    const servidor = question('Voce e servidor publico ou privado: ')
    const entrada = Number(question('Digite o valor da entrada: R$ '));
    const percentualSaida = Number(question('Digite o percentual da parcela final (saída): '));
    const prazoFinanciamento = Number(question('Digite o prazo de financiamento (em meses): '));
    const taxaJuros = Number(question('Digite a taxa de juros ao mês: '));
    const inflacao = Number(question('Digite a inflação do mês: '));
//PROCESSAMENTO 

const situacao = verificar_situacao(valorVeiculo, entrada, percentualSaida)
const valorFinanciado = valorVeiculo - entrada;
const valorSaida = ( percentualSaida / 100) * valorVeiculo;
const valorFinanciadoSemIOF = valorFinanciado - valorSaida;
const valorIOF = valorFinanciado * inflacao;
const valorFinanciadoComIOF = valorFinanciadoSemIOF * inflacao;
const parcelas = valorFinanciadoComIOF/ prazoFinanciamento
const valorTotalAPagar = entrada + parcelas + valorSaida;
const verif_renda_parcelas = verificar_parcelas_renda(renda, parcelas)

//SAIDA
console.log(situacao)
console.log(`Valor do veículo: R$ ${valorVeiculo.toFixed(2)}`);
  console.log(`Renda do comprador: R$ ${rendaComprador.toFixed(2)}`);
  console.log(`Valor da entrada: ${entrada}`)
  console.log(` O valor financiado sem IOF e de ${valorFinanciadoSemIOF.toFixed(2)}`)
  console.log(`O valor ficanciado com IOF e de ${valorFinanciadoComIOF.toFixed(2)}`)
  console.log( `O valor das parcelas serao de ${parcelas.toFixed(2)}`)
  console.log( ` O valor total que sera pago é de ${valorTotalAPagar.toFixed(2)}`)
  console.log(verif_renda_parcelas )
}
//FUNÇOES
function verificar_parcelas_renda(renda,parcelas){
    if(parcela > renda * 0.30 ){
        return 'habilitado'
    }else{
        return 'parcela e maior que 30% do salario'
    }
}

function verificar_situacao(valorVeiculo, entrada, percentualSaida){
    if( entrada > valorVeiculo * 0.30 && percentualSaida < 30 ){
        return `SIM a entrada e saida sao validos`
    }else{
        return 'Os valores da entrada e da saidas sao invalido, lembre-se da minimas e maximas '
    }
}
main()
// ACABOU TEMPO

  