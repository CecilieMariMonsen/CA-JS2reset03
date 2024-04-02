import { deletePostHandler } from "../../handlers/posts/deletPostHandler.js";

export function renderDeletPost(id) {
    const deleteButton = document.createElement("button");
    deleteButton.href = `/thePosts/index.html?id=${id}`;
    deleteButton.textContent = "DELETE";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        deletePostHandler(id);
    });

    return deleteButton;
}


// skal eg bruke denne eller bruker eg den i  renderSrcPost.js og renderAddPost.js?