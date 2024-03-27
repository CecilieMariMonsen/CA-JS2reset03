import { deletePostHandler } from "../../handlers/posts/deletPostHandler.js";

export function renderDeletPost(id) {
    const deleteButton = document.createElement("button");
    deleteButton.href = `/thePosts/index.html?id=${id}`;
    deleteButton.textContent = "DELETE";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action
        deletePostHandler(id); // Call the deletePostFormHandler function when the button is clicked
    });

    return deleteButton;
}
