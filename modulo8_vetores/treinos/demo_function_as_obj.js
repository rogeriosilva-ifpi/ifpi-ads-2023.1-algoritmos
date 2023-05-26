function executar(funcao, arg1, arg2){
    const resultado = funcao(arg1, arg2)

    console.log('Resultado: ', resultado)
}


function somar(v1, v2){
    return v1 + v2
}

function hello(){
    console.log('Olá coração!')
}

executar(somar, 6, -1)


