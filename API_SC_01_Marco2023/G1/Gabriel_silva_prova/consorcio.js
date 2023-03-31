import prompt from "prompt-sync"
let input = prompt()

function main(){

    let valor_bem = Number(input('Digite o valor do bem: '))
    let prazo_meses = Number(input('Digite o prazo em meses: '))
    let taxa_administracao = Number(input('Digite a taxa de administração: '))
    let valor_lance_proposto = Number(input('Digite o valor do lance proposto: '))
    let alterar_parcela_prazo = Number(input('Digite 1 se deseja mudar a parcela e 2 caso queira mudar o prazo: '))
    let renda_mensal = Number(input('Digite o valor da renda mensal: '))
    let valor_parcelas = valor_bem / prazo_meses
    let total_taxa_administracao = (taxa_administracao / 100) * valor_bem
    let total_pagar = valor_bem + total_taxa_administracao
    let novo_total = 0
    let nova_parcela = 0
    let valor_minimo_para_resgate = renda_mensal * 0.3
    let novo_prazo = 0
    let prazo_subtraido = 0
    //parcela nao pode ser superior a (renda_mensal * 0.3)
    
    

    console.log(`O valor das parcelas é de ${valor_parcelas.toFixed(2)}`)
    console.log(`O total a pagar é de: ${total_pagar}`)
    console.log(`O total da taxa de administração é de ${total_taxa_administracao}`)
    //console.log(`A renda necessária para resgate do bem é de: ${valor_minimo_para_resgate}`)

    if(alterar_parcela_prazo == 1 ){
        novo_total = total_pagar - valor_lance_proposto
        nova_parcela = novo_total / 12

        console.log(`As novas parcelas são de ${nova_parcela} reais`)
        console.log(`A renda necessária para resgate do bem é de: ${valor_minimo_para_resgate}`)

    }else if(alterar_parcela_prazo == 2){
        prazo_subtraido = valor_lance_proposto / valor_parcelas
        novo_prazo = prazo_meses - prazo_subtraido

        console.log(`O novo prazo é de ${novo_prazo.toFixed(1)} meses`)
        console.log(`A renda mínima necessária é de: ${valor_minimo_para_resgate}`)
    }
   

}
main()