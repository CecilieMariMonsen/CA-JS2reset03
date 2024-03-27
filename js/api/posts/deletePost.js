import { postsURL } from "../../constants/api.js";
import { getToken } from "../../helpers/auth/getToken.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

export async function deletePost(postId) { // Change the function name and parameter
    const token = getToken();

    if (!token){
        throw new Error("You are not logged in!");
    }

    const options = {
        method: "DELETE", // Change the method to DELETE
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        // No body is needed for a DELETE request
    };

    
    const response = await fetch(`${postsURL}/${postId}`, options); // Include the post ID in the URL
    const json = await response.json();

    console.log(response);

    if (!response.ok) {
      //  displayMessage("#message", "danger", error.message)
        throw new Error(json.errors[0].message);
    }

    // No need to add the post to the feed, as it's being deleted

    return json;
}