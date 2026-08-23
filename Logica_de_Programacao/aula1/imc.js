function calcularIMC(peso, altura) {   
    const imc = peso / (altura * altura);
    return parseFloat(imc.toFixed(2));
}

calcularIMC(90, 1.55); // Saída: 22.86

if (calcularIMC(90, 1.55) < 18.5) {
    console.log("Abaixo do peso");
}else if (calcularIMC(90, 1.55) >= 18.5 && calcularIMC(90, 1.55) < 25) {
    console.log("Peso normal");
}else {
    console.log("Acima do peso");
}