// Closure
function fabrica_multiplicador(fator){

    function filha(valor){
        return valor * fator
    }

    return filha
}

const erbio = fabrica_multiplicador(8)
const rogerio = fabrica_multiplicador(10)

const resultado = erbio(2)

console.log(resultado)
console.log(rogerio(7))


function gerador_funcao_boolean(){

    function inner(){
        return 2 === 0
    }

    return inner

}

const gio = gerador_funcao_boolean()

