import { question } from "readline-sync"


function main() {
    const hora_aula = Number(question('Digite o valor da hora aula:  '))
    const nome = question('Nome do Professor: ')
    const horas_semanais = Number(question('Digite a quantidade de horas semanais:  '))
    const qualificacao = question('Digite a qualificação do professor(E,M,D):  ')
    const tempo_experiencia = Number(question('Digite o tempo de experiencia docente em meses:  '))
    const filhos_menores = Number(question('Digite a quantidade de filhos menores de 6 anos:  '))
    const plano_saude = Number(question('Digite o valor do plano de saude:  '))

    function calcular_grat_temp_exp(tempo_experiencia, grat_temp_exp){
        if (tempo_experiencia>=6 && tempo_experiencia<=12)
        return (grat_temp_exp===hora_aula*0.05)
        if (tempo_experiencia>=12)
        return (grat_temp_exp=== (hora_aula*0.05*tempo_experiencia)/12)
        
    

    function calular_valor_ha_do_professor(hora_aula, qualificacao){
        if (qualificacao === E)
        return (valor_ha_do_professor === ((hora_aula * 0.2) + grat_temp_exp))
        if (qualificacao === M)
        return (valor_ha_do_professor === (hora_aula * 0.3) + grat_temp_exp)
        else (valor_ha_do_professor === (hora_aula * 0.5) + grat_temp_exp)

    function calucular_auxilio_combustivel(horas_semanais)
        if (horas_semanais >=8 && horas_semanais<=16)
        return(auxilio_combustível === 30)
        if (horas_semanais>= 16)
        return(auxilio_combustível ===(horas_semanais*30)/8)


    }
    }
    auxilio_creche === (filhos_menores*700)
    ressarcimento_plano_saude ===(plano_saude/2)
}
console.log($valor_ha_do_professor)