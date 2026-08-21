const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite sua idade: ", (idade) => {
    idade = Number(idade);

    entrada.question("Possui carteira de motorista? (true/false): ", (carteira) => {
    carteira = (carteira === 'true');

if (idade >= 18 && carteira == true) { 
    console.log("Pode dirigir")
}else {
    console.log("Não pode dirigir")
}   

});
});

