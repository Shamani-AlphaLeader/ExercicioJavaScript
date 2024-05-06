let peso = parseFloat(prompt("Coloque o seu peso"))

let altura = parseFloat(prompt("Coloque a sua altura"))

let IMC = peso / (altura * altura);

console.log(IMC)
if (IMC < 18.5) {
    alert("esta abaixo do peso")
}

else if (IMC >= 18.5 && IMC >= 24.9) {
    alert("o peso esta normal")
}


else if (IMC >= 18.5 && IMC >= 29.9) {
    alert("sobrepeso")
}

else if (IMC >= 30 && IMC >= 34.9) {
    alert("obesidade de grau 1")
}

else if (IMC >= 35 && IMC >= 39.9) {
    alert("obesidade de grau 2")
}

else if (IMC >= 40) {
    alert("obesidade de grau 3")
}
