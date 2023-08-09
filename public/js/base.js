const nome = "Marco Antônio";
let nome2 = "Jailson Legal";
let pessoaDefault = {
    nome: "Marco Antônio",
    idade: "16",
    profissão: "empreendedor"
}

let nomes = ["Marco Antônio", "Jailson Legal", "Lucas Bacana"];
let pessoas = [
    {
    nome: "Marco Antônio",
    idade: "16",
    profissão: "Empreendedor"
    },
    {
    nome: "Jailson Legal",
    idade: "43",
    profissão: "Investidor"
    }
];

//console.log(pessoas);

//function AdicionarPessoa(pessoa) {
    //pessoas.push(pessoa);
//}

function ImprimirPessoas(){
    pessoas.forEach((item) => {
        console.log("Nome: ")
        console.log(item.nome);

        console.log("idade: ")
        console.log(item.idade);

        console.log("Profissão: ")
        console.log(item.profissão);

        console.log(item);
    })
}

ImprimirPessoas();

AdicionarPessoa({
    nome: "Marcelo Rogério",
    idade: "10",
    profissão: "estudante"
})

ImprimirPessoas();

//console.log(pessoas);

/*console.log("Valor inicial: ");
console.log(nome2);

nome2 = "Marcelo Rogério";

console.log("Valor alterado: ");
console.log(nome2);

console.log(nomes);*/

/*function AlteraNome() {
    nome2 = "Juliana Daora";
    console.log("Valor alterado: ");
    console.log(nome2);
}

function Recebe_e_Altera_Nome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}

function ImprimePessoa(){
console.log(pessoa);
console.log("Nome: ")
console.log(pessoa.nome);

console.log("idade: ")
console.log(pessoa.idade);

console.log("Profissão: ")
console.log(pessoa.profissão);
}

ImprimePessoa(pessoaDefault);

ImprimePessoa({
    nome = "Juliana Daora",
    idade = "24",
    profissão = "Professora"
});*/


//Recebe_e_Altera_Nome("Maria Helena");
//AlteraNome();