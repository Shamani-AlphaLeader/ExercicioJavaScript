//10.	Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.

let num;

do {
num = parseInt(prompt("Insira um numero: (insira o numero 0 para sair)."))
} while (num !==0);

console.log("voce inseriu 0. o programa foi encerrado.")