import { question } from "readline-sync"

function main(){
    //v nome_variaveis = question("Digite nomes de variaveis: ")
    
    function snake_para_Camel(str) {
        return str.replace(/[^a-zA-Z0-9]+(.)/g, (i, chr) => 
        {return chr.toUpperCase()})
      }
      /* o replace "tira" o underline no snake case e o toUpperCase vai colocar em          
      maiuscula a primeira letra apos o underline.
      */
      //exemplos:
      console.log(snake_para_Camel('nome_completo'))
      console.log(snake_para_Camel('idade'))
      console.log(snake_para_Camel('media_semestral_aluno'))
      
      /*não sei fazer do jeito que a questão pede, mas já tinha visto ser feito 
       com os exemplos já prontos no curso do Luis Otavio Miranda sobre javaScript na Udemy
      */
}
main()