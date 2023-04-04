import { question } from "readline-sync";

function main() {
    // ENTRADA
    const valor_bem = Number(question("Digite o valor do bem (R$): "));
    let prazo_meses = Number(question("Digite o prazo (meses): "));
    const taxa_administracao = Number(question("Taxa da administraçao (%): "));
    const valor_lance_proposto = Number(question("Valor do lance proposto (R$): "));
    const prazo_ou_parcela = Number(question("Manter: 0-PRAZO  1-PARCELA >>"));
    const renda_mensal = Number(question("Renda mensal (R$): "));
    // PROCESSAMENTO;
    let total_taxa_administracao = calcularTaxaTotalAdministracao(taxa_administracao, valor_bem)
    let total_pagar = calcularTotalPagar(valor_bem, total_taxa_administracao, valor_lance_proposto)
    let valor_parcela = calcularValorParcela(total_pagar, prazo_meses, prazo_ou_parcela, valor_lance_proposto);
    let resgate = verificarResgate(renda_mensal, valor_parcela)
    let renda_minima = (valor_parcela / 0.3).toFixed(2)

    let lance_aprovacao = verificaLance(valor_lance_proposto);

    // SAIDA
    console.log(`\n-------------------->>>>>>CONSORCIO APP<<<<<<--------------------`)
    if (resgate) {
        console.log(`valor total a ser financiado: R$ ${total_pagar}`)
        console.log(`${prazo_meses} X R$ ${valor_parcela}`)
        console.log(`total taxa de administraçao: R$ ${total_taxa_administracao}`)
        console.log(`Possibilidade de Resgate:Existe`)
    } else {
        console.log(`valor total: R$ ${total_pagar}`)
        console.log(`${prazo_meses} X R$ ${valor_parcela}`)
        console.log(`total taxa de administraçao: R$ ${total_taxa_administracao}`)
        console.log(`Renda mensal minima nescessaria pra resgate: R$${renda_minima}`)
    }

    if (lance_aprovacao) {
        console.log(`\n              >>>>>LANCE APROVADO !!!!<<<<<<                \n`);
        if (prazo_ou_parcela == 0) {
            console.log(`>>>>NOVA Parcela: R$ ${valor_parcela}`)
        } else {
            console.log(`>>>>>parcela: R$ ${valor_parcela}`)
        }
        if (prazo_ou_parcela == 1) {
            console.log(`>>>>>NOVO Prazo: ${prazo_meses} mes(es)`)
        } else {
            console.log(`>>>>>>prazo: ${prazo_meses} mes(es)`)
        }
        if (renda_mensal >= renda_minima) {
            console.log(`>>>>>>renda mensal nescessaria para retirar: R$ ${renda_minima}`)
        } else {
            console.log(`>>>>>>RENDA MENSAL MINIMA PARA RETIRAR: R$ ${renda_minima}`)
        }

    }
}

function verificaLance(valor_lance_proposto) {
    if (valor_lance_proposto > 0) {
        return true;
    } else {
        return false;
    }
}

function calcularTaxaTotalAdministracao(taxa_administracao, valor_bem) {
    return Number((valor_bem * (taxa_administracao / 100)).toFixed(2));
}

function calcularTotalPagar(valor_bem, taxa_administracao, valor_lance_proposto) {
    let valor = (valor_bem + taxa_administracao - valor_lance_proposto)
    return valor;
}

function calcularValorParcela(total_pagar, prazo_meses, prazo_ou_parcela, lance) {
    let valor_parcela;
    if (prazo_ou_parcela == 0) {
        valor_parcela = total_pagar / prazo_meses;
    } else if (prazo_ou_parcela == 1) {
        valor_parcela = total_pagar / prazo_meses;
        prazo_meses = (total_pagar) / (total_pagar + lance / prazo_meses);

    }
    return valor_parcela;
}

function verificarResgate(renda_mensal, valor_parcela) {
    if (valor_parcela <= 0.3 * renda_mensal) {
        return true;
    } else {
        return false;
    }
}
main()