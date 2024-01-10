let userId = new URLSearchParams(window.location.search).get('userID');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        console.log(user);

        let userDiv = document.createElement('div');
        let userDetails = document.createElement('div');
        let postBtn = document.createElement('button');
        let userPostsDiv = document.createElement('div');

        userDiv.appendChild(userDetails);
        userDiv.appendChild(postBtn);
        userDiv.appendChild(userPostsDiv);

        for (const key in user) {
            if (user.hasOwnProperty(key)) {
                let detailItem = document.createElement('p');
                detailItem.innerText = `${key}: ${JSON.stringify(user[key])}`;
                userDetails.appendChild(detailItem);
            }
        }

        postBtn.innerText = `Posts of Current User`;

        document.body.appendChild(userDiv);

        postBtn.addEventListener('click', () => {

            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(response => response.json())
                .then(posts => {
                    console.log(posts);


                    for (const post of posts) {

                        if (userId == post.userId) {
                            let postDiv = document.createElement('div');
                            let postId = document.createElement('p');
                            let postDetails = document.createElement('p');
                            let commentsBtn = document.createElement('button');

                            postDiv.appendChild(postId);
                            postDiv.appendChild(postDetails);
                            postDiv.appendChild(commentsBtn);

                            postId.innerText = `Post ID: ${post.id}`;
                            postDetails.innerText = `Title: ${post.title}`;
                            commentsBtn.innerText = `Comments`;

                            document.body.appendChild(postDiv);

                            commentsBtn.addEventListener('click', () => {
                                document.location.href = `post-details.html?postID=${post.id}`;
                            });
                        }
                    }
                });
        });
    });
