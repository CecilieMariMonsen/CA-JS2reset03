import { displayMessage } from "../../ui/common/displayMessage.js";
import { updatePost } from "../../api/posts/updatePost.js";
import { getPosts } from "../../api/posts/getPosts.js";

/**
 * Function to handle the edit post form
 * if no post is found, an error message is displayed
 * if the post is found, the form is filled with the post data and the you can edit the post and update it 
 */

export async function editPostFormHandler() {
     
    const form = document.querySelector("#editPostForm");
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const posts = await getPosts(id); //hvorfor sier await ikke virker??
    const postData = posts.find(post => post.id == id)

    document.title = `${postData.title} | JS 2`;

    if (form) {

        //the form is filled with the post data

            form.title.value = postData.title;
            form.content.value = postData.body;
            form.media.value = postData.media;
            form.tags.value = postData.tags.join(", ");

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const postDetails = Object.fromEntries(formData.entries());
           
        //the post data is updated with the new data
           
            postDetails.title = document.getElementById('title').value;
            postDetails.body = document.getElementById('content').value;
            postDetails.media = document.getElementById('media').value;
            const tagsInput = document.querySelector("#tags");
            postDetails.tags = tagsInput.value.split(",");
            postDetails.id = id;
            
            try { 
                await updatePost(postDetails);
                if (!postDetails) {
                    throw new Error("No post was found");
                }
                window.location.href = "/thePosts/index.html";
            }
            catch (error) {
                console.log(error);
                displayMessage("message", "danger", error);
            }


            // updatePost(postDetails)
            //     .then(() => {
            //         window.location.href = "/thePosts/index.html";
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //         displayMessage("message", "danger", error);
            //     });
        });
    }
}


