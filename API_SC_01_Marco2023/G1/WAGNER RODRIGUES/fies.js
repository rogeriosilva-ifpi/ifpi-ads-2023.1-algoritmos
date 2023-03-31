const input = require('prompt-sync')()

function main(){

    //ENTRADA
    //const duracao_curso = Number(input("Digite a duração do curso em anos, ex: 4 ou 2.5 "))
    //const valor_mensalidade = Number(input("Qual o valor da mensalidade: "))
    const taxa_selic = Number(input("Qual a taxa SELIC: "))
    const salario_minimo_vigente = Number(input("Qual o salário mínimo vigente: "))

    const quantidade_pessoas_familia = Number(input("Quantas pessoas tem sua família: "))
    const renda_familia = Number(input("Qual a sua renda familiar? "))
    
    //const ano_inicio_curso = Number(input("Qual o ano você ingressou no curso: "))
    //const semestre_inicio_curso = Number(input("Qual o semestre de início do curso: ")) 


    //Processamento
    

    const renda_per_capita = calcular_renda_per_capita_familiar(renda_familia, quantidade_pessoas_familia)

    const taxa_juros = calcular_taxa_juros(renda_per_capita, salario_minimo_vigente, taxa_selic)
    
    const habilitado = requisito_renda_fies(salario_minimo_vigente,renda_per_capita)



    console.log(taxa_juros)



    //Saída
    console.log(habilitado)




}
main()

function calcular_renda_per_capita_familiar(renda_familiar, quantidade_pessoas_familia){

    const renda_per_capta = renda_familiar / quantidade_pessoas_familia
    return renda_per_capta


}

function calcular_taxa_juros(renda_per_capita, salario_minimo_vigente, taxa_selic){
    const ate_um_salario_e_meio = 1.5 * salario_minimo_vigente
    const ate_dois_salarios = 2 * salario_minimo_vigente
    const ate_dois_salarios_e_meio = 2.5 * salario_minimo_vigente

    if (renda_per_capita <= ate_um_salario_e_meio){
        const juros = salario_minimo_vigente + (salario_minimo_vigente * (10/100))
           return juros
    }else if(renda_per_capita > ate_dois_salarios && renda_per_capita <= ate_dois_salarios){
        const juros = salario_minimo_vigente + (salario_minimo_vigente * (15/100))
        return juros
    }else if(renda_per_capita > ate_dois_salarios && renda_per_capita <= ate_dois_salarios_e_meio){
        const juros = salario_minimo_vigente + (salario_minimo_vigente * (20/100))
        return juros
    }else{
        const juros = salario_minimo_vigente + (salario_minimo_vigente * (25/100))
        return juros
    }


}

function requisito_renda_fies(salario_minimo_vigente,renda_per_capita){

    const limite = salario_minimo_vigente * 3
    if (renda_per_capita <= limite){
        return 'Você está habilitado a contratar o FIES'


    }else{
        return 'Você não está habilitado a contratar o FIES'
    }
}




