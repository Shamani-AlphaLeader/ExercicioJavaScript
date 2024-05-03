let nota1 = parseInt(prompt("Digite a nota do aluno"));

let nota2 = parseInt(prompt("Digite a nota do aluno"));

let nota3 = parseInt(prompt("Digite a nota do aluno"));

let nota4 = parseInt(prompt("Digite a nota do aluno"));

let notaF = (nota1 + nota2 + nota3 + nota4)/4;

if (notaF >= 7) {
    alert("Aluno aprovado");
}
else if(notaF < 7 && notaF >=5){
alert("Aluno em Recuperação");
}

else {
    alert("Aluno Reprovado");
}

