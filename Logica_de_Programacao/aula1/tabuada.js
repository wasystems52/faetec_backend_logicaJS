let numero = 7;
let multiplicador = 1; // Inicialização

console.log(`--- TABUADA DO ${numero} ---`);

while (multiplicador <= 10) { // Condição
  let resultado = numero * multiplicador;
  console.log(`${numero} x ${multiplicador} = ${resultado}`);
  
  multiplicador++; // Incremento crucial para não travar o código!
}
