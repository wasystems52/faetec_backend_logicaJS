{
    {
        {
            var sera = 'Será???'
            console.log(sera)
        }
    }
}
console.log(sera) // Será???


function teste() {
    var local = 123;
    console.log(local);
}


// Opção 1: só chamar a função sem argumento
function teste() {
    let local = 123;
    console.log(local);
}
teste(); // 123
console.log(teste); // ReferenceError: local is not defined