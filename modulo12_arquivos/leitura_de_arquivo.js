import fs from 'fs'

function main(){
    const data = fs.readFileSync('arquivo.txt', 'utf-8')

    const lines = data.split('\n')

    for(let line of lines){
        console.log(line)
    }
}

main()