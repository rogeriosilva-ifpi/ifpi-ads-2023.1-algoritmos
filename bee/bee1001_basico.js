import { question } from 'readline-sync'

function main(){
    // Entrada
    const num1 = obter_numero()
    const num2 = obter_numero()

    // Processamento 
    const soma = num1 + num2

    // Saída
    print(`X = ${soma}`)

}

function obter_numero(){
    return Number(question('Número: '))
}

function print(valor){
    console.log(valor)
}

main()