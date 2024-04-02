
import { displayMessage } from "../../ui/common/displayMessage.js";
import { newPost } from "../../api/posts/newPost.js";

export function newPostFormHandler() {
    const form = document.querySelector("#newPostForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const postDetails = Object.fromEntries(formData.entries());

            postDetails.title = document.getElementById('title').value;
            postDetails.body = document.getElementById('content').value;
            postDetails.media = document.getElementById('media').value;

            const tagsInput = document.querySelector("#tags");
            postDetails.tags = tagsInput.value.split(",");

             // få inn try catch her istedenfor .then og .catch?

            newPost(postDetails)
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


