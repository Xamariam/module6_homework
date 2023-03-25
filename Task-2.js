// Задание 2 

function isPrime(number) {   
    if (number <= 1 && number > 1000) return 'Ответ неверный';
    if (number == 2) return 'Простое число';
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return 'Составное число';
        }
    }

    return 'Простое число';
}

console.log(isPrime(1001));
console.log(isPrime(97));