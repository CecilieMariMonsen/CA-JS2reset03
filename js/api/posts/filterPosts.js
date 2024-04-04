import { postsURL } from "../../constants/api.js";
//import { getToken } from "../../helpers/auth/getToken.js";

export async function filterPost(searchQuery) {
    //const token = getToken(); //trenger eg denne for å sortere postene?

    if (!token){
        throw new Error("You are not logged in!");
    }

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
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

        if (!response.ok) {
            const json = await response.json();
            const errorMessage = json.errors && json.errors[0] ? json.errors[0].message : "An error occurred";
            throw new Error(errorMessage);
        }
        const json = await response.json();
        console.log("Response JSON:", json); 
        console.log("Response status:", response.status);

        return json;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}