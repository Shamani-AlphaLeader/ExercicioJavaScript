// Nome
//let nome = "Bruno"
//let nome1 = "Froes"
// Apelido
//let apelido = "Shamani"
//let apelido1 = "Bru"

let pessoa1 = {
    nome: "Bruno",
    apelido: "Shamani"
}

let pessoa2 = {
    nome: "Ryo",
    apelido: "Jubileu"
}

let pessoa3 = {
    nome: "Leona",
    apelido: "Papa Mike"
}

let pessoa4 = {
    nome: "Clark",
    apelido: "Commando"
}

let produto = {
    nome: "Fuzil M4",
    marca: "Colt",
    descricao: "Fuzil de assalto automatico calibre 5.56mm",
    preco: 3500.00

}

console.log(produto + preco + " " + produto.descricao);

console.log("Ola, Lider Alpha, acabe com seus inimigos utilizando a Manual")

console.log(`Ola ${pessoal.nome}, ${produto.descricao}, utilizando a ${produto.marca}`)

let produtoCadastrado = {
    nome: "",
    valor: "",
    marca: ""
}

produtoCadastrado.nome = prompt("Digite o nome do produto: ")
produtoCadastrado.nome = parseFloat(prompt("Digite o nome do produto: "))
produtoCadastrado.nome = prompt("Digite o nome do produto: ")

console.log(produtoCadastrado);