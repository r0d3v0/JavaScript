// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
//
// function User(id, name, surname, email, phone) {
//     this.id = id
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let newArray = []
//
// for (let i = 1; i <= 10; i++) {
//     let user1 = new User(i, `Yra` + i, `frankil` + i, `dasd@.gmai.com` + i , +3890434243341 + i);
//     newArray.push(user1)
// }
// console.log(newArray);
//

//vetal)
function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let names = ['Vitalii', 'Sasha', 'Petro', 'Andrew', 'Oleg', 'Vika', 'Danik', 'Vika', 'Halia', 'Jack'];
let surnames = ['Fedyk', 'Loger', 'Vasik', 'Geryt', 'Horton', 'Vrikon', 'Liferon', 'Iron', 'Dertyk', 'Novosolov'];
let emails = ['dreg@gmail.com', 'dsfbklsdjgf@gmail.com', 'fdjsvfsjh@gmail.com', 'jhdsfvua@gmail.com', 'alsdjkfl@gmail.com', 'FADSKUYF@gmail.com', 'dsauyvf@gmail.com', 'poasdjhgbv@gmail.com', 'fdslafhas@gmail.com', 'fdisaulf@gmail.com'];
let phones = ['0985674332', '0687856435', '0987659843', '0509873425', '0975672389', '0686750912', '0986753285', '0509876754', '0667876534', '0683940385'];
let emptyMassive = [];

for (let i = 0; i < 10; i++) {
    emptyMassive.push(new User(i+1,names[i],surnames[i],emails[i],phones[i]));
}
console.log(emptyMassive);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(filterUssrs = emptyMassive.filter((emptyMassive) => emptyMassive.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser = emptyMassive.sort( (a, b) => a.id - b.id)
console.log(sortUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Clients extends User {
    constructor(id, name, surname, email, phone, order) {
    super(id, name, surname, email, phone);
    this.order = order;
    }
}
const clients = []

clients.push(new Clients(`1`, `Oleh`, `Boiko`, `boiko@gmail.com`, `+38093 4323 344`, [`tomat`, `apple`, `cola`, `pepsi`, `apple`, `cola`, `pepsi`,]));
clients.push(new Clients(`2`, `Oleh`, `Boiko`, `boiko@gmail.com`, `+38093 4323 344`, [`tomat`, `apple`, `cola`, `apple`, `cola`, `pepsi`,]));
clients.push(new Clients(`3`, `Oleh`, `Boiko`, `boiko@gmail.com`, `+38093 4323 344`, [`tomat`, `apple`, `cola`, `pepsi`,]));
clients.push(new Clients(`4`, `Oleh`, `Boiko`, `boiko@gmail.com`, `+38093 4323 344`, [`tomat`,`tomat`, `apple`, `cola`, `pepsi`,]));
clients.push(new Clients(`5`, `Oleh`, `Boiko`, `boiko@gmail.com`, `+38093 4323 344`, [`tomat`, `apple`,  `pepsi`,]));
clients.push(new Clients(`6`, `Oleh`, `Boiko`, `boiko@gmail.com`, `+38093 4323 344`, [`tomat`, `apple`,]));
clients.push(new Clients(`7`, `Oleh`, `Boiko`, `boiko@gmail.com`, `+38093 4323 344`, [`tomat`, `apple`, `cola`, `pepsi`,`tomat`, `apple`, `cola`, `pepsi`, `cola`, `pepsi`,]));
clients.push(new Clients(`8`, `Oleh`, `Boiko`, `boiko@gmail.com`, `+38093 4323 344`, [`tomat`, `apple`, `cola`, `pepsi`,`tomat`, `tomat`, `apple`, `cola`, `pepsi`,]));
clients.push(new Clients(`9`, `Oleh`, `Boiko`, `boiko@gmail.com`, `+38093 4323 344`, [`tomat`, `apple`, `cola`, `pepsi`,]));
clients.push(new Clients(`10`, `Oleh`, `Boiko`, `boiko@gmail.com`, `+38093 4323 344`, [`tomat`, `apple`,  `pepsi`,]));

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((a,b) => a.order.length -b.order.length)
console.log(sortClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,manufacturer,year,maxSpeed,engineSize){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineSize = engineSize;
    this.driver = null

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    };
    this.info = function () {

         console.log(`Model - ${this.model} , Manufacturer - ${this.manufacturer} , Year - ${this.year}, MaxSpeed - ${this.maxSpeed}, Engine size - ${this.engineSize}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(this.maxSpeed += newSpeed);
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        console.log((this.driver = driver));


    }
};
let car1 = new Car(`Mers`,`German`, 2023,350, 5.0);

function Driver(name, age, exp){
    this.name = name
    this.age = age
    this.exp = exp
}

car1.drive();
car1.info();
car1.increaseMaxSpeed (500)

car1.changeYear(2222) //
 console.log (car1.year)       //s

let driver1 = new Driver(`Vasya`, 34 , `good`)
car1.addDriver(`${driver1.name}, ${driver1.age}, ${driver1.exp}`)




// - (Те саме, тільки через клас)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку