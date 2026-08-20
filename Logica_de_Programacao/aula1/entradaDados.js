const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite sua idade: ", (idade) => {
    idade = Number(idade);

    if (idade >=18){
        console.log("Maior de idade");
    }else{
        console.log("Menor de idade")
    }

    entrada.close();

});