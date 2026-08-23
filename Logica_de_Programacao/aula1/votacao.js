const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite sua idade: ", (idade) => {
    idade = Number(idade);

if (idade >= 18 ) { 
    console.log("Pode votar")
}else if (idade < 18 && idade >= 16) {
    console.log("De menor de 18 anos, mas pode votar")
}else {
    console.log("Não pode votar")
}

});
