import { question } from 'readline-sync'
// Entrada: 5 6 7 8
function main(){
    const entrada = question('Valores: ')
    const valores = entrada.split(' ')
    const num1 = Number(valores[0])
    const num2 = Number(valores[1])
    const num3 = Number(valores[2])
    const num4 = Number(valores[3])

    console.log(num1)
    console.log(num2)
    console.log(num3)
    console.log(num4)
}

main()