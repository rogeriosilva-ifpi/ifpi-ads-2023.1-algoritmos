import readlinesync from 'readline-sync'
//Consórcio
function main()
{
    //ENTRADA

    const valor_inicial_do_bem = Number(readlinesync.question('Digite o valor do bem'))
    const meses = NumbeNumber(readlinesync.question('Digite a quantidade de meses que deseja financiar: '))
    const taxa_administracao = NumbeNumber(readlinesync.question('Digite a taxa de admistracao(%): '))
    const valor_do_lance = NumbeNumber(readlinesync.question('Digite o valor do lance que deseja fazer: '))
    const opcao = NumbeNumber(readlinesync.question('Digite 1 caso dese deseja fazer um lance ou 0 caso não deseje: '))
    const valor_renda = Number(readlinesync.question('Digite o valor da sua renda: '))

    //PROCESSAMENTO

    const_valor_a_pagar_taxa_adminstracao = (taxa_administracao * valor_inicial_do_bem)/100 
    const juros = calcular_juros(valor_inicial_do_bem)
    const valor_das_parcelas = parcelas(valor_do_bem_parcelado, abatimento, valor_inicial_do_bem) 
    const valor_final_a_pagar = (valor_inicial_do_bem + juros)  

    console.log(`O valor das parcelas é de: ${valor_das_parcelas}`)
    console.log(`O total a pagar é de: ${valor_final_a_pagar}`)
    console.log(`O valor da taxa de administração é de: ${const_valor_a_pagar_taxa_adminstracao}`)

    if(opcao === 1 && valor_do_lance <= (valor_renda ** 0.3) )
    {
        console.log(`É permitido fazer o resgate`)

    }else
    {
        console.log(`Não é permitido fazer o resgate e o valor. O valor mínimo de renda para o aceito do resgate é de: ${}`)
    }
    

    if(abatimento === 0)
    {

    }else if(abatimento === valor_do_lance)
    {

    }

//SAÍDA



}
function calcular_juros(valor_inicial_do_bem)
{
    valor_juros = valor_inicial_do_bem * 0.15  
    return valor_juros
}

function parcelas(valor_do_bem_parcelado, abatimento, valor_inicial_do_bem)
{
    let valor_do_bem_parcelado = valor_inicial_do_bem - abatimento
    const parcelas_a_pagar = valor_inicial_do_bem / meses  //quantos parcelas para terminar o consórcio
    return parcelas_a_pagar
}

/* function calcular_resgate_do_veiculo(valor_inicial_do_bem, valor_renda)
{
    const 
}
*/

main()