import prompt from 'prompt-sync'
let input = prompt()

function main(){

    const N = Number(input("Digite o número de variáveis: "));
    let variaveis_compostas = 0;
    let variaveis_simples = 0
    let camelCase = "";
    
    for (let i = 0; i < N; i++) {
      console.log("\n")
      let snake_case = input("Digite a variavel em snake_case: ");
      if (eh_composta(snake_case)) {
        variaveis_compostas++;
      } else {
        variaveis_simples++
      }
      camelCase = snake_para_camel(snake_case);
      console.log("\nVariável em camelCase: ", camelCase);
    }
    
    console.log("\nNúmero de variáveis compostas: ", variaveis_compostas);
    console.log("Número de variáveis simples: ", variaveis_simples);
    
    // Converte snake_case para camelCase
    function snake_para_camel(texto) {
      let novo_texto = "";
      let pos_snakes = [];
      let j = 0;
    
      // Guardando posição dos underscores
      for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "_") {
          pos_snakes[j] = i + 1;
          j++;
        }
      }
    
      // Trocando a letra após as snakes por maiúscula
      for (let pos of pos_snakes) {
        texto = texto.replace(texto[pos], texto[pos].toUpperCase());
      }
    
      // Removendo as snakes
      novo_texto = texto.replaceAll("_", "");
      return novo_texto;
    }
    
    // Verifica se a variável é composta
    function eh_composta(variavel) {
      for(let i = 0; i < variavel.length; i++){
        if(variavel[i] == "_"){
          return true
        }
      }
      return false
    }
}
main()