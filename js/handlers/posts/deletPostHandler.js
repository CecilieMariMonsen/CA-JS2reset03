
import { deletePost } from "../../api/posts/deletePost.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

export async function deletePostHandler(id) {
    const querystring = window.location.search;
  


    try {
        if (!id) {
            throw new Error("No ID was provided");
        }

        if(id !== null && !isNaN(id)){

        await deletePost(id); // Pass id til deletePost funksjonen

        // Redirect to the posts page after successful deletion
        window.location.href = "/thePosts/index.html";
        }
    } catch (error) {
        console.log(error);
        displayMessage("#message", "danger", error.message);
    }
}