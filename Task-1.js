// Задание 1

let arr = [0, null, 2, 'yo', 4, NaN, 6];

function countOfEvenAndOdd()  {
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        if (arr[i] === 0) {
            console.log(arr[i] + " - ноль")
        } else if ((arr[i] % 2) === 0) {
            console.log(arr[i]  + " - четное число")
		evenCount++
        } else if((arr[i] % 2) !== 0){
            console.log(arr[i]  + " - нечетное число")
		oddCount++
        }
    } else {
        console.log(arr[i]  + " - неопределенно")
  }
}
console.log('Количество чётных - ' + evenCount)
console.log('Количество нечётных - ' + oddCount)
}

countOfEvenAndOdd();