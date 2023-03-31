import {question} from 'readline-sync'

/**
 * 
 */

function main() {
    cabecalho("COMPRADOR DE IPHONE");
    fala_do_programa("Meu nome é IphoneGPT e irei lhe ajudar a comprar o seu iPhone. Qual é seu nome?");
    let nome_do_usuario = question("Nome: ");

    if (nome_do_usuario == "") {
        fala_do_programa("Não quer dizer seu nome? Tudo bem, vou te chamar de Joana então.")
        nome_do_usuario = "Joana";
    }

    fala_do_programa(`Será um prazer ajudar você, ${nome_do_usuario}!`);
    fala_do_programa("Insira o valor do iPhone desejado.")
    const valor = perguntar_numero("Valor");

    // Fail Fast
    if (valor < 0) {
        fala_do_programa("Valor do iPhone inválido.")
        encerramento();
        return
    }

    if (valor == 0) {
        fala_do_programa("Está de brincadeira? iPhone de graça? Vai sonhando!");
        encerramento();
        return
    }

    const modelo_iphone = obter_modelo_iphone(valor);

    fala_do_programa(`Entendi! Trata-se de um ${modelo_iphone}, de R$${valor.toFixed(2)}.`);

    fala_do_programa("Insira a forma de pagamento:\n1 - PIX\n2 - Cartão de Débito\n3 - Entrada + Cartão de Crédito");
    const forma_de_pagamento = perguntar_numero("Forma de pagamento");

    // Fail Fast
    if (forma_de_pagamento <= 0 || forma_de_pagamento > 3) {
        fala_do_programa("Método de compra inválido!");
        encerramento();
        return
    }

    // Processamento:
    const forma_de_pagamento_string = obter_forma_de_pagamento(forma_de_pagamento);
    fala_do_programa(`Beleza! Forma de pagamento selecionada: ${forma_de_pagamento_string}`)
    let valor_a_pagar = valor;
    let desconto = 0;

    if (forma_de_pagamento == 1) {
        // PIX / Espécie
        valor_a_pagar = valor * 0.85;
        desconto = valor - valor_a_pagar;

        apresentar_pagamento(valor_a_pagar, desconto, modelo_iphone, valor, forma_de_pagamento_string);
        pedir_pix();
        encerramento();
        return
    } else if (forma_de_pagamento == 2) {
        // Cartão de Débito
        valor_a_pagar = valor * 0.90;
        desconto = valor - valor_a_pagar;

        apresentar_pagamento(valor_a_pagar, desconto, modelo_iphone, valor, forma_de_pagamento_string);
        encerramento();
        return
    } else if (forma_de_pagamento == 3) {
        // Entrada + Prestações
        fala_do_programa("Para iniciarmos, insira o valor da entrada desejada, caso queira.");
        let entrada = perguntar_numero("Entrada");
        if (entrada < 0 || entrada == undefined) {
            fala_do_programa(`Essa entrada não é válida. Vamos fazer sem entrada, portanto.`);
            entrada = 0;
        } else if (entrada == 0) {
            fala_do_programa("Ok! Sem entrada, então.");
        } else if (entrada > valor) {
            fala_do_programa(`Não podemos fazer uma entrada maior que o valor do ${modelo_iphone}.`);
            fala_do_programa(`Vamos fazer uma entrada de 10% do valor do produto, que tal? Seria uma entrada de R$${(valor * 0.10).toFixed(2)}`);
            entrada = valor * 0.10;
        }
        


        if (entrada > 0) {
            fala_do_programa(`Em quantas parcelas você quer os R$${(valor - entrada).toFixed(2)} restantes? (em até 12x)`)
        } else {
            fala_do_programa(`Em quantas parcelas você quer dividir o valor total (R$${(valor - entrada).toFixed(2)})? (em até 12x)`)
        }
        
        let numero_de_parcelas = perguntar_numero("Quantidade de parcelas");
        // Fail fast
        if (numero_de_parcelas == undefined) {
            encerramento();
            return
        }
        if (numero_de_parcelas < 0) {
            fala_do_programa("Número de parcelas inválido.");
            encerramento();
            return
        }
        if (numero_de_parcelas == 0) {
            fala_do_programa("Mas você nao queria parcelar? Tente novamente selecionando outra forma de pagamento.");
            encerramento();
            return
        }
        if (numero_de_parcelas > 12) {
            fala_do_programa(`Eu entendo que você queira dividir em ${numero_de_parcelas}x, mas o máximo que podemos fazer é em 12x, ok?`);
            numero_de_parcelas = 12;
        }

        const valor_financiado = valor - entrada;
        const valor_acrescido = obter_valor_acrescido(valor_financiado, numero_de_parcelas);
        const valor_parcela = obter_valor_da_parcela(valor_acrescido, numero_de_parcelas)
        const diferenca = valor_acrescido - valor_financiado;

        if (entrada <= 0) {
            // Sem entrada
            fala_do_programa(`Certo, ${nome_do_usuario}, dividindo o valor total do ${modelo_iphone}, de R$${valor_financiado.toFixed(2)} em ${numero_de_parcelas}x, você pagará suaves prestações de R$${valor_parcela.toFixed(2)}.`);
            fala_do_programa(`No final de tudo, você estará pagando R$${(entrada + valor_acrescido).toFixed(2)}.`);
            const sugestao = obter_sugestao_de_compra(diferenca);
            fala_do_programa(`Você estará pagando um juros total no valor de R$${diferenca.toFixed(2)}. Com esse valor a mais, você poderia comprar ${sugestao}.`);
        } else {
            // Com entrada
            fala_do_programa(`Certo, ${nome_do_usuario}, pagando uma entrada de R$${entrada.toFixed(2)}, você pagará o restante (R$${valor_financiado.toFixed(2)}) em ${numero_de_parcelas} parcelas de R$${valor_parcela.toFixed(2)}.`)
            fala_do_programa(`No final de tudo, você estará pagando R$${(entrada + valor_acrescido).toFixed(2)}.`);
            const sugestao = obter_sugestao_de_compra(diferenca);
            fala_do_programa(`Você estará pagando um juros total no valor de R$${diferenca.toFixed(2)}. Com esse valor a mais, você poderia comprar ${sugestao}.`);
        }

        fala_do_programa(`Obrigado! Espero ter sido útil!`);
        
        encerramento();
    }
}

function cabecalho(_cab) {
    console.log(`### ${_cab} ###`);
}

function fala_do_programa(_mensagem) {
    console.log(`\nIphoneGPT: ${_mensagem}`);
}

function perguntar_numero(_pergunta) {
    return Number(question(`>>> ${_pergunta}: `));
}

function obter_modelo_iphone(_valor) {
    if (_valor < 500) {
        return "iPhone Pocket Mini da Xuxa"
    } else if (_valor < 1000) {
        return "iPhone Pocket v2"
    } else if (_valor < 2000) {
        return "iPhone da Motorola"
    } else if (_valor < 4000) {
        return "iPhone 3"
    } else if (_valor < 6000) {
        return "iPhone 6"
    } else if (_valor < 8000) {
        return "iPhone 8S"
    } else if (_valor < 10000) {
        return "iPhone Classic Edition"
    } else if (_valor < 12000) {
        return "iPhone Deluxe Edition"
    } else if (_valor < 15000) {
        return "iPhone 12S Pro Max"
    } else if (_valor < 17000) {
        return "iPhone Banhado a Ouro"
    } else if (_valor < 20000) {
        return "iPhone Diamond Deluxe Turbo Edition Power MAX"
    } else {
        return "IPHONE TOP DAS GALÁXIAS"
    }
}

function obter_forma_de_pagamento(_forma) {
    if (_forma == 1) return "PIX / Espécie";
    if (_forma == 2) return "Cartão de Débito";
    if (_forma == 3) return "Entrada + Cartão de Crédito";
}

function apresentar_pagamento(_valor, _desconto, _modelo, _preco_original, _forma){
    fala_do_programa(`Sendo assim, pagando por ${_forma}, o seu ${_modelo} que normalmente custaria R$${_preco_original.toFixed(2)} estará custando R$${_valor.toFixed(2)}, com um desconto de R$${_desconto.toFixed(2)}.`);

    const sugestao = obter_sugestao_de_compra(_desconto);
    fala_do_programa(`Com esse valor economizado, você pode comprar ${sugestao}.`);
}

function pedir_pix() {
    fala_do_programa("Por favor, efetue o pagamento. Chave PIX: patrocinioluisf@gmail.com");
}

function obter_sugestao_de_compra(_valor) {
    // Essa função devolve uma opção de compra com base no valor economizado.
    if (_valor < 15) {
        return "um sabonete"
    } else if (_valor < 50) {
        return "um kit de escovas de dentes"
    } else if (_valor < 100) {
        return "um par de potinhos da Tupperware"
    } else if (_valor < 250) {
        return "ingressos pro Piauí Pop"
    } else if (_valor < 500) {
        return "o remake do Resident Evil 4"
    } else if (_valor < 900) {
        return "um iPhone Pocket Mini da Xuxa"
    } else if (_valor < 1600) {
        return "uma passagem só de ida pro litoral"
    } else if (_valor < 2200) {
        return "um XBOX Series S"
    } else if (_valor < 3000) {
        return "um Xiaomi"
    } else {
        return "um Kinder Ovo"
    }
}

function obter_valor_acrescido(_valor, _numero_de_parcelas) {
    const valor = _valor;
    const numero = _numero_de_parcelas;

    const porcentagem = 1 + 0.0399 + 0.015 * numero;
    return valor * porcentagem;
}

function obter_valor_da_parcela(_valor_acrescido, _numero_de_parcelas) {
    return _valor_acrescido / _numero_de_parcelas;
}

function encerramento() {
    console.log("\n### ENCERRANDO PROGRAMA ###\n");
}

main();