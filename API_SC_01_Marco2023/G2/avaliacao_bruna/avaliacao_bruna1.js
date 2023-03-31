import {question} from "readline-sync"

function main(){
    //entrada
    const valor_hora_aula = Number(question('informe valor base/ hora aula '))
    const nome_professsor = question('nome professor ')
    const horas_semanais = Number(question(' horas semanais '))
    const qualificacao = question(' especializacao, mestrado ou doutorado ')
    const tempo_experiencia = Number(question('tempo esperiencia(meses) '))
    const filhos_menores = Number(question('quantos filhos menores de 6 anos'))
    const valor_plano_saude = Number(question(' valor plano de saude '))

    //processamento

    const valor_incrementado_e = calcular_valor_e(valor_hora_aula)
    const valor_incrementado_m = calcular_valor_m(valor_hora_aula)
    const valor_incrementado_d = calcular_valor_d(valor_hora_aula)
    const experiencia_e = calcular_experiencia_e(valor_incrementado_e)
    const experiencia_m = calcular_experiencia_e(valor_incrementado_m)
    const experiencia_d = calcular_experiencia_e(valor_incrementado_d)
    const valor_qualificacao = calcular_qualificacao(tempo_experiencia, qualificacao, experiencia_e)
    const salario_mensal = calcular_salario_mensal(valor_hora_aula, horas_semanais)
    const auxilio_creche = calcular_auxilio_creche(filhos_menores)
    const auxilio_creche1 = calcular_auxilio_creche1(filhos_menores, auxilio_creche)



    //saida
    console.log(` valor hora professor ${valor_qualificacao}`)
    console.log(`salario base semanal ${valor_qualificacao}`)
    console.log(`salario base mensal ${salario_mensal}`)
    console.log(`auxilio creche ${auxilio_creche1}`)


}

function calcular_valor_e(valor_hora_aula){
    const resul1 = valor_hora_aula * (20 /100)
    return resul1
}

function calcular_valor_m(valor_hora_aula){
    const resul2 = valor_hora_aula * (30 / 100)
    return resul2
}

function calcular_valor_d(valor_hora_aula){
    const resul3 = valor_hora_aula * (50 / 100)
    return resul3 
}

function calcular_experiencia_e(valor_incrementado_e){
    const resul4 = (valor_incrementado_e) + (valor_hora_aula) * (5/100)
    return resul4
}

function calcular_experiencia_m(valor_incrementado_m){
    const resul5 = (valor_incrementado_m) + (valor_hora_aula) * (5/100)
    return resul5
}

function calcular_experiencia_d(valor_incrementado_d){
    const resul6 = (valor_incrementado_d) + (valor_hora_aula) * (5/100)
    return resul6
}

function calcular_valor_qualificacao(tempo_experiencia, qualificacao, experiencia_e){
    if(tempo_experiencia > 6 && qualificacao === 'especializacao'){
     return (`${experiencia_e}`)
    } else if(tempo_experiencia > 6 && qualificacao === 'mestrado'){
        return (`${experiencia_m}`)
    } else if(tempo_experiencia > 6 && qualificacao === 'doutorado'){
        return (`${experiencia_d}`)
    } else{
        return 'erro'
    }
}

function calcular_salario_mensal(valor_hora_aula, horas_semanais){
    const valor_semanal = valor_hora_aula * horas_semanais
    const valor_mensal = 4.5 * valor_semanal
    return valor_mensal
}

function calcular_auxilio_creche(filhos_menores){
    const resul7 = filhos_menores * 700
    return resul7
}

function calcular_auxilio_creche1(filhos_menores, auxilio_creche){
    if(filhos_menores < 6){
        return (`${auxilio_creche}`)
    } else {
        return 'voce nao tem direito a auxilio creche'
    }
}

function calcular_ressarciamento(valor_plano_saude){
    const ressarciamento = (valor_plano_saude) - 2 * ((valor_plano_saude) * (50/100))
    return ressarciamento
}

function ressarciamento1(){
    if(ressarciamento1)
}


//desconto 
function desconto(){
  
}
main()