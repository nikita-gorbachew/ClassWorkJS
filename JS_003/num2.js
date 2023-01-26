// 1. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
// 2. С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

const sumNumber = (first, second, third) => console.log(Number(first) + Number(second) + Number(third));

let first = '1';
let second = '21';
let third = '3';
sumNumber(first, second, third);



// 3. Дана фукнция
// function func(num = 5) {
// console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции.
// func(2); 4
// func(3); 9
// func(); 25