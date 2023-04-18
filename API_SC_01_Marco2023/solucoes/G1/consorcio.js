import { question } from 'readline-sync'

function main(){
    // Entrada
    const valor_bem = Number(question('Valor do bem (R$): '))
    const prazo = Number(question('Prazo (meses): '))
    const taxa_admin = Number(question('Taxa (%): '))
    const lance = Number(question('Valor do Lance (%): '))
    const manter_prazo_parcela = question('Manter "prazo" ou "parcela"? ')
    const renda_mensal = Number(question('Qual sua renda R$: '))

    // Processamento
    const valor_taxa_admin = calcular_taxa_admin(valor_bem, taxa_admin)
    const valor_total_a_pagar = valor_bem + valor_taxa_admin
    const valor_parcela = calcular_parcela(valor_total_a_pagar, prazo)
    const aprovado = verificar_aprovacao(valor_parcela, renda_mensal)
    const renda_minima = calcular_renda_minima(valor_parcela)

    let nova_parcela = valor_parcela
    let novo_prazo = prazo
    
    if (lance > 0){
        if (manter_prazo_parcela === "prazo"){
            nova_parcela = calcular_parcela_apos_lance(valor_total_a_pagar, prazo, lance)
        }else if (manter_prazo_parcela === "parcela"){
            novo_prazo = calcular_prazo_apos_lance(valor_total_a_pagar, lance, valor_parcela)
        }
    }

    // Saída
    console.log(`Valor Total R$ ${valor_total_a_pagar.toFixed(2)}`)
    console.log(`Valor Taxa de Administração R$: ${valor_taxa_admin.toFixed(2)}`)
    console.log(`> ${prazo} parcelas de R$ ${valor_parcela.toFixed(2)}`)
    console.log(`> APROVADO: ${aprovado ? "SIM" : "NÃO"}`)
    console.log(`> Renda Mínima R$ ${renda_minima.toFixed(2)}`)

    if (lance > 0){
        console.log()
        console.log('LANCE:')
        console.log(`Seu lance foi no valor de R$ ${lance.toFixed(2)}`)
        console.log(`Você escolher manter: "${manter_prazo_parcela}"`)
        console.log(`Nova Parcela: R$ ${nova_parcela.toFixed(2)} `)
        console.log(`Novo Prazo:  ${novo_prazo} meses`)
    }
    
    
}


function calcular_valor_total(valor_bem, taxa_admin){
    const valor_taxa = valor_bem * (taxa_admin/100)
    const valor_total = valor_bem + valor_taxa

    return valor_total
}

function calcular_parcela(valor_total, prazo){
    const parcela = valor_total / prazo
    return parcela
}

function calcular_taxa_admin(valor_bem, taxa_admin){
    return valor_bem * (taxa_admin / 100)
}

function verificar_aprovacao(valor_parcela, renda_mensal){
    /*if (valor_parcela <= renda_mensal * (30/100)){
        return true
    }else{
        return false
    }*/
    return (valor_parcela <= renda_mensal * (30/100))
}


function calcular_renda_minima(valor_parcela){
    return (valor_parcela / 30) * 100
}

function calcular_parcela_apos_lance(valor_total, prazo_meses, lance){
    const novo_valor_total = valor_total - lance
    const nova_parcela = novo_valor_total / prazo_meses
    return nova_parcela
}

function calcular_prazo_apos_lance(valor_total, lance, valor_parcela){
    const novo_valor_total = valor_total - lance
    const novo_prazo = Math.ceil(novo_valor_total / valor_parcela)
    return novo_prazo
}

main()