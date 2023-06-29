import {question} from "readline-sync"
function seleçao_opçao(opçoes,tamanho_opçoes){
    let opçoes = Number(question("Quadrado,Retângulo,Triângulo,TrapéZio,Círculo"))
    opçoes = Array["Quadrado","Retângulo","Triângulo","Trapézio","Círculo"]
    tamanho_opçoes = Array.length[opçoes]
    return opçoes
}
seleçao_opçao(opçoes,tamanho_opçoes)

