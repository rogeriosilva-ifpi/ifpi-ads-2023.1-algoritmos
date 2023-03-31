import { question} from 'readline-sync'

//ENTRADA
function main(){
    const valor_base = Number(question('Valor base hora/aula na Universidade:'))
    const nome = (question('Seu nome: '))
    const horas_sem = Number(question('Quantidade de horas semanais que trabalha: '))
    const qualificacao = (question('Sua qualificação | E - Especialista, M - Mestre, D - Doutor: '))
    const tempo_exp = Number(question('Digite o seu tempo de experiência docente em (meses): '))
    const qtd_filhos = Number(question('Quantidade de filhos menores de 6 anos possui: '))
    const plano_saude = Number(question('Valor do seu plano de saúde: '))
}

function main(){
    const hora_e = (valor_base + (30 / 100 * valor_base))
    const hora_d = (valor_base + (40 / 100 * valor_base))
    const hora_m = (valor_base + (50 / 100 * valor_base))
}

function main(){
    const salario_sem_e = (hora_e * horas_sem)
    const salario_sem_d = (hora_d * horas_sem)
    const salario_sem_m = (hora_m * horas_sem)
}

function main(){
    const salario_mensal_e = (salario_sem_e * 4.5)
    const salario_mensal_d = (salario_sem_d * 4.5)
    const salario_mensal_m = (salario_sem_m * 4.5)
    const aux_creche = (700 * qtd_filhos)
    const ress_saude = (plano_saude / 2)
    const aux_combustivel1 = (30 * 3.75)
    const aux_combustivel2 = (60 * 7.5)
}

function main(){
    const salario_bruto_e = (salario_mensal_e + aux_creche + ress_saude + aux_combustivel1)
    const salario_bruto_d = (salario_mensal_d + aux_creche + ress_saude + aux_combustivel1)
    const salario_bruto_m = (salario_mensal_m + aux_creche + ress_saude + aux_combustivel1)
    const salario_bruto_e1 = (salario_mensal_e + aux_creche + ress_saude + aux_combustivel2)
    const salario_bruto_d1 = (salario_mensal_d + aux_creche + ress_saude + aux_combustivel2)
    const salario_bruto_m1 = (salario_mensal_m + aux_creche + ress_saude + aux_combustivel2)
}

function main(){
    const previdencia1 = (salario_bruto - 7.9 / 100) 
    const previdencia2 = (salario_bruto - 9 / 100)
    const previdencia3 = (salario_bruto - 12 / 100)
    const previdencia4 = (salario_bruto - 14 / 100)
    const previdencia5 = (salario_bruto - 16 / 100)
}

function main(){
    const imposto1 = ( 5000 + 0 / 100)
    const imposto2 = ( 5000 + 27,5 / 100)
}

function main(){
    const total_descontos = (imposto + previdencia)
}

function main(){
    const salario_liquido = (ganhos - descontos)
}
