import {question} from 'readline-sync'

function main (){
    //Entrada
    const valor_do_bem = Number(question('Valor do bem: '))
    const prazo = Number(question('Prazo em meses: '))
    const taxa_adm = Number(question('Taxa de administração: '))
    const lance_proposto = Number(question('Lance proposto: '))
    const prazo_ou_parcela = question('Deseja manter o prazo de pagamento ou o valor das parcelas?')
    const renda_mensal = Number(question('Renda mensal: '))
    
    //processamento 
    const valor_parcela = valor_do_bem / prazo

    //Saída

    console.log ('De acordo com a renda informada e o valor da parcela após o sorteio, o cliente', permissao_resgate)

    function total(valor_do_bem, taxa_adm){
        console.log('O total a pagar será de: ', valor_do_bem * taxa_adm)
    }
    
    function permissao_resgate (renda, parcela_apos_sorteio){
        if(parcela_apos_sorteio <= 0.3* renda){
            return 'Resgate permitido'
        }else {
            return 'Resgate não permitido'
        }
    }
 
    console.log('O valor da parcela será de ', valor_parcela)

    function renda_para_resgate (renda_mensal, parcela_apos_sorteio)
    


}

()main