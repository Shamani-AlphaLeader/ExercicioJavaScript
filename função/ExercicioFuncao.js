// Fazer um menu de exercicios utilizando o exemplo dado em aula.
// Criar um menu onde e possivel executar 6 dos exercicios anteriores.
// Requisito: Cada exercicio deve ser encapsulado em uma funcao,e o menu deve executar essas funcoes.
// O usuario podera escolher qual exercicio ele quer visualizar.
// Requisito 2: O usuario deve digitar 0 para sair do menu.

function exercicio1() {
    let senha = prompt("Digite a senha:")

    if (username == "admin" && senha == "senha123") {
        console.log("Login bem Sucedido.");
    }

    if (username == "admin" && senha == "senha123") {
        console.log("Login bem sucedido");
    } else {
        console.log("Voce não tem permissão de acesso!")
    }
}

function exercicio2() {
    let dia = parseInt(prompt("Insira um numero de 1 a 7"))
    switch (dia) {
        case 1: console.log("Segunda feira")
            break;
        case 2: console.log("Terça feira")
            break;
        case 3: console.log("Quarta feira")
            break;
        case 4: console.log("Quinta feira")
            break;
        case 5: console.log("Sexta feira")
            break;
        case 6: console.log("Sabado")
            break;
        case 7: console.log("Domingo")
            break;

        default:
            console.log("O numero informado nao e valido")
    }
}

function exercicio3() {
    let numero = parseInt(prompt("Digite um numero para a sua identificação "))

    if (numero % 2 !== 0) {
        console.log("Este é um número par")
    }
    else {
        console.log("Este é um número ímpar")
    }
}

function exercicio4() {
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
}

function exercicio5() {
    let a = parseInt(prompt("Insira um numero"))

    let b = parseInt(prompt("Insira um outro numero"))

    let c = parseInt(prompt("Insira mais um numero"))

    if (a < b && b < c) {
        console.log("Os numeros foram inseridos em ordem crescente")
    }

    else if (a > b && b > c) {
        console.log("Os numeros foram inseridos em ordem Decrescente")
    }

    else {
        console.log("Os numeros inseridos nao estao em ordem crescente, nem decrescente.")
    }
}

function exercicio6() {
    let nascimento = parseInt(prompt("Digite o seu ano de nascimento:"))

    let idade = 2024 - nascimento;

    if (idade >= 18) {
        console.log("Sua idade foi aprovada!!!");
        console.log("Sua idade e" + idade)
    }

    else {
        console.log("Voce não tem permissão de acesso, devido a restrições de idade!")
        console.log("Sua idade e" + idade)
    }
}

do{
    let opcao = prompt("MENU\n1 - Escolha uma opcao: \n2 - Digite 0 para sair")

    switch (opcao) {
        case "1":
            exercicio1();
            opcao = prompt("Escolha uma opcao: \n1 - Login\n2 - Exercicio Login\n3 - Digite 0 para sair")
            break;
            


        case "2":
            exercicio2();
            opcao = prompt("Escolha uma opcao: \n1 - Dias\n2 - Exercicio dos dias\n3 - Digite 0 para sair")
            break;

        case "3":
            exercicio3();
            opcao = prompt("Escolha uma opcao: \n1 - Par/Impar\n2 - Exercicio Par ou Impar\n3 - Digite 0 para sair")
            break;

        case "4":
            exercicio4();
            opcao = prompt("Escolha uma opcao: \n1 - Notas\n2 - Exercicio Notas\n3 - Digite 0 para sair")
            break;

        case "5":
            exercicio5();
            opcao = prompt("Escolha uma opcao: \n1 - Crescente/Decrescente\n2 - Exercicio Ordem Crescente e Decrescente\n3 - Digite 0 para sair")
            break;

        case "6":
            exercicio6();
            opcao = prompt("Escolha uma opcao: \n1 - Idade\n2 - Exercicio Idade\n3 - Digite 0 para sair")
            break;

        default:
            break;
    }

}while (opcao != "0"){

    
}