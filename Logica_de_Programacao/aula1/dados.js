vetor = [40, 56, 43, 64, 423, 64, 893, 53, 211, 344]

function somar(vetor) {
    soma = 0;
    for (i = 0; i < 10; i++) {
        soma = soma + vetor[i];
    }
    return soma;
}

function calcularMedia(vetor) {
    total = somar(vetor);
    return total / 10
}

function encontrarMaiorEMenor(vetor) {
 
    let maior = vetor[0];
    let menor = vetor[0];


    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    
   
    return { maior: maior, menor: menor };
}


console.log("Soma:", somar(vetor));          
console.log("Média:", calcularMedia(vetor));   

const resultado = encontrarMaiorEMenor(vetor);
console.log("Maior número:", resultado.maior); 
console.log("Menor número:", resultado.menor); 
