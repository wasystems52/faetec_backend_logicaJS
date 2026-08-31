const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // undefined

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste'); // adiciona elementos no array
console.log(valores);

console.log(valores.pop());
delete valores[0]; // deleta o elemento do array
console.log(valores);

tabuleiro = [
    ['X', 'O', 'X'],
    ['O', null, 'X'],
    ['X', 'O', 'X']
];
console.log(tabuleiro[1][2]); // acessando o elemento do array multidimensional