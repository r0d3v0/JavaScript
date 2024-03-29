// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
let url = new URL("https://jsonplaceholder.typicode.com/users");

fetch(url)
    .then(response => response.json())
    .then(users => {
        console.log(users);

        let userContainer = document.createElement('div');
        userContainer.classList.add('user-container');

        for (const user of users) {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user-block');

            let userDetails = document.createElement('div');
            userDetails.classList.add('user-details'); // Замінив 'user-container' на 'user-details'

            let p = document.createElement('p');
            p.innerText = `${user.id}- ${user.name}`;
            userContainer.classList.add('user-par');

            let btn = document.createElement('button');
            btn.innerText = `DETAILS`;
            btn.classList.add('details-btn');

            let btnDel = document.createElement('button');
            btnDel.innerText = `DELETE`;
            btnDel.classList.add('details-btn');

            userDetails.appendChild(p);
            userDetails.appendChild(btn);
            userDetails.appendChild(btnDel);

            userBlock.appendChild(userDetails);
            userContainer.appendChild(userBlock);

            document.body.appendChild(userContainer);

            btn.addEventListener('click', () => {
                document.location.href = `user-details.html?userID=${user.id}`;
            });

            btnDel.addEventListener('click', () => {
                deleted(user.id);
                p.style.display = 'none';
                btn.style.display = 'none';
                btnDel.style.display = 'none';
            });
        }

        function deleted(id) {
            fetch(url + id)
                .then(res => res.json())
                .then(value => {
                    console.log('DELETED CONFIRM: ', value);
                });
        }
    });


    // На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

