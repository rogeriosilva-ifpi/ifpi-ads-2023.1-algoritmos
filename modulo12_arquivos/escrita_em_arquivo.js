import fs from 'fs'

function main(){
    const file = fs.createWriteStream('arquivo.txt', 'utf-8')

    for (let i = 0; i < 10; i++){
        file.write(`Linha ${i}: Testando\n`)
    }

    file.end()

}

main()