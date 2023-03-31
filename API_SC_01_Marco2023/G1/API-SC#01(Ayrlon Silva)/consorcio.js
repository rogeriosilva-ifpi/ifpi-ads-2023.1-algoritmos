import {question} from 'readline-sync'
function main(){


const valor_do_bem = Number(question('Valor do bem: '))
const prazo = Number(question('Prazo em meses: '))
const taxa_de_administracao = Number(question('Taxa de administração: '))
const lance_proposto = Number(question('Valor do lance: '))



//processamento
calc_valor_parcelas(valor_do_bem,prazo)

calc_taxa_administracao(valor_do_bem,taxa_de_administracao)

calc_total_pagar(valor_do_bem,taxa_de_adm)

calc_lance(lance_proposto)

}

calc_valor_parcelas(valor_do_bem,valor_do_bem){
const parcela = valor_do_bem / prazo

return parcela

}
calc_taxa_administracao(valor_do_bem,taxa_de_administracao){
const taxa_de_adm = valor_do_bem * (taxa_de_administracao/100)

return taxa_de_adm

}

calc_total_pagar(valor_do_bem, taxa_de_adm){
const total_pagar = valor_do_bem + taxa_de_adm

return total_pagar

}

calc_lance(lance_proposto){

if (lance_proposto <= 0){
return console.log('lance invalido')

}

else (lance_proposto > 0){


const prazo_ou_parcela = Number(question('Manter prazo, digite(1) ou para manter parcela, digite (2): '))
const renda_mensal = Number(question('Renda mensal: '))

           if(prazo_ou_parcela === 1){

           }
           else(prazo_ou_parcela === 2)
           
           if(parcela > (renda_mensal * 0.30) )

        }


}


const lance_proposto = Number(question('Valor do lance: '))
const prazo_ou_parcela = Number(question('Manter prazo, digite(1) ou para manter parcela, digite (2): '))
const renda_mensal = Number(question('Renda mensal: '))


main()
