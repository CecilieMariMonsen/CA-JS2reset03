import { updatePost } from "../../api/posts/updatePost.js";
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
}