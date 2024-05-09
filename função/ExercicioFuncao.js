// Fazer um menu de exercicios utilizando o exemplo dado em aula.
// Criar um menu onde e possivel executar 6 dos exercicios anteriores.
// Requisito: Cada exercicio deve ser encapsulado em uma funcao,e o menu deve executar essas funcoes.
// O usuario podera escolher qual exercicio ele quer visualizar.
// Requisito 2: O usuario deve digitar 0 para sair do menu.

function exercicio1(){
    let opcaoMenu = prompt("EXERCICIO DE FUNCAO: \nDigite uma opcao\nDigite 0 para sair")
    while (opcaoMenu != "0"){
console.log("Repetiu");

opcaoMenu = prompt("R:Digite uma opcao\nDigite 0 para sair.")
    }
}

let opcao = prompt("Escolha uma opcao: \n1 - if-else\n2 - exercicio1.js")

switch (opcao) {
    case "1":
        console.log("");
        break;

        case "2":
            exercicio1();
            break;

            case "3":
            exercicio2();
            break;

            case "4":
            exercicio3();
            break;

            case "5":
                exercicio4();
                break;

                case "6":
            exercicio5();
            break;

            case "7":
            exercicio6();
            break;

            default:
                break;
    }