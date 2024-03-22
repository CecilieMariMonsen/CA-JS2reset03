/*import { postsURL } from "../../constants/api.js";
import { getToken } from "../../helpers/auth/getToken.js";

export async function srcPosts(searchQuery) {
    const token = getToken();


if (!token){
    throw new Error("You are not logged in!");
}

const options = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
};

let apiUrl = postsURL;
    
if (searchQuery) {
    apiUrl += `?_tag=${searchQuery}`;
}

const response = await fetch(apiUrl, options);
const json = await response.json();

console.log(json);

console.log(response);

if (!response.ok) {
    const errorMessage = json.errors && json.errors[0] ? json.errors[0].message : "An error occurred";
    //throw new Error(json.errors[0].message);
    throw new Error(errorMessage);
}

return json;

}*/

import { postsURL } from "../../constants/api.js";
import { getToken } from "../../helpers/auth/getToken.js";

export async function srcPosts(searchQuery) {
    const token = getToken();

    if (!token){
        throw new Error("You are not logged in!");
    }

    const options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    let apiUrl = postsURL;
    
    if (searchQuery) {
        apiUrl += `?_tag=${searchQuery}`;
    }

    try {
        const response = await fetch(apiUrl, options);
        const json = await response.json();

        console.log(json);
        console.log(response);

        if (!response.ok) {
            const errorMessage = json.errors && json.errors[0] ? json.errors[0].message : "An error occurred";
            throw new Error(errorMessage);
        }

        return json;
    } catch (error) {
        console.error('Error:', error);
        throw error; // re-throw the error so it can be caught and handled by the calling function
    }
}

//denne skal brukes som forslag og slettes etterpå
/*
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })*/