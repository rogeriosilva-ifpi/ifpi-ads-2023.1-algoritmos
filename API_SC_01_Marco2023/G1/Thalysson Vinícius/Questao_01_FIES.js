
import { question } from "readline-sync";

function main(){
    cabecalho ()
    //  ENTRADA
    const tempo_de_curso = Number ( question ( " Qual a duracao do curso? : "))
    const mensalidade = Number ( question ( " Qual o valor da mensalidade?: "))
    const taxa_selic = Number ( question ( " Qual a taxa selic vigente?: "))
    const salario_minimo = Number ( question ( " Qual o valor do salario minimo:? "))
    const renda_familiar = Number ( question ( " Qual a renda familiar?: "))
    const quant_pessoas = Number ( question ( "Quantas pessoas moram na casa? : "))
    const Ano_inicio = Number ( question ( " Qual o ano de inicio?: "))
    const semaestre_inicio = Number ( question ( " Qual semestre de inicio? "))
    // PROCESSAMENTO

    const valor_do_curso_ano = v_curso_ano (mensalidade )
    const juros_curso_aa  = j_c_aa (valor_do_curso_ano, taxa_selic,calculo_renda,salario_minimo) 
    const calculo_renda = c_renda (renda_familiar, quant_pessoas)
    const situacao = veirificacao (calculo_renda,salario_minimo)
    const valor_a_ser_financiado = v_do_financiamento (juros_curso_aa, tempo_de_curso)
    const valor_total_de_juros = v_tt_juros ( valor_a_ser_financiado,valor_do_curso_ano,tempo_de_curso)
    

    //SAIDA
    console.log ("")
    console.log ("")
    print (`Para o curso solicitado sua situacao é:${situacao} e no prazo de ${tempo_de_curso}em anos o total a ser financiado sera: R$${valor_a_ser_financiado}%  `)
    print (`com um total de juros de:R$${valor_total_de_juros} para uma renda de ${calculo_renda} e tendo um juros anual de = R$${juros_curso_aa},00`)
    console.log ("")
    console.log ("")

}
function v_curso_ano (mensalidade ) {
    const vca = mensalidade*12
       return vca
}    
function  j_c_aa (valor_do_curso_ano, taxa_selic,calculo_renda,salario_minimo) {
   // Svrificadcao para criterio de juros de acordo com a renda
   //considerando ja o montante
   if (calculo_renda <=1.5*salario_minimo){
        const j_caa = valor_do_curso_ano*( 1+((taxa_selic/1000)*12) )
        return j_caa
   }
   else if (1.5*salario_minimo < calculo_renda <=2*salario_minimo){
    const j_caa = valor_do_curso_ano*( 1+((taxa_selic/1015)*12) )
    return j_caa
   }
   else if (2*salario_minimo < calculo_renda <=2.5*salario_minimo){
    const j_caa = valor_do_curso_ano*( 1+((taxa_selic/1020)*12) )
    return j_caa
   }
   else  (2.5*salario_minimo < calculo_renda ){
    const j_caa = valor_do_curso_ano*( 1+((taxa_selic/1025)*12) )
    return j_caa
   }
}    
function c_renda (renda_familiar, quant_pessoas){
    const rda = renda_familiar / quant_pessoas
    return rda
}
function veirificacao (calculo_renda,salario_minimo){
    if(calculo_renda <=3*salario_minimo ){
        return print (`Aprovado`)
    }else
        return print ( `Nao aprovado`)
}
function v_do_financiamento (juros_curso_aa, tempo_de_curso){
    const v_f =  juros_curso_aa * tempo_de_curso
return v_f
}
function v_tt_juros ( valor_a_ser_financiado,valor_do_curso_ano,tempo_de_curso){
    const vttj =  valor_a_ser_financiado -valor_do_curso_ano*tempo_de_curso
    return vttj
}

function print (texto){
    console.log( texto)
}
function cabecalho () {
    console.log ("")
    console.log("///////// 1º Avalição de introdução a computação//////////")
    console.log("///////// Aluno : Thalysson V O Brito//////////")
    console.log("///////// Questao 01- FIES //////////")
    console.log ("")
}

main ()