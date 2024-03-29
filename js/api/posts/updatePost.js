import { postsURL } from "../../constants/api.js";
import { getToken } from "../../helpers/auth/getToken.js";


export async function updatePost(postData) {
    const token = getToken();


if (!token){
    throw new Error("You must be the author of the post to update it!");
}

const options = {
    method: "PUT",
    body: JSON.stringify(postData),
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
    
};

const url = `${postsURL}/${postData.id}`;

const response = await fetch(url, options); //denne er viktig for å få dataen tilbake
const json = await response.json(); //denne er viktig for å få dataen tilbake

console.log(response);

if (!response.ok) { 
    throw new Error(json.errors[0].message);
    ;
}

return json;

}
