// Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.
const array = ['a', 'b', 'c'];
console.log(array);
for (let i = 0; i < array.length; i++) {
    array[i] = i + 1;
}
console.log(array.length);

// Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
for (let i = 0; i <= 4; i++) {
    console.log(i);
}

// const arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random() * 10);
// }
// console.log(arr);