// Receba três números inteiros e exiba o maior e o menor entre eles.

let num1 = 56
let num2 = 145
let num3 = 80

let maior, menor;

if(num1 >= num2 && num1 >= num3){
    maior = num1
}else if(num2 >= num1 && num2 >= num3){
    maior = num2
}else{
    maior = num3;
}

if(num1 <= num2 && num1 <= num3){
    menor = num1
}else if(num2 <= num1 && num2 <= num3){
    menor = num2
}else{
    menor = num3;
}

console.log("o maior numero e " + maior)
console.log("o menor numero e " + menor)


/**
 * if (Number1 > Number2) {
    console.log("Numero1 maior que Numero2")
}else if (Number1 > Number3) {
    console.log("Numero1 maior que Numero3")
}else if (Number2 > Number1){
    console.log("Numero2 maior que numero1")
}else if (Number2 > Number3){
    console.log("Numero2 maior que numero3")
}else if (Number3 > Number1){
    console.log("Numero 3 maior que numero 2")
}else{
    console.log("Numero 3 maior que numero 2")
} 
 */


