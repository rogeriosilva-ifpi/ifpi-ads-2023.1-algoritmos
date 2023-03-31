import { question } from "readline-sync";

function main() {

    //Entrada
    const valor_iphone = Number(question('Qual o valor do Iphone?: '))
    const como_pagar = question('Como deseja pagar?(Insira PIX, Crédito, Débito ou Espécie): ')
    if (como_pagar === 'Crédito') {
        var entrada = Number(question('Qual será o valor da entrada?: '))
        var juros = Number(question('Em quantas vezes deseja parcelar?: '))
    }

    //Pedidos
    var preço_pix = calcular_preço_pix(valor_iphone)
    var preço_espécie = calcular_preço_espécie(valor_iphone)
    var preço_débito = calcular_preço_débito(valor_iphone)
    var preço_crédito = calcular_preço_crédito(valor_iphone)

    //Entrada 2


    //Saída

    if (como_pagar === 'PIX') {

        console.log(`Opa, você economizou ${valor_iphone - preço_pix} reais com o desconto de 15%! O preço ficou ${preço_pix} reais.`)


    }

    if (como_pagar === 'Espécie') {

        console.log(`Opa, você economizou ${valor_iphone - preço_espécie} reais com o desconto de 15%! O preço ficou ${preço_espécie} reais.`)


    }

    if (como_pagar === 'Débito') {

        console.log(`Opa, você economizou ${valor_iphone - preço_débito} reais com o desconto de 10%! O preço ficou ${preço_débito} reais.`)


    }

    if (como_pagar === 'Crédito') {

        console.log(`Você selecionou o pagamento por cartão de crédito, logo, você gastará ${valor_iphone} reais, e com juros de ${Math.floor(preço_crédito - valor_iphone)} reais, você pagará ${Math.floor(preço_crédito)} reais`)


    }




    //Funções


    function calcular_preço_pix(valor_iphone) {
        if (como_pagar === 'PIX') {
            const preço = valor_iphone - valor_iphone * 15 / 100
            return preço

        }


    }

    function calcular_preço_espécie(valor_iphone) {
        if (como_pagar === 'Espécie') {
            const preço = valor_iphone - valor_iphone * 15 / 100
            return preço

        }


    }

    function calcular_preço_débito(valor_iphone) {
        if (como_pagar === 'Débito') {
            const preço = valor_iphone - valor_iphone * 10 / 100
            return preço

        }


    }

    function calcular_preço_crédito(valor_iphone) {

        var valor_iphone_real = valor_iphone - entrada
        var preço = entrada + valor_iphone_real + (valor_iphone_real * 3.99 / 100) + (valor_iphone_real * 1.5 * juros / 100)
        return preço

    }

























}
main()