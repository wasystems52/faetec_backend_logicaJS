valor = 198
desconto = 0.10

if (valor > 100) {
    desconto = valor * desconto
    total = valor - desconto
    console.log("O valor total é: " + total)
}else {
    console.log("O valor total é: " + valor)
}