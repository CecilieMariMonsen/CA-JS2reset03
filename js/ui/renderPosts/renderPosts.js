/**
 * @param {string} parent
 * @param {Array | Object} posts
 * @returns {void}
 */

import { deletePostHandler } from "../../handlers/posts/deletPostHandler.js";

export function renderPosts(parent, posts) {
    const container = document.querySelector(parent);

    container.innerHTML = "";

    let postsArray = Array.isArray(posts) ? posts : [posts];

    const postsHtml = postsArray.map((post) => {
        return createPost(post);
    });

    container.append(...postsHtml);

    console.log(...postsHtml);

    console.log(container, posts);
}



function createPost(post) {
    const { id, title:heading, media, tags } = post;    

    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    const title = document.createElement("h2");
    title.textContent = heading;

    const image = document.createElement("img");
    image.src = media;
    image.alt = "Post Image";
    image.classList.add("post-image");

    const tagParagraph = document.createElement("p");
    tagParagraph.textContent = "Tags: " + tags.join(", ");
    tagParagraph.classList.add("post-tags");
      
    const link = document.createElement("a");
    link.href = `/singelPost/index.html?id=${id}`;
    link.textContent = "Read More";
    link.classList.add("post-link");

    const editButton = document.createElement("a");
    editButton.textContent = "Edit";
    editButton.classList.add("post-edit-button");
    editButton.onclick = () => {
        window.location.href = `/editPost/index.html?id=${id}`; 
    };
    
    const deleteButton = document.createElement("a");
    deleteButton.href = `/singelPost/index.html?id=${id}`;
    deleteButton.textContent = "DELETE";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        if (id !== null ){
            deletePostHandler(id); 
        }
    });

    postContainer.append(title, image, tagParagraph, link, editButton, deleteButton);
    
    return postContainer;

}



