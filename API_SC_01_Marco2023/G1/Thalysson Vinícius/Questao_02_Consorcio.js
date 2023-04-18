
import { question } from "readline-sync";

function main(){
    cabecalho ()
    //  ENTRADA
    const valor_bem = Number ( question ( " digite o valor do bem : "))
    const prazo = Number ( question ( " digite o prazo em meses a ser pago: "))
    const taxa_administracao = Number ( question ( " digite a taxa da adiministracao: "))
    const escolha_lance = Number ( question ( " deseja fazer um lance? Sim (1) ou Nao (0) "))
    const lance = Number ( question ( " se desejar dar lance, digite o valor desejado: "))
    const manter_prazo_parcela = Number ( question ( " caso seja contemplado dado lance, o que deseja manter? Prazo (1) / Parcela (2) : "))
    const num_parcela = Number ( question ( " informe quantas parcelas foram pagas: "))
    const renda = Number ( question ( " informe sua renda mensal: "))
    // PROCESSAMENTO

    const valor_total_bem = total_a_pagar (valor_bem , taxa_administracao)
    const valor_parcela = parcela (valor_total_bem , prazo)
    const total_taxa_adm = t_taxa ( valor_total_bem, valor_bem)
    const renda_minima = r_minima (valor_parcela,renda)
    const reduz_parcela = recalcular_parcela ( escolha_lance,valor_total_bem, lance, valor_parcela, prazo, num_parcela,manter_prazo_parcela,renda_minima,renda)
    const reduz_prazo = recalcular_prazo (escolha_lance, renda_minima,renda ,valor_parcela , manter_prazo_parcela,valor_total_bem, lance,num_parcela)

    //SAIDA
    console.log ("")
    console.log ("")
    print (`O financiamento do bem no valor R$${valor_bem},00, no prazo de ${prazo} meses a uma taxa de ${taxa_administracao}%  `)
    console.log ("")
    print (`resultara em R$${valor_total_bem},00 com parcelas de R$${valor_parcela},00 e um total de taxa de R$${total_taxa_adm},00`)
    console.log ("")
    console.log ("")
    print (`Para a simulação de lançe no valor de :R$${lance},00 ja pago: ${num_parcela} parcelas e considerando a escolha de "Sim(1) /Nao(0)"= ${escolha_lance} para lance`)
    console.log ("")
    print (`e caso seja mantido constante prazo(1)/parcela (2)= ${manter_prazo_parcela} teremos se (1): R$${reduz_parcela},00 ou (2):${reduz_prazo} meses com uma renda minima de : R$${renda_minima} `)
    console.log ("")
    console.log ("")

}

function total_a_pagar (valor_bem , taxa_administracao) {
    const cfb = valor_bem * [1+(taxa_administracao/100)]
       return cfb
}    
function parcela (valor_total_bem , prazo) {
    const vp = valor_total_bem /prazo
    return vp
}    
function t_taxa ( valor_total_bem, valor_bem){
    const tt = valor_total_bem -valor_bem
    return tt
}
function r_minima (valor_parcela,renda){ 
    if (valor_parcela < 0.3 *renda){
        const rm = valor_parcela 
        return rm
    }else 
    (valor_parcela > 0.3 *renda)
        const rm = valor_parcela / 0.3
        return rm
    
}

function recalcular_parcela ( escolha_lance,valor_total_bem, lance, valor_parcela, prazo, num_parcela,manter_prazo_parcela,renda_minima,renda){
    // escolheu lance , tem renda maior que parcela e escolheu manter o prazo
    if ( escolha_lance == 1) if (valor_parcela<0.3*renda ) if (manter_prazo_parcela ==1) {
        //(Deseja dar lançe )        (Parcela Liberada )             (Manter prazo e recalcular parcela)
            const n_pa = ( valor_total_bem - lance - num_parcela*valor_parcela )/ prazo
            return n_pa

        // escolheu lance , tem renda menor que parcela e escolheu manter o prazo     
    }else if ( escolha_lance == 1) if ( valor_parcela > 0.3*renda) if (manter_prazo_parcela ==1) {
        //Deseja dar lançe                Parcela não liberada            Manter prazo e recalcular parcela
            const renda_min = renda_minima
            // Recalculo da parcela
            return renda_min
    }else 
        return 0
}

function recalcular_prazo (escolha_lance, renda_minima,renda ,valor_parcela , manter_prazo_parcela,valor_total_bem, lance,num_parcela){

    // escolheu lance , tem renda maior que parcela e escolheu manter o parcela
    if ( escolha_lance == 1) if (valor_parcela <0.3*renda ) if (manter_prazo_parcela ==2){
        //Deseja dar lançe      Parcela liberada         Manter parcela e recalcular prazo
            const n_pr = Math.floor(( valor_total_bem - lance - num_parcela*valor_parcela )/ valor_parcela)
            return n_pr
        }
        // escolheu lance , tem renda menor que parcela e escolheu manter parcela
        else if ( escolha_lance == 1) if (valor_parcela >0.3*renda ) if (manter_prazo_parcela ==2){
        //Deseja dar lançe              Parcela recalculada       Manter parcela e recalcular prazo   
            const renda_min = renda_minima
            return
    }else 
        return 0

}
function print (texto){
    console.log( texto)
}
function cabecalho () {
    console.log ("")
    console.log("///////// 1º Avalição de introdução a computação//////////")
    console.log("///////// Aluno : Thalysson V O Brito//////////")
    console.log("///////// Questao Consorcio//////////")
    console.log ("")
}

main ()