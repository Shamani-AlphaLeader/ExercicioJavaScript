//	Imprimir números pares de 0 a 20 utilizando o loop while

let num = 0;

console.log("Insira numeros pares de 0 a 20: ")

while (num <= 20) {
    if (num % 2 == 0) {
        console.log(num)
    }
    num++;
}