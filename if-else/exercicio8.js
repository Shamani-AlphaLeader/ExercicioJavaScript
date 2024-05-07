let peso = parseFloat(prompt("Informe o seu peso (em kg): "))

let altura = parseFloat(prompt("Informe a sua altura (em metros) "))

let IMC = peso / (altura * altura);

console.log("Seu IMC e" + IMC.toFixed(2));

if (IMC < 18.5) {
    console.log("esta abaixo do peso")
}

else if (IMC >= 18.5 && IMC >= 24.9) {
    console.log("o peso esta normal")
}


else if (IMC >= 18.5 && IMC >= 29.9) {
    console.log("sobrepeso")
}

else if (IMC >= 30 && IMC >= 34.9) {
    console.log("obesidade de grau 1")
}

else if (IMC >= 35 && IMC >= 39.9) {
    console.log("obesidade de grau 2")
}

else if (IMC >= 40) {
    console.log("obesidade de grau 3")
}
