// console.log('cl1');
//
// setTimeout(() => {
//     console.log('tm 2');
// }, 0);
//
//
// console.log('cl2');
//
// setTimeout(() => {
//     console.log('tm 1');
// }, 0);
// console.log('cl3');

// setTimeout(() => {
//     console.log('1');
//
//     setTimeout(() => {
//         console.log('2');
//         setTimeout(() => {
//             console.log('3');
//         }, 2000)
//     }, 1000);
//
// }, 1000);


// new Promise((resolve) => {
//
//     setTimeout(() => {
//         console.log('1111');
//         resolve();
//     }, 1000);
//
// })
//     .then(() => {
//         new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('22222')
//                 resolve();
//             }, 3000);
//         })
//     })
//     .then(() => {
//         new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('33333');
//                 resolve();
//             }, 2000)
//         })
//     })


// let x = new Promise((resolve, reject) => {
//
//     let counter = -2;
//     setTimeout(() => {
//         if (counter < -1) {
//             reject('xxxxxxx');
//         }
//         console.log(counter);
//         counter++; //2
//         resolve(counter);
//     }, 1000);
//
// })
//     .then((counter) => {
//         new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(counter);// 2
//                 counter++; // 3
//                 resolve(counter); //3
//             }, 3000);
//         })
//     })
//     .then((counter) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(counter);
//                 counter++
//                 resolve(counter);
//             }, 2000)
//         })
//     })
//     .then(counter => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(counter);
//             }, 2000);
//         })
//     })
//     .catch(reason => {
//         console.log(reason);
//
//     });

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(value => value.json())
//     .then(todos => {
//         for (const todo of todos) {
//             let div = document.createElement('div');
//             div.innerText = todo.id + ' ' + todo.title;
//             if (todo.completed) {
//                 div.classList.add('complete');
//             }
//             document.body.appendChild(div);
//         }
//
//         return fetch('https://jsonplaceholder.typicode.com/posts');
//     })
//     .then(value => value.json())
//     .then(value => console.log(value));


// let resultAll = Promise // [[.....],[....]]
//     .all(
//         [
//             fetch('https://jsonplaceholder.typicode.com/todos').then(value => value.json()),
//             fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json())
//         ]);
//
// resultAll.then(result => console.log(result));


async function foobar() {
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value => value.json());

    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());

    console.log(todos);
    console.log(posts);

    return {todos, posts} // Promise

}


console.log(foobar()); // Promise