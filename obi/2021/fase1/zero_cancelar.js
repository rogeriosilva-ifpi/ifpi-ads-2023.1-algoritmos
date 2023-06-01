
// QUESTAO: https://olimpiada.ic.unicamp.br/pratique/ps/2021/f1/zero/

// Deixar global variáveis que não preenchidas por scanf
let count, number

function main(){
    /* Siga esse padrão para receber dados:
    OBS: as entradas devem estar num arquivo .txt no mesmo diretório
    Executar assim: 
    $ node zero_cancelar.js < zero_cancelar.txt

    Padrões de Entrada (de acordo com o tipo do dado a ser lido)
    %d - Números inteiros.
    %f - Números float/decimal.
    %c - Ler um caractere.
    %s - Ler uma strings.
    */
    scanf('%d', 'count')
    const numbers = []

    for (let i = 0; i < count; i++){
        scanf('%d', 'number')
        if (number != 0){
            numbers.push(number)
        }else{
            numbers.pop()
        }
    }       
    // reduce que computa somatário
    const sum = numbers.reduce((acc, actual) => acc + actual, 0)
    printf('%d\n', sum)
}

// ####### INCLUIR ESSA PARTE EM TODOS AS QUESTÕES #####

// OBI: cabeçalho para incluir printf, scanf e fgets
// em programas javascript
// Mudei de require para import pq usamos type: modules
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
// node zero_cancelar.js < zero_cancelar.txt
main()