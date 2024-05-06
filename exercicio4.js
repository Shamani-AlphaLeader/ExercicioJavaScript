alert("Informe as notas de 0 a 10")

let nota1 = parseFloat(prompt("Digite a primeira nota do aluno"))

let nota2 = parseFloat(prompt("Digite a segunda nota do aluno"))

let nota3 = parseFloat(prompt("Digite a terceira nota do aluno"))

let nota4 = parseFloat(prompt("Digite a quarta nota do aluno"))

let mediaF = (nota1 + nota2 + nota3 + nota4) / 4

if (mediaF >= 7) {
    console.log("Aluno aprovado")
}
else if (mediaF < 7 && mediaF >= 5) {
    console.log("Aluno em Recuperação")
}

else {
    console.log("Aluno Reprovado")
}

