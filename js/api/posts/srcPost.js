import { postsURL } from "../../constants/api.js";
import { getToken } from "../../helpers/auth/getToken.js";

/**
 * Function to src for Posts from the API
 * The tag from the different post is use to search for posts with a specific tag
 * 
 * @param {string} searchQuery - The search query to filter the posts by tag 
 * @returns {Array} - Array of posts
 * @throws {Error} - Throws error if the API call fails
 * 
 */

//function srcPosts to get all posts from the API
export async function srcPosts(searchQuery) {
    const token = getToken();
    //if the user is not logged in, throw an error
    if (!token){
        throw new Error("You are not logged in!");
    }

    //options for the fetch request
    const options = {
        method: "GET", //GET request to the API
        headers: {
            //"Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    let apiUrl = postsURL;
   //if there is a search query, add it to the URL   
   if (searchQuery) {
    apiUrl += `?_tag=${searchQuery}`; 
    //console.log(`Search query added to URL: ${apiUrl}`); 
  }
     //fetch request to the API
    try {
        console.log("Final URL:", apiUrl); 
        const response = await fetch(apiUrl, options);
        const json = await response.json();

        console.log("Response JSON:", json); 
        console.log("Response status:", response.status); 
       //if the response is not ok, throw an error
        if (!response.ok) {
            const errorMessage = json.errors && json.errors[0] ? json.errors[0].message : "An error occurred";
            throw new Error(errorMessage);
        }
        
        return json;
        //if there is an error, log the error and throw it
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

