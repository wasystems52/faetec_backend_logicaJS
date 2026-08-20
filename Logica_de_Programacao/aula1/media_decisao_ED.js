const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite Nota1: ", (nota1) => {
    nota1 = Number(nota1);
    entrada.question("Digite Nota2: ", (nota2) => {
        nota2 = Number(nota2);

        media = (nota1 + nota2) / 2


        if (media >=7) {
            console.log("Aprovado");
        } else if (media < 7 && media > 6) {
            console.log("Recuperacao");
        } else{
            console.log("Reprovado");
        }

        entrada.close();
    });
});