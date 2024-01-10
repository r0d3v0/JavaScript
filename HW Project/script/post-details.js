// post-details.js
let postId = new URLSearchParams(window.location.search).get('postID');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        console.log(post);

        let postDiv = document.createElement('div');
        let postDetails = document.createElement('div');
        let commentsDiv = document.createElement('div');



        postDiv.appendChild(postDetails);
        postDiv.appendChild(commentsDiv);


        for (const key in post) {
            if (post.hasOwnProperty(key)) {
                let detailItem = document.createElement('p');
                detailItem.innerText = `${key}: ${JSON.stringify(post[key])}`;
                postDetails.appendChild(detailItem);
            }
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                console.log(comments);



                for (const comment of comments) {
                    let commentDetails = document.createElement('p');
                    commentDetails.classList.add('comment-item');
                    
                    commentDetails.innerText =
                        `Name - ${comment.name}\n
                        postId - ${comment.postId}\n
                        ID - ${comment.id}\n
                        Commentary: \n - ${comment.body}\n
                        email - ${comment.email}\n
                   
                    `;
                    commentsDiv.appendChild(commentDetails);
                }
            });

        document.body.appendChild(postDiv);
    });
