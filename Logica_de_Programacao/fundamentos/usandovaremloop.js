for (var i = 0; i < 5; i++) {
    console.log(i);
}   

console.log('i =', i); // ReferenceError: i is not defined

const funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}
funcs[2](); // 10
funcs[8](); // 10
funcs[0, 1, 2](); // 10