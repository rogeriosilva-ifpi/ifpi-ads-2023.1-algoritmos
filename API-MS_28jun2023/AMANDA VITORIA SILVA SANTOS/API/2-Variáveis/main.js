//Pseudocódigo:

/* 1° Peça um valor para N:
    vai ser a quantidade de vezes que você vai ter que escrever um nome de uma variavél;

   2° Criar um vetor vazio para nomes snake_case;

   3° Criar um while:
        declarar i = 0
            enqunto i <= n:
                pedir nome de variavel em snake_case
                const nome
                i++

        adicionar a um vetor com .append         

    4° Criar um novo vetor vazio para colocar os nomes camelCase

    5° Transformar em camelCase:
        para cada elemento de vetor de nomes:
            alterar a primeira  letra após a (/) e retirar a /:
                Função de MAP:
                transformar minúsculo para maiúsculo com os valores da tabela ASCII

            adicionar ao vetor nomes transformados com .append

    5° Função de REDUCE:
            percorer o vetor de nomes camelCase e vereficar quantos possuem letra maiuscula  
        

        imprimir a quantidade de palavras que possuem a letra maiuscula;
        minusculas será N - maiúsculas     
*/