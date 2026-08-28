const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Escolha opção:")
console.log("1-Cadastrar")
console.log("2-Consultar")
console.log("3-Atualizar")
console.log("4-Excluir")
console.log("5-Sair")
console.log(" ")
readline.question('Digite a opcao desejada: ', (opcao) => {
    switch (opcao) {
        case '1':
            console.log("Sua escolha foi Cadastrar")
            break;
        case '2':
            console.log("Sua escolha foi Consultar")
            break;
        case '3':
            console.log("Sua escolha foi Atualizar")
            break;
        case '4':
            console.log("Sua escolha foi Excluir")
            break;
        case '5':
            console.log("Sua escolha foi Sair")
            break;
        default:
            console.log("Escolha errada")
            break;    
    }

    readline.close(); // Fecha o leitor de teclado
});
