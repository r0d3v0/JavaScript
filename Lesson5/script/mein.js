// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let calculate1 = (a, b) => a * b;

let result = calculate1(10, 20);
console.log(result);


// - створити функцію яка обчислює та повертає площу кола з радіусом r


let calculate2  = (r) => r * r * Math.PI;

result2 = calculate2(45);
console.log(result2);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let calc = (hh, rr) => 2 * Math.PI * rr * hh;

result3 = calc(3, 4);
console.log(result3);


// - створити функцію яка приймає масив та виводить кожен його елемент\

let myArray = [100, 'hi', true, { car: 'BMW' }];

let arr = (arrayo) => {
    for (const item of arrayo) {
        console.log(item);    }
}
        arr(myArray)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let funcPar = (Text) =>  document.write(`<p>`+`${Text}`+`</p>`)


funcPar(`Lorem 123`)
 
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let funcPar2 = (text2) => {
    for (let i = 0; i < 3; i++) {
        document.write(`<ul>`+ `<li>`+`${text2}`+`</li>`+`</ul>`)
    }
}
funcPar2(`yayeby`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let funcPar3 = (text2, nnuummb) => {
    for (let i = 0; i < nnuummb; i++) {
        document.write(`<ul>`+ `<li>`+`${text2}`+`</li>`+`</ul>`)
    }
}
funcPar3(`Lorem imp` , 6)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrarr = [12, 32, `423`, 234, `423`, true]

// let func3 = (text) => {
//     // document.write(`<ul>`)
//
//     for (const textElement of text) {
//     // for (let i = 0; i < text.length ; i++) {
//         // document.write(`<ul>`+`<li>`+`${text}`+`<li>`+`</ul>`)
//         document.write(`<li>`+`${textElement}`+`<li>`)
//     }
//     // document.write(`</ul>`)
// }
// func3(arrarr)

// mar --------------------------------------------
let typeElement = (arreyTypeElement) =>{
    document.write(`<ul>`)
        for (let i = 0; i < arreyTypeElement.length; i++) {
            const arreyTypeElementElement = arreyTypeElement[i];
            document.write(`<li>`+`${arreyTypeElementElement}`+`</li>`)
}
document.write(`</ul>`)
}
typeElement([1, "lorem psum", false ])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr4 = [
    {id: 32, name: 'oleg', age: 24 },
    {id: 42,name: 'petya', age: 30, status: true},
    {id: 31, name: 'kolya', age: 29, status: true},
    {id: 51, name: 'olya', age: 28, status: false},
]
let func4 = (text1) => {
    for (const text1Element of text1) {
        document.write (`<div>`+`${text1Element.id} ${text1Element.name} ${text1Element.age}`+ `</div>`)

    }

}

func4(arr4)

// - створити функцію яка повертає найменьше число з масиву

let funck5 = (arr5) => {
    let minNumb = arr5[0] ;
    for (const minNumbElement of arr5) {
        if (minNumbElement < minNumb){
            minNumb = minNumbElement
        }
    }
    return minNumb
}

console.log(funck5([23, 423, 22, 64, 243, 342]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) {
    for (const sumElement of sum) {
          + sumElement }

}
console.log(sum([1, 2, 10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let resultExchange = null;
    for (const curr of currencyValues) {
        if(curr.currency === exchangeCurrency){
            return sumUAH/curr.value
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));

