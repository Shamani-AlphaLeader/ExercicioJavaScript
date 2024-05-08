//5.	Imprimir os primeiros 10 números da sequência de Fibonacci.

let fib1 = 0;
let fib2 = 1;

console.log("Os primeiros 10 numeros da sequencia de Fibonacci sao: ")
console.log(fib1);
console.log(fib2);

for (let num = 2; num <= 10; num++) {
    let nextFib = fib1 + fib2;
    console.log(nextFib);

//atualiza sempre os valores de fib1 e fib2 para os proximos calculos.

fib1 = fib2;
fib2 = nextFib;
}