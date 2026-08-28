function somar(num1, num2) {
    return resultado = num1 + num2;
}

function subtrair(num1, num2) {
    return resultado = num1 - num2;
}
function mult(num1, num2) {
    return resultado = num1 * num2;
}
function div(num1, num2) {
    return resultado = num1 / num2;
}

num1 = 23
num2 = 34
escolha = '/'

switch (escolha) {
    case '+':
        somar(num1, num2);
        console.log(resultado);
        break
    case '-':
        subtrair(num1, num2);
        console.log(resultado);
        break
    case '*':
        mult(num1, num2);
        console.log(resultado);
        break
    case '/':
        div(num1, num2);
        console.log(resultado);
        break

    default:
        console.log("Invalido")
        break
}
