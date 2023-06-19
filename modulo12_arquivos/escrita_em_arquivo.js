import fs from 'fs'

function main(){
    const data = ''

    for (let i = 0; i < 10; i++){
        data += `Linha ${i}: Testando\n`
    }

    fs.writeFileSync('montadoras.txt', data)

}

main()