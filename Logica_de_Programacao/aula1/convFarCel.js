//Receba um valor e uma string (unidade) indicando "C" (Celsius) 
//ou "F" (Fahrenheit). Converta  para a outra unidade.
//C = (F - 32) * 5/9 e 
//F = (C * 9/5) + 32.

function CelsiusParaFahrenheit(Celsius){
    return (Celsius * 1.8) + 32
}

function FahrenheitParaCelsius(Fahre){
    return (Fahre -32) / 1.8
}

console.log(CelsiusParaFahrenheit(77))
console.log(FahrenheitParaCelsius(97))

F=97;
C=77;

const cParaF = (C * 9/5) + 32
const fParaC = (F - 32) * 5/9

console.log(cParaF)
console.log(fParaC)




