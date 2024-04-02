import { postsURL } from "../../constants/api.js";
import { getToken } from "../../helpers/auth/getToken.js";
//import { displayMessage } from "../../ui/common/displayMessage.js";

//skal eg ta inn messsage her?

export async function deletePost(postId) { 
    const token = getToken();

    if (!token){
        throw new Error("You are not logged in!");
    }

    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    
    const response = await fetch(`${postsURL}/${postId}`, options); 
    const json = await response.json();

    console.log(response);

    if (!response.ok) {
      //  displayMessage("#message", "danger", error.message)
        throw new Error(json.errors[0].message);
    }


    return json;
}