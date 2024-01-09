// Отримання параметрів URL
const urlParams = new URLSearchParams(window.location.search);
const userID = urlParams.get('userID');

    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then(resp => resp.json())
        .then(user => {
            console.log(user);


            let div = document.createElement('div');
            div.classList.add('user-info');
            let btn = document.createElement('button');

            for (const key in user) {
                let par = document.createElement('p');
                par.innerText = `${key}: ${JSON.stringify(user[key])}`;
                div.appendChild(par);
            }

            document.body.appendChild(div);
        })

