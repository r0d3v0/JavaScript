let userId = new URLSearchParams(window.location.search).get('userID');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        console.log(user);

        let userDiv = document.createElement('div');
        let userDetails = document.createElement('div');
        let postBtn = document.createElement('button');
        let userPostsDiv = document.createElement('div');

        userDiv.classList.add('user-details-container');
        userDetails.classList.add('user-details');
        postBtn.classList.add('common-btn');
        userPostsDiv.classList.add('user-posts-container');

        userDiv.append(userDetails);
        userDiv.append(postBtn);
        userDiv.append(userPostsDiv);

        for (let property in user) {
            let detailItem = document.createElement('p');
            detailItem.innerText = `${property}: `;
            userDetails.append(detailItem);

            let content = document.createElement('div');
            content.classList.add('indent');
            userDetails.append(content);

            let value = user[property];
            if (typeof value === 'object') {
                content.innerHTML = `${JSON.stringify(value, null, 2).replace(/["{}]/g, '')}`;
            } else {
                content.textContent = JSON.stringify(value);
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

                            let postDiv = document.createElement('div');
                            let postId = document.createElement('p');
                            let postDetails = document.createElement('p');
                            let commentsBtn = document.createElement('button');

                            postDiv.classList.add('post-item');
                            postId.classList.add('post-info');
                            postDetails.classList.add('post-info');
                            commentsBtn.classList.add('common-btn');
                            commentsBtn.classList.add('comments-btn');

                            postDiv.append(postId);
                            postDiv.append(postDetails);
                            postDiv.append(commentsBtn);

                            postId.innerText = `Post ID: ${post.id}`;
                            postDetails.innerText = `Title: ${post.title}`;
                            commentsBtn.innerText = `Comments`;

                            document.body.appendChild(postDiv);

                            commentsBtn.addEventListener('click', () => {
                                document.location.href = `post-details.html?postID=${post.id}`;
                            });

                    }
                });
        });
    });
