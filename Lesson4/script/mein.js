// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function calculate1(a, b) {
//     return a * b;
// }
//
//
// let result = calculate1(5, 8);
// console.log(result);
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function calculate2(r) {
//     return  r * r * Math.PI;
// }
//
// result = calculate2(45);
// console.log(result);
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function calc(hh, rr) {
//     return  2 * Math.PI * rr * hh;
// }
//
// result = calc(3, 4);
// console.log(result);
//
//
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// let myArray = [100, 'hi', true, { car: 'BMW' }];
//
// function Elements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// Elements(myArray);
//
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function ppp(text) {
//            document.write(`<p>${text}</p>`)
// }
// ppp('Hmmmm');
// ppp(`Paragpaph`)
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function listUl(text) {
//     document.write(`<ul>
//         <li> ${text} </li>
//         <li> ${text} </li>
//         <li> ${text} </li>
//     </ul>`);
// }
//
// listUl("lorem ipsum");
//
//
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function ulLi(text, num) {
//     document.write (`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li> ${text} </li>`)
//
//     }
//     document.write (`</ul>`)
// }
// ulLi("lorem ipsum", 4)
//
//
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = ['lorem2' , 312 , true]
// function arrFun (abc) {
//     document.write (`<ul>`)
//     for (let i = 0; i < abc.length; i++) {
//         document.write(`<li> ${abc[i]} </li>`)
//
//     }
//     document.write (`</ul>`)
// }
// arrFun(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arr2 = [
    {id: 32, name: 'oleg', age: 24 },
    {id: 42,name: 'petya', age: 30, status: true},
    {id: 31, name: 'kolya', age: 29, status: true},
    {id: 51, name: 'olya', age: 28, status: false},
]

function arrObj (abc) {
    for (let i = 0; i < abc.length; i++) {
        document.write(`<div>${abc[i].id} ${abc[i].name} ${abc[i].age}  </div>`)

    }}
arrObj(arr2)

// - створити функцію яка повертає найменьше число з масиву


let abc2 = [12, 23, 32, 4, 24]
function minNmb(arr) {
    let minNNubm = abc2[0]
    for (const minNNubmElement of abc2) {
        if (minNNubmElement < minNNubm) {
            minNNubm = minNNubmElement
        }
    }
    return minNNubm

}
console.log(minNmb(abc2))





// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function  sum(arr) {
    let total = 0;
    for (const arrElement of arr) {
        total += arrElement
    }
    return total
}

console.log(sum(abc2));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

function swap(arr,index1,index2){
    const num1 = arr[0];
    arr[0] = arr[1];
    arr[1] = num1;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const curr of currencyValues ){
    if (curr.currency === exchangeCurrency){
        return sumUAH / curr.value
    }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));