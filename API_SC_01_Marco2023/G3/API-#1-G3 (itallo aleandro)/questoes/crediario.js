import {question} from 'readline-sync'
function main(){
    //entrada:
    const valoriphone = obterNUMERO("Qual o valor do iphone que deseja comprar? ")
    const formapagamento = obterTEXTO("Como você deseja realizar o pagamento? (pix/ especie/ cartao de debito/ cartao de credito) ")
    //processamento e saida:
    pagamento(valoriphone, formapagamento)
}
function obterNUMERO(pergunta){
    const valor = Number(question(pergunta))
    return valor
}
function obterTEXTO(pergunta){
    const resultado = question(pergunta)
    return resultado
}
function pagamento(valoriphone,formapagamento){
    if ((formapagamento === "pix") || (formapagamento === "especie")){
        const valorfinal = valoriphone * 0.85
        const economia = valoriphone * 0.15
        console.log("Você irá pagar: R$", valorfinal," e irá economizar: R$",economia)
    }else if (formapagamento === "cartao de debito"){
        const valorfinal = valoriphone * 0.9
        const economia = valoriphone * 0.1
        console.log("Você irá pagar: R$", valorfinal," e irá economizar: R$",economia)
    }else{
        const entrada = obterNUMERO("Qual valor você deseja dar de entrada? ")
        const Qparcelas = obterNUMERO("Em qual a quantidade de parcelas você deseja dividir? ")
        const juros = (valoriphone - entrada) * (0.0399 + (0.015 * Qparcelas)) * Qparcelas
        const valorfinal = valoriphone + juros
        console.log("Você irá pagar: R$", valorfinal," e irá pagar de juros: R$",juros)
    }
}
main()
//concluida!