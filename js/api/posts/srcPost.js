import { postsURL } from "../../constants/api.js";
import { getToken } from "../../helpers/auth/getToken.js";

export async function srcPosts(searchQuery) {
    const token = getToken();

    if (!token){
        throw new Error("You are not logged in!");
    }

    const options = {
        method: "GET",
        headers: {
            //"Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    let apiUrl = postsURL;

   if (searchQuery) {
    apiUrl += `?_tag=${searchQuery}`;
    console.log(`Search query added to URL: ${apiUrl}`); 
  }

    try {
        console.log("Final URL:", apiUrl); 
        const response = await fetch(apiUrl, options);
        const json = await response.json();

        console.log("Response JSON:", json); 
        console.log("Response status:", response.status); 

        if (!response.ok) {
            const errorMessage = json.errors && json.errors[0] ? json.errors[0].message : "An error occurred";
            throw new Error(errorMessage);
        }

        return json;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

