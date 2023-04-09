import prompt from 'prompt-sync'
const input = prompt()

function main()
{
    // entrada do veiculo
    const valor_veiculo = Number(input('Valor Veículo: '))
    const renda = Number(input('Renda do Comprador: '))
    const cargo = Number(input(' Se é Servidor Público(1) ou Privado(2): '))
    const entrada = Number(input('Quanto deseja dar de Entrada: '))
    
    // parcelamento 
    const percentual_saida = Number(input('Qual percentual deixar para saída: '))
    const meses_parcela = Number(input('Meses a dividir: '))
    
    // valor final
    const taxa_juros = Number(input('Qual a taxa de juros do financiamento (%): '))
    const inflacao = Number(input('Qual a inflação do mês (%): '))



    //FUNÇÕES
    const Fina_Iof = financiamento_sem_IOF(valor_veiculo, entrada) + IOF(valor_veiculo, entrada, taxa_juros)
    const parcela = parcela(meses_parcela, valor_veiculo, entrada) * meses_parcela
    const tudo = valor_entrada(valor_veiculo, entrada) + parcela(meses_parcela, valor_veiculo, entrada) + saida_vec(inflacao, taxa_juros, valor_veiculo, percentual_saida)

    //saida
    console.log('valor de entrada(% - R$): ',  valor_entrada(valor_veiculo, entrada))
    console.log(' valor a ser financiado sem IOF (% - R$): ',  financiamento_sem_IOF(valor_veiculo, entrada))
    console.log('valor do IOF (% - R$): ', IOF(valor_veiculo, entrada, taxa_juros))
    console.log('valor a ser financiado com IOF (% - R$): ', Fina_Iof)
    console.log('valor da saída (% - R$): ', saida_vec(inflacao, taxa_juros, valor_veiculo, percentual_saida))
    console.log('Parcelamento:', parcela(meses_parcela, valor_veiculo, entrada))
    console.log('Soma das Parcelas:', parcela)
    console.log('Total a ser pago: ', tudo)
    console.log('Se parcela cabe na renda do comprador: ', validar_renda(renda, valor_veiculo, meses_parcela))
}

    function validar_valores(cargo)
    {
        if(cargo === 1 || cargo == 2)
        {
            return `${valor_entrada(valor_veiculo, entrada)}`
        } else
        {
            return `Cargo INVÁLIDO`
        }
    }

    function valor_entrada(valor_veiculo, entrada)
    {
        const valor = valor_veiculo - 0.7
        console.log("Entrada deve ser de 30% do veiculo:", valor)
        console.log('Sua entrada:', entrada)
    }

    function financiamento_sem_IOF(valor_veiculo, entrada)
    {
        const fin = (valor_veiculo - entrada) 
        const sem = fin + 0.138
        console.log(sem)
    }

    function IOF(valor_veiculo, entrada, taxa_juros)
    {
        const fina = (valor_veiculo - entrada) + 0.138
        const iof = fina + 0.0118 + taxa_juros
        console.log('Taxa durante 30 dias(mes): ', 0.01118 * 30, 'Por dia: ','0.01118¨%')
        console.log('IOF: ',iof)
    }

    function parcela(meses_parcela, valor_veiculo, entrada)
    {
        const ent = valor_veiculo - entrada
        const par = ent / meses_parcela
        console.loh(par)
    }

    function saida_vec(inflacao, taxa_juros, valor_veiculo, percentual_saida)
    {
        const veic = valor_veiculo - 0.7
        const juros = taxa_juros + inflacao
        const saida = veic + juros + percentual_saida
        console.log(saida)
    }

    function validar_renda(renda, valor_veiculo, meses_parcela)
    {
        const valid = renda - 0.3
        const veiculo = (valor_veiculo - 0.7) / meses_parcela
        if( valid >= veiculo)
        {
            return `Processo aceito. Renda aceita!!`
        } else
        {
            return `Processo não aceito. Renda miníma não aceita.`
        }
    }
   

main()