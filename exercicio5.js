let a = parseInt(prompt("Insira um numero"))

let b = parseInt(prompt("Insira um outro numero"))

let c = parseInt(prompt("Insira mais um numero"))
 
if(a<b && b<c){
alert("Os numeros foram inseridos em ordem crescente")
 }

 else if (a>b && b>c) {
    alert("Os numeros foram inseridos em ordem Decrescente")
 }

 else{
alert("Os numeros inseridos nao estao em ordem crescente, nem decrescente.")
 }