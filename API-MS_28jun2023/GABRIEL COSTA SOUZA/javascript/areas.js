import { area_maior, calcular_area, enter_to_clear, menu, mostrar_porcentagem_area, receber_figura_geometrica, retornar_nome_figura } from "./utils_prova.js"




function main(){

    menu()

    let figuras = receber_figura_geometrica()
    let area1 = calcular_area(figuras[0])
    let area2 = calcular_area(figuras[1])

    console.log('Carregando computacao de dados...\n')

    enter_to_clear()

    console.log(`Nome > ${retornar_nome_figura(figuras[0])} || Area >> ${area1}\nNome > ${retornar_nome_figura(figuras[1])} || Area >> ${area2}\n`)
    
    area_maior(area1,retornar_nome_figura(figuras[0]),retornar_nome_figura(figuras[1]),area2)
    
    mostrar_porcentagem_area(area1,retornar_nome_figura([figuras[0]]),retornar_nome_figura(figuras[1]),area2)

}



main()