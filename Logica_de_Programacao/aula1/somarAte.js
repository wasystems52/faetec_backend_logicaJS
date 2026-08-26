function somarAte(numero) {
    let soma = 0;  
    let atual = 1; // Inicialização da variável atual

    while (atual <= numero) { // Condição
        soma += atual; // Adiciona o valor atual à soma
        atual++; // Incremento crucial para não travar o código!
    }  
    return soma;
}

console.log(somarAte(4)); // Retorna 10 (1 + 2 + 3 + 4)
console.log(somarAte(5)); // Retorna 15 (1 + 2 + 3 + 4 + 5)