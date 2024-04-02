import { postsURL } from "../../constants/api.js";
import { getToken } from "../../helpers/auth/getToken.js";

export async function getSinglePosts(id) {
    const token = getToken();

    const url = `${postsURL}/${id}`;


if (!token){
    throw new Error("You are not logged in!");
}

const options = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
};

const response = await fetch(url, options);
const json = await response.json();

console.log(response);

if (!response.ok) {
    throw new Error(json.errors[0].message);
}

return json;

}
