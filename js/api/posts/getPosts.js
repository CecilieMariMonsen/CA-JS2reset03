import { postsURL } from "../../constants/api.js";
import { getToken } from "../../helpers/auth/getToken.js";

/**
 * Get all posts from the API on the feed page 
 * posts are displayed in the order they were created
 * @returns {Array} - Array of posts
 * @throws {Error} - Throws error if the API call fails
 * 
 */


//function to get all posts from the API 
export async function getPosts() {
    const token = getToken();

//if the user is not logged in, throw an error
if (!token){
    throw new Error("You are not logged in!");
}

//options for the fetch request
const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
};

//fetch request to the API
const response = await fetch(postsURL, options);
const json = await response.json();

console.log(response);
//if the response is not ok, throw an error
if (!response.ok) {
    throw new Error(json.errors[0].message);
}

for (let post of json) {
    console.log("Tags for post:", post.tags);
}

return json;

}