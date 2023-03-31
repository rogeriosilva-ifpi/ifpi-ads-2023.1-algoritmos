import { question } from "readline-sync";

function main() {

    //Entrada
    const nome = question('Nome: ')
    const sexo = question('Sexo: ')
    const idade = question('Idade: ')
    const peso = question('Peso: ')
    const altura = question('Altura: ')
    const perfil = question('Perfil de atividade física: ')
    const semanas = Number(question('Em quantas semanas você quer perder ou ganhar peso?: '))

    const pergunta = question('Você quer perder ou ganhar peso?: ')

    if (pergunta === 'Perder') {
        var quanto = Number(question('Quanto peso você quer perder?: '))
    } else { var quanto = Number(question('Quanto peso você quer ganhar?: ')) }


    //Processamento

    const peso_por_semana = calcular_quanto_peso(peso, quanto)
    const calorias_quanto = calcular_calorias_quanto(peso, quanto)
    const necessidade_calorica = calcular_necessidade_calorica(sexo, idade, peso, perfil, altura)

    //Saída
    console.log(`Você deverá perder/ganhar pelo menos ${peso_por_semana}kg, o que equivale a ${calorias_quanto}kcal`)
    console.log(`Sua necessidade calórica diária é ${necessidade_calorica}`)

    if (peso_por_semana > 1) {
        console.log('CUIDADO! Você perderá ou ganhará mais de 1 quilo por semana com essa dieta, o que pode comprometer sua saúde.')
    }









    //Funções

    function calcular_quanto_peso(quanto) {

        var quanto_peso = quanto / semanas
        return quanto_peso
    }

    function calcular_calorias_quanto(peso) {

        var quanto_peso = quanto / semanas

        var calorias_quanto = quanto_peso * 7700
        return calorias_quanto


    }

    function calcular_necessidade_calorica(sexo, idade, peso, perfil, altura) {

        if (sexo === 'Feminino') {

            if (perfil === 'Sedentário') {
                var necessidade = 354 - (6.91 * idade) + 1 * (9.36 * peso) + (726 * altura)
            }

            if (perfil === 'Pouco Ativo') {
                var necessidade = 354 - (6.91 * idade) + 1.12 * (9.36 * peso) + (726 * altura)
            }

            if (perfil === 'Ativo') {
                var necessidade = 354 - (6.91 * idade) + 1.27 * (9.36 * peso) + (726 * altura)
            }

            if (perfil === 'Muito Ativo') {
                var necessidade = 354 - (6.91 * idade) + 1.45 * (9.36 * peso) + (726 * altura)
            }


        }

        if (sexo === 'Masculino') {

            if (perfil === 'Sedentário') {
                var necessidade = 662 - (9.53 * idade) + 1 * (15.91 * peso) + (539.6 * altura)
            }
            if (perfil === 'Pouco Ativo') {
                var necessidade = 662 - (9.53 * idade) + 1.11 * (15.91 * peso) + (539.6 * altura)
            }
            if (perfil === 'Ativo') {
                var necessidade = 662 - (9.53 * idade) + 1.25 * (15.91 * peso) + (539.6 * altura)
                if (perfil === 'Muito Ativo') {
                    var necessidade = 662 - (9.53 * idade) + 1.48 * (15.91 * peso) + (539.6 * altura)




                }






            }

            return necessidade.toFixed(1)
        }



    }






}
main()