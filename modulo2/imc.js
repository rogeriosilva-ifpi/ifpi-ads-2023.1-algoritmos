import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const altura = obter_numero('Altura: ')
    const peso = obter_numero('Peso: ')

    // Processamento
    const imc = calcular_imc(peso, altura)

    // Saída
    print(`Seu IMC é ${imc.toFixed(2)}`)
    rodape()
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function calcular_imc(peso, altura){
    // PEMDAS
    const resultado = peso / altura**2
    return resultado
}

function cabecalho(){
    console.log('####### IMC #######')
    console.log('-------------------')
}

function rodape(){
    console.log()
    console.log('>>>>>>>-------------------<<<<<<<')
    console.log('--- fim por fim feito por mim ---')
    console.log('>>>>>>>-------------------<<<<<<<')
}

function print(conteudo){
    console.log(conteudo)
}

main()