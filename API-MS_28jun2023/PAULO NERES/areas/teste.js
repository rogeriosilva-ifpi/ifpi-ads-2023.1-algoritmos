//var indices = [];
//var array = ['a', 'b', 'a', 'c', 'a', 'd'];
//var elemento = 'a';
//var idx = array.indexOf(elemento);
//while (idx != -1) {
 // indices.push(idx);
  //idx = array.indexOf(elemento, idx + 1);

//console.log(indices);
// [0, 2, 4]


import {question} from "readline-sync"

export function figuras(){
    const figuras_geometricas = Number(question("Quadrado,Retângulo,Trapézio,Círculo"))
    return figuras_geometricas
}
figuras()
console.log(figuras_geometricas)
