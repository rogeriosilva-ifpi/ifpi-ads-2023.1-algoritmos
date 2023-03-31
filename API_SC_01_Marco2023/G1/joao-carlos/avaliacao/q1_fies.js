import { question } from "readline-sync"

function main(){

    const duracao_curso = Number(question("Digite a duracao do curso em anos: "))
    const mensalidade = Number(question("Digite o valor da mensalidade em reais: "))
    const renda_familiar = Number(question("Digite a sua renda familiar em reais: "))
    const familia_num = Number(question("Digite quantas pessoas possuem na familia: "))
    const ano_inicio = Number(question("Digite o ano em que entrou no curso: "))
    const semestre_inicio = Number(question("Digite o semestre inicial: "))
//########################
    const selic = 1375 / 100
    const salario_min = 1302
    const parcelas_fixas = ((duracao_curso * 12) / 3) * 150
    const carencia = 150 * 6
    const valor_curso = mensalidade * (duracao_curso * 12)
    const juros_fies = juros_selic(selic,salario_min,renda_familiar)
    const valor_total = (valor_curso + juros_fies) - (parcelas_fixas + carencia)
    const parcelas = 4 * duracao_curso
    const renda_minima = valor_total / 16
    const parcela_maxima = valor_total / 16 * 0.10
    const ano_iniciar_pagar = ano_inicio + duracao_curso
    const ano_concluir_pagar = ano_iniciar_pagar + 1
    const aprovado_ou_nao = aprovado_fies(salario_min,renda_familiar,familia_num)

    console.log(aprovado_ou_nao)
    console.log(`O juros é de ${juros_fies.toFixed(2)}%`)
    console.log(`Suas parcelas fixas serao no total ${parcelas_fixas} e a carencia custará ${carencia} `)
    console.log(`O curso custará ${valor_total.toFixed(2)} e poderá ser parcelado em até ${parcelas}x`)
    console.log(`A renda mínima para comecar a pagar é de ${renda_minima.toFixed(2)} totalizando ${parcelas} parcelas de ${parcela_maxima.toFixed(2)}`)
    console.log(`Irá comecar a pagar em ${ano_iniciar_pagar} e irá terminar o pagamento no meio de ${ano_concluir_pagar}`)

}

function aprovado_fies(salario_min,renda_familiar,familia_num){
    if (renda_familiar < ((salario_min * 3) * familia_num)){
        return 'APROVADO a participar do sistema fies'
    } else {
        return 'REPROVADO a participar do fies'
    }
}

function juros_selic(selic,salario_min,renda_familiar,juros){
    if (renda_familiar < 1.5 * salario_min){
        juros = 0.10 * selic
    } else if (renda_familiar < 2 * salario_min){
        juros = 0.15 * selic
    } else if (renda_familiar < 2.5 * salario_min){
        juros = 0.20 * selic
    } else { juros= 0.25 * selic}
    return juros
}




main()