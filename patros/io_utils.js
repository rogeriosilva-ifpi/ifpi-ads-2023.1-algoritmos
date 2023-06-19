import { question } from "readline-sync"

export function print(text){
    console.log(text)
}

export function input(text){
    return question(text)
}

export function clear_screen(){
    console.clear()
}

export function enter_to_continue(){
    input('Press <enter> to continue ...')
    clear_screen()
}
