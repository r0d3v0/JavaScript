console.log('-----1.1------');
//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let str1 = 'hello';
 console.log(str1)

 let str2 = 'owu';
 console.log(str2)

 let str3 = 'com';
 console.log(str3)

 let str4 = 'ua';
 console.log(str4)

 let numb1 = 1;
 console.log(numb1)

 let numb2 = 10;
 console.log(numb2)

 let numb3 = -999;
 console.log(numb3)

 let numb4 = 123;
 console.log(numb4)

 let numb5 = 3.14;
 console.log(numb5)

 let numb6 = 2.7;
 console.log(numb6)

 let numb7 = 16;
 console.log(numb7)

 let bol1 = true;
 console.log(bol1)

 let bol2 = false;
 console.log(bol2)

 console.log('-----1.2------');
//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//

let firstName = "Elon";
let middleName = "Musk";
let lastName = "Petrovich";
console.log(firstName + ' ' + middleName + ' ' + lastName);
console.log(`${firstName} ${middleName} ${lastName} `);

console.log('-----1.3------');
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;


let a = 100; let b = '100'; let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log('-----1.4------');
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
// тільки тут вік   має бути число.

let firstName4 = prompt("Введіть ваше ім'я")
let middleName4 = prompt("Введіть ваше Прізвище")
let  age4 = prompt("Введіть ваш вік")
let  age5 = +age4

console.log(firstName4)
console.log(middleName4)
console.log(age5)

console.log('-----черновик------');
// тільки тут вік має бути число.
// S TO N
 let ns = '100500';
 let nn = +ns;
 console.log(nn);
 let number = parseInt('100500asdasdsa');
 console.log(number);
