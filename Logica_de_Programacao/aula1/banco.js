function processarTransacao(saldoAtual, valorSaque) {
    if (valorSaque % 10 !== 0) {
        console.log("O valor do saque deve ser múltiplo de 10.");
        return saldoAtual;
    } else if (valorSaque <= saldoAtual) {
        const saldoRestante = saldoAtual - valorSaque;
        return `Saque de R$ ${valorSaque} realizado com sucesso! Saldo restante: R$ ${saldoRestante}`;
    } else {
        console.log("Saldo insuficiente.");
        return saldoAtual;
    }
    
}
console.log(processarTransacao(500, 33)); 