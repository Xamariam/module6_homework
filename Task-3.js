// Задание 3 

function sumFunc(x) {
    return function(y) {
        return x + y;
    }
}

let s = sumFunc(4);

console.log(s(2), s(7), s(11));

console.log(sumFunc(1)(4), sumFunc(3)(2), sumFunc(13)(22));