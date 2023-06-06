
// Instalar a Lib:
// npm install scanf-printf-obi

// OBI - exige variáveis globais quando forem entradas
let nome, idade, salario

function main(){
    /* 
    
    Siga esse padrão para receber dados:
    OBS: as entradas devem estar num arquivo .txt no mesmo diretório
    Executar assim: 
    $ node zero_cancelar.js < zero_cancelar.txt

    Padrões de Entrada (de acordo com o tipo do dado a ser lido)
    %d - Números inteiros.
    %f - Números float/decimal.

    */
    
    // Ler Strings com várias 1 ou várias palavras
    fgets('nome')

    // Obter números inteiros(%d) e decimais(%f)
    scanf('%d', 'idade')
    scanf('%f', 'salario')
    
    // imprime uma string e quebra a linha (\n)
    printf('%s\n', nome)

    // imprime um inteiro e quebra a linha (\n)
    printf('%d\n', idade)

    // imprime um float formatando para 2 casas decimais e quebra a linha (\n)
    printf('%.2f\n', salario)

    // Formatação de Strings funciona normalmente
    printf(`nome: ${nome}, idade: ${idade}, salário: ${salario.toFixed(2)}\n`)

    // ATENCAO: Lembrar do \n no final do printf

}

// ####### INCLUIR ESSA PARTE EM TODOS AS QUESTÕES #####

// OBI: cabeçalho para incluir printf, scanf e fgets
// em programas javascript
import {
    fgets as fgets_stub,
    sprintf as printf_stub,
    scanf as scanf_stub
} from 'scanf-printf-obi'


function scanf(format) {
    var res = scanf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    eval(res);
}

function printf(args){
    var res = printf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    process.stdout.write(res);
}

function fgets(args){
    var res = fgets_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    eval(res);
}
// final de cabeçalho


// executar main
main()