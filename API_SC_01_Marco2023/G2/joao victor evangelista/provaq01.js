/* João Victor Evangelista Gomes*/
import {question} from "readline-sync";

function main(){
    const nome = question('Insira seu nome: ')
    const valor_hora = Number(question('insira o valor da sua hora/aula: R$'))
    const horas_semanais = Number(question('insira quantas horas de aula semanais voce tem: '))
    const aulas_semanais = Number(question('insira a quantidade de aulas de você deu na semana: '))
    const qualificacao = Number(question('insira sua qualificação(E, M ou D): '))
    const tempo_exper = Number(question('insira seu tempo de experiência: '))
    const qtd_filhos_menor6 = Number(question('insira a quantidade de filhos menores de 6 anos que você possui: '))
    const plano_saude = Number(question('insira o valor do seu plano de saúde: R$'))

    // Processamento
    const salario_base = calcular_base_salarial(valor_hora, horas_semanais, qualificacao,tempo_exper)
    const valor_hora_professor = calcular_valor_hora_prof(qualificacao, valor_hora)
    const salario_base_semanal = calcular_salario_base_semanal(salario_base)
    const auxilio_creche = calcular_auxilio_creche(qtd_filhos_menor6)
    const ressarcimento_saude = calcular_valor_plano_saude(plano_saude)
    const combustivel = calcular_auxilio_combustivel(aulas_semanais)
    const salario_bruto = calcular_salario_bruto(salario_base, auxilio_creche, ressarcimento_saude, combustivel)
    const previdencia_social = calcular_previdencia_social(salario_base)
    const imposto_de_renda = calcular_imposto_renda(salario_base)
    const descontos = calcular_total_descontos(previdencia_social, imposto_de_renda)
    const salario_liquido = calcular_salario_liquido(salario_bruto, previdencia_social, imposto_de_renda)

    // saída
    console.log(`\nOla ${nome},
    ----------GANHOS----------
     valor hora/professor: R$${valor_hora_professor.toFixed(2)}
     salario base semanal: R$${salario_base_semanal.toFixed(2)}
     salario base mensal: R$${salario_base.toFixed(2)}
     auxilio creche: R$${auxilio_creche.toFixed(2)}
     ressarcimento saude: R$${ressarcimento_saude.toFixed(2)}
     auxilio combustivel: R$${combustivel.toFixed(2)}
     salario bruto: R$${salario_bruto.toFixed(2)}
     ----------DESCONTOS----------
     Previdencia: R$${previdencia_social.toFixed(2)}
     Imposto de renda: R$${imposto_de_renda.toFixed(2)}
     Total descontos: R$${descontos.toFixed(2)}
     ----------SALARIO LIQUIDO----------
     Salario liquido: R$${salario_liquido.toFixed(2)}\n`)
}
function calcular_valor_hora_prof(qualificacao, valor_hora){
    if(qualificacao == 'E'){
        return (valor_hora * 0.2) + valor_hora
    }else if(qualificacao == 'M'){
        return (valor_hora * 0.3) + valor_hora
    }else{return (valor_hora * 0.5) + valor_hora}
}
function calcular_salario_base_semanal(salario_base){
    return salario_base / 4.5
}
function calcular_base_salarial(valor_hora, horas_semanais, qualificacao,tempo_exper){
    if(qualificacao == 'E'){
        return (((valor_hora * 0.2) + (tempo_exper * 0.05)) * horas_semanais) * 4.5
    } else if(qualificacao == 'M'){
        return (((valor_hora * 0.3) + (tempo_exper * 0.05)) * horas_semanais) * 4.5
    } else {return (((valor_hora * 0.5) + (tempo_exper * 0.05)) * horas_semanais) * 4.5}
}
function calcular_auxilio_creche(qtd_filhos_menor6){
    return 700 * qtd_filhos_menor6
}
function calcular_valor_plano_saude(plano_saude){
    if(plano_saude > 1000){
        return 500
    }else{
        return plano_saude * 0.5
    }
}
function calcular_auxilio_combustivel(aulas_semanais){
    return Math.floor(aulas_semanais / 8) * 30
}
function calcular_salario_bruto(salario_base, auxilio_creche, ressarcimento_saude, combustivel){
    return salario_base + auxilio_creche + ressarcimento_saude + combustivel
}
function calcular_previdencia_social(salario_base){
    if(salario_base <= 1302){
        return (salario_base * 7.5 / 100)
    }else if(salario_base > 1302 && salario_base <= 2500){
        return (salario_base * 9 / 100)
    }else if(salario_base > 2500 && salario_base <= 3900){
        return (salario_base * 12 / 100)
    }else if(salario_base > 3900 && salario_base <= 7500){
        return (salario_base * 14 / 100)
    }
}
function calcular_imposto_renda(salario_base){
    if(salario_base <= 5000){
        return salario_base * (0 / 100)
    }else{
        return (salario_base % 5000) * (27.5/100)
    }
}
function calcular_salario_liquido(salario_bruto, previdencia_social, imposto_de_renda){
    return (salario_bruto - previdencia_social) - imposto_de_renda
}
function calcular_total_descontos(previdencia_social, imposto_de_renda){
    return previdencia_social + imposto_de_renda
}
main()