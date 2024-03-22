import { createPost } from '../../api/posts/getPosts.js';

export function newPostHandler() {
    const form = document.querySelector("#newPostForm");
    
    if (form) { 
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const postDetails = Object.fromEntries(formData.entries());

            createPost(postDetails)
                .then(() => {
                    window.location.href = "/thePosts/index.html";
                })
                .catch((error) => {
                    console.log(error);
                });

        } );
    }
}