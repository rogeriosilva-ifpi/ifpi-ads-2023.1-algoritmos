import {question} from "readline-sync"

function main(){

//Entrada

const nome = question(" > informe o seu nome : ")

const sexo = question(" > informe o seu sexo( homem ou mulher)  : ")

const idade = Number(question(" > informe a sua idade : "))

const peso = Number(question(" > informe o seu peso(em quilos) : "))

const atividade_fisica = question(" > informe o seu ritmo de atividade fisica ( sedentario, pouco ativo , ativo ou muito ativo) : ")

const altura = Number(question( "> Informe a sua altura : "))
//processamento 

const af = descobrir_af(atividade_fisica , sexo)

const descobrir_necessidade_calorica = calculo(idade, peso, altura ,af ,atividade_fisica, sexo)

console.log("a sua necessidade calorica e de " + descobrir_necessidade_calorica.toFixed(2) + " calorias")

const ganhar_ou_perder = question("> Voce deseja ganhar ou perder peso (responda ganhar ou perder)? :")

 const quilos = Number(question("> quantos quilos voce deseja ganhar ou perder? : "))

 const semanas = Number(question("> em quantas semanas vc deseja ganhar ou perder este peso? :"))

const valor_em_calorias = (quilos * 7700)

 const dias = semanas * 7
 
 const caloria_aumentada_ou_reduzida_por_dia = (valor_em_calorias / dias)

 const novo_valor_de_ingestao = calculo2(descobrir_necessidade_calorica, caloria_aumentada_ou_reduzida_por_dia,ganhar_ou_perder)

 console.log("a sua nova ingestao de calorias diaria , feita para atingir o seu peso desejado, e de " + novo_valor_de_ingestao.toFixed(2) + " calorias")

 const valor_ganho_ou_perdido_por_dia = quilos_ganhos_ou_perdidos(descobrir_necessidade_calorica, novo_valor_de_ingestao,ganhar_ou_perder)
 
console.log(" voce ira ganhar/perder " + valor_ganho_ou_perdido_por_dia.toFixed(2) + " calorias or dia")

const valor_ganho_ou_perdido_semanalmente_em_quilos = (valor_ganho_ou_perdido_por_dia * 7) / 7700

console.log("voce perdera " + valor_ganho_ou_perdido_semanalmente_em_quilos.toFixed(2)+ " quilos semanalmente")

const proteinas = (novo_valor_de_ingestao * 0.4)

const carboidratos = (novo_valor_de_ingestao * 0.4)

const gordura = (novo_valor_de_ingestao * 0.2)

const gramas_proteinas = proteinas /4

const gramas_carboidratos = carboidratos / 4

const gramas_gordura = gordura / 9

console.log(" voce ira consumir " + novo_valor_de_ingestao.toFixed(2) + " calorias diariamente em " + semanas + " semanas e essa nova ingestao esta distribuida em " + gramas_proteinas.toFixed(2) + " gramas de proteinas, " + gramas_carboidratos.toFixed(2) + " gramas de carboidratos , " + gramas_gordura.toFixed(2) + " gramas de gordura")

if(valor_ganho_ou_perdido_semanalmente_em_quilos > 1){
return console.log("Voce esta tentando perdr mais de 1 quilo por semana , isso ira comprometer a sua saude! Tente uma meta semanal mais segura")
}else{
    return console.log("Parabens! Voce ira conseguir atingir os seus objetivos!")
}

}
main()

function resultado_final(idade, peso, altura , af ,atividade_fisica, sexo){}
 


function descobrir_af(atividade_fisica , sexo){

    if (sexo === 'homem'){
        if (atividade_fisica ==='sedentario'){
            return 1.00
        }else if (atividade_fisica ==='pouco ativo'){
            return 1.11
        } else if(atividade_fisica ==='ativo'){
            return 1.25
        } else if (atividade_fisica ==='muito ativo'){
            return 1.48
        }

    }else{
        //mulher        
        if(sexo==='mulher'){
            if(atividade_fisica ==='sedentario'){
                return 1.00
            } else if(atividade_fisica ==='pouco ativo'){
                return 1.12
            } else if (atividade_fisica ==='ativo' ){
                return  1.27
            } else if(atividade_fisica ==='muito ativo'){
                return 1.45
            }
        }
    }

    
}

function calculo(idade, peso, altura , af ,atividade_fisica, sexo){
    if(sexo==='homem'){
        return 662 - (9.53 * idade) + af * (15.91 * peso) + (539.6 * altura)
    } else ( sexo==='mulher');{
        return 354 - (6.91 * idade) + af *(9.36 * peso) + (726 * altura)
    }
}

function calculo2(descobrir_necessidade_calorica, caloria_aumentada_ou_reduzida_por_dia,ganhar_ou_perder){
    if(ganhar_ou_perder==='ganhar'){
return descobrir_necessidade_calorica + caloria_aumentada_ou_reduzida_por_dia
    }else(ganhar_ou_perder==='perder');{
        return descobrir_necessidade_calorica - caloria_aumentada_ou_reduzida_por_dia
    }
}

function quilos_ganhos_ou_perdidos(descobrir_necessidade_calorica,novo_valor_de_ingestao,ganhar_ou_perder){
    if (ganhar_ou_perder==='ganhar'){
        return novo_valor_de_ingestao - descobrir_necessidade_calorica
    } else(ganhar_ou_perder==='perder');{
        return descobrir_necessidade_calorica - novo_valor_de_ingestao
    }
}




