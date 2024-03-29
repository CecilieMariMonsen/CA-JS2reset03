/*import { updatePost } from "../../api/posts/updatePost.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

export async function editPostHandler(id, postDetails) {
    //const querystring = window.location.search;

    try {
        if (!id) {
            throw new Error("No ID was provided");
        }

        if(id !== null && !isNaN(id)){

        await updatePost(id, postDetails); // Pass id and postDetails to updatePost function

        // Redirect to the posts page after successful update
        window.location.href = "/thePosts/index.html";
        }
    } catch (error) {
        console.log(error);
        displayMessage("#message", "danger", error.message);
    }
}*/



import { displayMessage } from "../../ui/common/displayMessage.js";
import { updatePost } from "../../api/posts/updatePost.js";
import { getPosts } from "../../api/posts/getPosts.js";


// export the newPostFormHandler function
export async function editPostFormHandler() {
    const form = document.querySelector("#editPostForm");
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const posts = await getPosts(id); 
    const postData = posts.find(post => post.id == id)



    if (form) {

            form.title.value = postData.title;
            form.content.value = postData.body;
            form.media.value = postData.media;


        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const postDetails = Object.fromEntries(formData.entries());

            postDetails.title = document.getElementById('title').value;
            postDetails.body = document.getElementById('content').value;
            postDetails.media = document.getElementById('media').value;

            postDetails.id = id;

            updatePost(postDetails)
                .then(() => {
                    window.location.href = "/thePosts/index.html";
                })
                .catch((error) => {
                    console.log(error);
                    displayMessage("message", "danger", error);
                });
        });
    }
}