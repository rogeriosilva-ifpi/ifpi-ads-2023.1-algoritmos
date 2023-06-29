import { question } from "readline-sync";

export function input(text){
    let quest = question(text)
    return quest
}
export function print(content){
    console.log(content)
}
export function input_number(text){
    let Num = Number(question(text))

    while( Num === ' ' || (isNaN(Number(Num))) ){
        print('Por favor digite um numero: ')
        Num = Number(question(text))
    }
    
    return Num
}