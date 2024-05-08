//4.	Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.
let numero = parseInt(prompt("Digite um numero para ver na tabuada: "))

for(let num = 1; num <= 10; num ++){
console.log(numero + "X" + num + " = " + (numero*num));
}

console.log(isNaN("Ola"))// retorna como true.
console.log(isNaN(123))// retorna como false.