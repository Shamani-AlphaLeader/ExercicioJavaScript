//	Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.

let num = parseInt(("Insira um numero para contagem regressiva: "));

console.log("A contagem regressiva esta comecando em: " + num)

while(num >= 0){
    console.log(num);
    num--;
}

console.log("Contagem regressiva finalizada com sucesso!!!");