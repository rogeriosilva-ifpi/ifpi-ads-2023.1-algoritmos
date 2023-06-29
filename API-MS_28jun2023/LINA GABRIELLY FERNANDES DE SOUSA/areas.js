import {question} from readliny-sync


function main (){

console.log = ("Olá, por favor escolha duas figuras geométricas planas diferentes.  ") 

let menu  
("Digite "(1) `para Quadrado`) = Quadrado 
("Digite" (2)  `para retangulo` ) = retangulo
("Digite" (3) ` para triangulo `)= triangulo 
("Digite" (4) ` para trapezio`) = Trapezio
("Digite" (5) `para circulo` ) = circulo
console.log = question(Number (`Digite o numero da figura desejada : `))
if ( menu <0 || >5  )
console.log ("NUMERO INVALIDO")



const Quadrado = question (Number )
const retangulo = question(Number )
const triangulo = question(Number)
const Trapezio = question( Number)
const circulo=  question(Number)

while ( Quadrado 
|| retangulo
|| triangulo
|| Trapezio
|| circulo 
> 0 )


function escolheu  ( Quadrado, retangulo,triangulo , Trapezio, circulo)

if ( escolheu = Quadrado ) 
return calcular_area_q 

if (escolheu= retangulo )
return calcular_area_r

if (escolheu = triangulo )
return calcular_area_T

if (escolheu = Trapezio )
return calcular_area_z

if (escolheu = circulo )
return calcular_area_c


function calcular_area_q   ( Quadrado , area_q )
const area_q = question(Number (" Informe lado do quadrado:      "))
if ( area_q =! 0 )
return   area_q*area_q 

function calcular_area_r ( retangulo, area_r)
const comprimento = question(Number ("Informe comprimento: "))
const largura = question(Number ("Informe a largura : "))
if (comprimento , largura =! 0 )
return comprimento * largura

function calcular_area_T ( triangulo, area_T)
const base= question(Number ("Informe a base : "))
const altura = question(Number ("Informe a altura : "))
if (base,altura =!0 )
return base*altura/2

function calcular_area_z ( trapezio , area_z)
const base_maior = question(Number("informe a base maior : ") )
const base_menor = question(Number ("Informe a base menor : "))
const altura_z = question (Number("Informe a altura: "))
if (base_maior,base_menor , altura_z =!0 )
return ((base_maior+base_menor)*altura_z /2)

function calcular_area_c ( circulo,area_c)
const raio= question(Number ("Informe o raio : "))
if ( raio=!0 )
return 3.14159*raio

function difença 
if (Quadrado > retangulo , triangulo, Trapezio, circulo  )
return `quadrado é maior que todos`

if ( retangulo> Quadrado, triangulo, Trapezio, circulo)
return `retangulo é maior todos`

if ( triangulo> Quadrado,triangulo, retangulo, Trapezio, circulo)
return `triangulo é maior que todos `

if (Trapezio> Quadrado, retangulo, triangulo, circulo)

if (circulo > Trapezio, Quadrado, retangulo, triangulo)
return `circulo é maior que todos `


} main
