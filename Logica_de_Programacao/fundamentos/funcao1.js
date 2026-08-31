const imprimirSoma = (a, b) => {
    console.log(a + b);
}   

imprimirSoma(2, 3); // Saída: 5
imprimirSoma(2); // Saída: NaN (b é undefined)
imprimirSoma(2, 3, 4, 5); // Saída: 5 (os argumentos extras são ignorados)  
imprimirSoma(); // Saída: NaN (a e b são undefined)

function soma(a, b = 1) {
    return a + b;
}   

soma(2, 3); // Saída: 5
soma(2);    
soma(); // Saída: NaN (a é undefined, b é 1)

const subtrair = (a, b = 1) => a - b;

console.log(subtrair(5, 2)); // Saída: 3
console.log(subtrair(5)); // Saída: 4  


