import { question as q } from 'readline-sync'

function main(){
    // Input: "5 61 -70 8"
    const [n1, n2, n3, n4] = q().split(' ').map(Number)

    console.log(`v1: ${n1}, v2: ${n2}, v2: ${n3}, v4: ${n4}`)
    // Output: "v1: 5, v2: 61, v2: -70, v4: 8"
}


main()