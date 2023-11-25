//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [ 23, 23, 34, 542, 234, 235, 62, 235, 235, 237,]

console.log (arr)
console.log (arr[0])
console.log (arr[1])
console.log (arr[2])
console.log (arr[3])
console.log (arr[4])
console.log (arr[5])
console.log (arr[6])
console.log (arr[7])
console.log (arr[8])
console.log (arr[9])

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//  let  book1 = {
//      title: 'bucvar',
//      pageCount: 234,
//      genre: "school"
//  }
//  let  book2 = {
//      title: "learning Eng",
//      pageCount: 234,
//      genre: 'school'
//  }
//  let  book3 = {
//      title: 'abc',
//      pageCount: 234,
//      genre: 'school'
//  }
//
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let  book1 = {
    title: 'bucvar',
    pageCount: 234,
    genre: "school",
    authors: [{name: "yra", age: 21}]
}
console.log(book1);
let  book2 = {
    title: "learning Eng",
    pageCount: 234,
    genre: 'school',
    authors: [{name: "igor", age: 26}]
}
console.log(book2);
let  book3 = {
    title: 'abc',
    pageCount: 234,
    genre: 'school',
    authors: [{name: "oleh", age: 31}]
}
console.log(book3);

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users= [
    {name: 'vasya', username: 'vasya31', password: '23dsfd2erds'},
    {name: 'petya', username: 'fsd30', password: '253sdsfd2ers'},
    {name: 'kolya', username: 'vesdasya31', password: '423sfd2er253'},
    {name: 'olya', username: '123vasya31', password: '234sdsfd2eds'},
    {name: 'anya', username: "31eww", password: 'd2s2srds'},
    {name: 'oleg', username: "dsasdsad", password: '432sfd2er346'},
    {name: 'andrey', username: 'zxczxc', password: '4d2erds'},
    {name: 'masha', username: 'czxczx', password: '42er634'},
    {name: 'olya', username: 'dsf', password: 'd23d2erd34'},
    {name: 'max', username: 'fdssdfsdsdsd', password: 'd2fds'}]


console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



//   Логічні розгалуження:
//       - Є змінна х, якій ви надаєте довільне числове значення.
//       Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
console.log(x)


//   - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//   (в першу, другу, третю или четверту частину години).
let time
time = 3

if (time > 45 && time <= 60)
{ console.log('time:4/4')}
else if (time > 30 && time <= 45)
{console.log('time:3/4')}
else if (time > 15 && time <= 30)
{console.log('time:2/4')}
else if (time > 0 && time <= 15)
{console.log('time:1/4')}





//   - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 22
if (day >= 1 && day < 10)
{
    console.log('перша декада')
}if (day > 10 && day < 20)
{
    console.log('друга декада')
}if (day > 20 && day <= 31)
{
    console.log('третя декада')
}

//   - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let days = +prompt('Enter day ?')
switch (days) {
    case 1 :
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('?????');
}


//       - Користувач вводить або має два числа.
//           Потрібно знайти та вивести максимальне число з тих двох .
//           Також потрібно врахувати коли введені рівні числа.


let nmb1 =  +prompt('number1')
let nmb2 =  +prompt('number2')

{ if (nmb1 > nmb2)
    console.log(nmb1)
}
{ if (nmb1 < nmb2)
    console.log(nmb2)
}
{ if (nmb1 = nmb2)
    console.log('equally') }


//       - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//           за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x1 ="";
x1 = x1 || 'default+';
console.log(x1)

//       - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5)
{console.log('Супер'); }

if (coursesAndDurationArray[1].monthDuration > 5)
{console.log('Супер'); }

if (coursesAndDurationArray[2].monthDuration > 5)
{console.log('Супер'); }

if (coursesAndDurationArray[3].monthDuration > 5)
{console.log('Супер'); }

if (coursesAndDurationArray[4].monthDuration > 5)
{console.log('Супер'); }
