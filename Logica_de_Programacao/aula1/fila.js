const fila = [];

fila.push("Washington");
fila.push("janaina");
fila.push("cris");
fila.push("lara");
fila.push("yuri");

console.log("Fila Inicial: " + fila.join(","));
console.log("Inicio Atendimento")

while (fila.length > 0){
    const atendido = fila.shift();
    console.log("Atendido: " + atendido)
}
console.log("Atendimento finalizado")


