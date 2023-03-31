import { question } from "readline-sync"

const valorconsorcio = Number(question('Valor do consorcio:'))
const numparcelas = Number(question('Número de parcelas: '))
const taxajurosanual = Number(question('Taxa do juros:: '))


const taxajurosmensal = taxajurosanual / 12
const valorparcela = valorconsorcio / numparcelas

const valortotaljuros = valorconsorcio * taxajurosmensal * numparcelas

const valortotalconsorcio = valorconsorcio + valortotaljuros

console.log('O valor total do consorcio em (R$) é: ${valortotalconsrcio.toFixed(2)} com parcela de (R$): ${valorparcela.toFixed(2)} por mes')