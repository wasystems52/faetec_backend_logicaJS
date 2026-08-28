const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Definição de todas as funções de conversão
const celsiusParaFahrenheit = celsius => (celsius * 9 / 5) + 32;
const fahrenheitParaCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;
const kmParaMetro = km => km * 1000;
const metroParaKm = metro => metro / 1000;

// 2. Exibição do menu principal
console.log("1 - Converter Celsius Para Fahrenheit");
console.log("2 - Converter Fahrenheit Para Celsius");
console.log("3 - Km para Metro");
console.log("4 - Metro para Quilômetro");
console.log(" ");

// 3. Captura da opção do menu
readline.question('Digite a opcao desejada: ', (opcao) => {
    switch (opcao) {
        case '1':
            readline.question('Digite a temperatura em Celsius: ', (resposta) => {
                const celsius = parseFloat(resposta);
                if (!isNaN(celsius)) {
                    console.log(`${celsius}°C equivale a ${celsiusParaFahrenheit(celsius)}°F`);
                } else {
                    console.log("Por favor, digite um número válido.");
                }
                readline.close(); // Fecha o teclado APÓS a resposta do usuário
            });
            break; // Importante para não executar o código de baixo

        case '2':
            readline.question('Digite a temperatura em Fahrenheit: ', (resposta) => {
                const fahrenheit = parseFloat(resposta);
                if (!isNaN(fahrenheit)) {
                    console.log(`${fahrenheit}°F equivale a ${fahrenheitParaCelsius(fahrenheit).toFixed(2)}°C`);
                } else {
                    console.log("Por favor, digite um número válido.");
                }
                readline.close();
            });
            break;

        case '3':
            readline.question('Digite a distância em Km: ', (resposta) => {
                const km = parseFloat(resposta);
                if (!isNaN(km)) {
                    console.log(`${km} Km equivale a ${kmParaMetro(km)} metros.`);
                } else {
                    console.log("Por favor, digite um número válido.");
                }
                readline.close();
            });
            break;

        case '4':
            readline.question('Digite a distância em metros: ', (resposta) => {
                const metro = parseFloat(resposta);
                if (!isNaN(metro)) {
                    console.log(`${metro} metros equivale a ${metroParaKm(metro)} Km.`);
                } else {
                    console.log("Por favor, digite um número válido.");
                }
                readline.close();
            });
            break;

        default:
            console.log("Opção inválida!");
            readline.close(); // Fecha se a opção do menu for errada
            break;
    }
});
