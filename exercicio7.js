let preco = parseFloat(prompt("Coloque o valor da compra"))

if (preco<=100.0) {
    alert("Valor a ser pago: " +preco)
}

else if (preco >=100.01 && preco-200) {
let precoS1 = preco *0.9;

alert("Valor a ser pago:" +precoS1)
}

else if (preco > 200) {
let precoS2 = preco * 0.8;

alert("Valor a ser pago:" +precoS2)
}

