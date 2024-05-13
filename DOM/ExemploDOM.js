
document.body.innerHTML += "<h1>Teste H1</h1>"

document.body.innerHTML += '<p id="texto">Outro teste</p>'

let paragrafo = document.getElementById("texto")

paragrafo.style.color = "blue"

// let opcao = window.prompt("Escolha a cor do paragrafo:\n1 - Verde\n2 - Vermelho")

// if (opcao == "1") {
//     paragrafo.style.color = "darkgreen"
// } else if (opcao == "2") {
//     paragrafo.style.color = "red"
// } else {
//     window.alert("Opcao invalida")
// }

let cliques = 0;

const somarCliques = () => {
    //cliques = cliques + 1
    //cliques += 1
    cliques ++

    let spanCliques = document.getElementById("num-cliques")

    spanCliques.innerText = cliques

}

const mudarNome = () => {
    let tituloNome = document.querySelector("#titulo-nome")

    tituloNome.innerText += "Shamani's"

}
tituloNome.addEventListener("click", mudarNome)

//document.addEventListener("DOMContentLoaded", () => alert("Bem-vindo, Soldado!!!"))

function voltarPagina(){
    window.close()
}
