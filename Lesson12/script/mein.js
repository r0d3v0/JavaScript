// зробити файл users.html
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then((value) => {
        console.log(value)
    })

        for (const valueElement of value) {
            let li = document.createElement(`li`)
            let a = document.createElement(`a`)
            a.innerText = `${value.id} ${value.name}`

        }

        }
    })
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді кор