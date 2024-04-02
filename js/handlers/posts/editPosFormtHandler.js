
import { displayMessage } from "../../ui/common/displayMessage.js";
import { updatePost } from "../../api/posts/updatePost.js";
import { getPosts } from "../../api/posts/getPosts.js";

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
            form.tags.value = postData.tags.join(", ");


        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const postDetails = Object.fromEntries(formData.entries());
           
            document.title = `${postDetails.title} | JS 2`;

            postDetails.title = document.getElementById('title').value;
            postDetails.body = document.getElementById('content').value;
            postDetails.media = document.getElementById('media').value;

            const tagsInput = document.querySelector("#tags");
            postDetails.tags = tagsInput.value.split(",");


            postDetails.id = id;

            // få inn try catch her istedenfor .then og .catch? 

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