import fs from 'fs'

export function ler_arquivo(arquivo){
    const data = fs.readFileSync(arquivo, 'utf-8')
    
    const lines = data.split('\n')

    return lines
}