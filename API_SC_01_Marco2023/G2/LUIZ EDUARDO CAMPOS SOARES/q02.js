import { question } from "readline-sync";

function main() {
    const valorArgo = 89000;
    const valorCross = 185000;

    const percentualFipe = question("Percentual da Fipe: ") / 100;
    const mesesParcelamento = question("Quantos Meses? ");
    const taxaCDC = question("Qual taxa juros CDC (mês): ") / 100;
    const taxaCons = question("Qual a taxa de ADM: ") / 100;

    const valorBem = valorArgo * percentualFipe;
    const valorDiferenca = valorCross - valorArgo;
    const fatorCDC = taxaCDC * mesesParcelamento;
    const valorCDC = fatorCDC * valorDiferenca;
    const valorFinanciamento = valorDiferenca + valorCDC;
    const valorParcela = valorFinanciamento / mesesParcelamento;

    const valorTaxaConsorcio = valorCross * taxaCons;
    const valorTotalConsorcio = valorDiferenca + valorTaxaConsorcio;
    const valorParcelaConsorcio = valorTotalConsorcio / mesesParcelamento;

    console.log(`Valor do Bem: R$ ${valorBem}`)
    console.log(`Valor a ser parcelado: R$ ${valorDiferenca}`);
    console.log(`\n==== FINANCIAMENTO ====\n`);
    console.log(`Juros Totais: R$ ${valorCDC} (${fatorCDC*100}%)`);
    console.log(`${mesesParcelamento} de R$ ${valorParcela}`);
    console.log(`Valor financiamento: R$ ${valorFinanciamento}`);
    console.log(`\n==== CONSORCIO ====\n`);
    console.log(`Valor taxa consorcio: R$ ${valorTaxaConsorcio}`);
    console.log(`${mesesParcelamento} de R$ ${valorParcelaConsorcio}`)
    console.log(`Valor total consorcio R$ ${valorTotalConsorcio}`);
    console.log(`\n\n-> O mais viável é o: ${ valorTotalConsorcio > valorFinanciamento ? "CDC" : "Consórcio"}`)
}

main();