// Escreva um programa que solicite o nome do usuario e lhe dê boas vindas,
// exibindo uma mensagem pelo console.

// prompt -> Recebe uma entrada digitada.
// let nome = prompt("Olá, digite o seu nome: ")

// Concatenação
// console.log("Seja bem vindo " + nome + "!!!");

let pontos = 100

//parseInt() -> Transforma oque esta entre () em numero inteiro.
//let bonus = parseInt ( "Quantos pontos voce deseja somar?") )

//Adicao
//Subtracao
//Multiplicacao
//Divisao


let bonus = parseInt( prompt("Quantos pontos voce deseja somar?") )

let pontuacaoTotal = pontos + bonus
console.log(pontuacaoTotal)

//parseFloat() -> Transforma oque esta em () em numero com , (numero quebrado ou nao inteiro).
let notaAluno = parseFloat (prompt ("Digite a nota do aluno") )