import { postsURL } from "../../constants/api.js";
import { getToken } from "../../helpers/auth/getToken.js";
//import { displayMessage } from "../../ui/common/displayMessage.js";
import { addPostToFeed } from "../../ui/renderPosts/renderAddPost.js";

// skal eg ta inn messsage her?

export async function newPost(postDetails) {
    const token = getToken();


if (!token){
    throw new Error("You are not logged in!");
}

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postDetails),
};

const response = await fetch(postsURL, options);
const json = await response.json();

console.log(response);

if (!response.ok) 
    //{displayMessage("#message", "danger", error.message)
    throw new Error(json.errors[0].message);
    
    addPostToFeed("#posts", json);

return json;
}


