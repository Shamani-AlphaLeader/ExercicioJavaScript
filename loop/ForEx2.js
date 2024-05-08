//	Imprimir números pares de 1 a 10.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares);