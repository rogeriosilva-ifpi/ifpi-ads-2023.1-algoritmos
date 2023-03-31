import { question } from 'readline-sync';

function cabecalho(){
    console.log('**BEM VINDO A CALCULADORA DE SALARIO DE PROF**')
    console.log('______________________________________________')
    console.log('')
}

function rodape(){
    console.log('')
    console.log('______________________________________________')
    console.log('************OBRIGAOD, VOLTE SEMPRE!***********')
}

function input(entrada_numerica){
    const obter_dados_numericos =Number(question(entrada_numerica))
    return obter_dados_numericos
}
 
function input_string(entrada){
    const obter_dados = question(entrada)
    return obter_dados
}

function print(saida){
    console.log(saida)
}


function main(){
    cabecalho()

    //entrada
    const valor_base_hora_aula = input('Informe o valor base da hora/aula(R$): ')
    const nome = input_string('Informe seu nome: ')
    const horas_semana = input('Infome as Horas semanais: ')
    const qualificacao = input_string('Informe sua qualificão(E, M ou D): ')
    const tempo_experiencia = input('Informe seu tempo de experiência(meses): ')
    const filhos = input('Informe quantos filhos tem (Apenas menores de 6 anos): ')
    const plano_saude = input('Informe o valor do seu plano de saude(R$): ')


    //processamento
    const valor_salario_hora = valor_hora_final(valor_base_hora_aula, tempo_experiencia, qualificacao)
    const valor_salario_semanal = valor_salario_semana(horas_semana, valor_base_hora_aula, tempo_experiencia, qualificacao)
    const valor_salario_mensal = valor_salario_mes( valor_base_hora_aula, tempo_experiencia, qualificacao)
    const valor_auxilio_creche = auxilio_creche(filhos)
    const ressarcimento_saude = auxilio_saude(plano_saude)

    //saida
    print(`Valor Hora/Professor: ${valor_salario_hora}R$`)
    print(`Salario base semanal: ${valor_salario_semanal}R$`)
    print(`Salario base mensal: ${valor_salario_mensal}R$`)
    print(valor_auxilio_creche)
    print(`Ressarcimento Saude: ${ressarcimento_saude}R$`)

    rodape()
}
main()

function obter_tempo_experiencia(experiencia){          //Determinar o tempo de experiencia exato, a cada 6 meses acima 
    const tempo_exp_exato = experiencia % 6             
    if(tempo_exp_exato === 0 ){
        return tempo_exp_exato +1
    }else{
        return tempo_exp_exato
    }

}
function definir_valor_qualificacao(quali){             //Colocar a taxa de acordo com a qualificação do professor.
    if (quali === 'E' || quali === 'e'){                //especialização 20%
        return 0.20                                     //mestrado 20% 
    }else if(quali === 'M'|| quali === "m"){
        return 0.3
    }else{          //considera doutorado
        return 0.5
    }

}

function valor_hora_base(valor_base, experiencia, quali){
    const tempo_exp = obter_tempo_experiencia(experiencia)
    const valor_quali = definir_valor_qualificacao(quali)
    const valor_hora_inicial = valor_base + valor_quali + tempo_exp
    return  valor_hora_inicial
}

function aumento_tempo_experiencia (aumento,experiencia, valor_base, experiencia, quali){
    const aumento_ano = aumento
    const valor_base_hora = valor_hora_base(valor_base, experiencia, quali)
    const tempo_xp = obter_tempo_experiencia(experiencia)
    const porcentagem_ano = aumento_ano * tempo_xp * valor_base_hora
    return porcentagem_ano
}

function valor_hora_final(valor_base, experiencia, quali, aumento){
    const valor_base_hora = valor_hora_base(valor_base, experiencia, quali)
    const valor_aumento = aumento_tempo_experiencia(aumento,experiencia, valor_base, quali)
    const valor_hora_fim = valor_base_hora + valor_aumento
    return valor_hora_fim
}

function valor_salario_semana(horas_semanal, valor_base, experiencia, quali, aumento){              //valor salario final hora * horas na semana = valor total horas/semana.
    const semana = horas_semanal 
    const salario_horas = valor_hora_final(valor_base, experiencia, quali, aumento)
    const valor_semana = salario_horas * semana
    return valor_semana
}   


function valor_salario_mes(valor_base, experiencia, quali, aumento){
    const semanas = 4.5
    const valor_semanal = valor_hora_final(valor_base, experiencia, quali, aumento)
    const valor_mensal = valor_semanal * semanas
    return valor_mensal
}

function auxilio_creche(filho){
    const valor_auxilio = 700
    const auxilio_creche = filho * valor_auxilio
    
    if(auxilio_creche != 0 ){
        return `Seu auxilio creche é de ${auxilio_creche}R$`
    }else{
        return 'ERROR'
    }
}

function auxilio_saude(plano){
    const valor_max = 1000
    const ressarcimento_max = valor_max / 2
    const ressarcimento_normal = plano / 2
    if (plano >= valor_max ){
        return ressarcimento_max
    }else{
        return ressarcimento_normal
    }
}



