import readlinesync from 'readline-sync'

//Fies
//Selic: 13.75% //Salário Mínimo: 1302

function main() 
{
    //Entrada
    let selic = 0.1375
    let salário_minimo = 1302
    const duracao_curso = Number(readlinesync.question('Digite a duração do seu curso em anos: '))
    const valor_mensalidade = Number(readlinesync.question('Digite o valor da mensalidade: '))
    const renda_familiar = Number(readlinesync.question('Digite a sua Renda Familiar(R$): '))
    const membros_familia = Number(readlinesync.question('Digite quantas pessoas compõem sua família: '))
    const inicio_curso = Number(readlinesync.question('Digite o ano/semetres de início do curso: '))
    
    //Processamento
    if(renda_familiar >= 0 && renda_familiar < (3 * salário_minimo))
    {
        console.log("Você não está habilitado ao contrato do FIES.")
    }else
    {
        console.log("Você está habilitado ao contrato do FIES.")
    }


    if(renda_familiar >= 0 && renda_familiar <= (1.5 * salário_minimo))
    {
        let juros = (0.1 * selic)
        
    } else if(renda_familiar > (1.5 * salário_minimo) && renda_familiar <= (2 * salário_minimo)) 
    {
        let juros = (0.15 * selic)

    } else if(renda_familiar > (2 * salário_minimo) && renda_familiar <= (2.5 * salário_minimo))
    {
        let juros = (0.2 * selic)
        
    } else
    {   
        let juros = (0.25 * selic)
        
    }

    //Saída

    let divida = calcular_divida_com_juros(duracao_curso, valor_mensalidade, juros)    
    console.log(`O valor da dívida a ser financiada é de: ${divida}`)
}
function calcular_divida_com_juros(duracao_curso, valor_mensalidade, juros)
{
    const valor_divida = ((12 * duracao_curso * valor_mensalidade) + juros * (12 * duracao_curso * valor_mensalidade) - 150)
    return valor_divida 
}
main()