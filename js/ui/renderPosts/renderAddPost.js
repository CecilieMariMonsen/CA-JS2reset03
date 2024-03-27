//import { deletePostHandler } from "../../handlers/posts/deletPostHandler.js";
import { renderDeletPost } from "../../ui/renderPosts/renderDeletPost.js";

export function addPostToFeed(parent, post) {
    const container = document.querySelector(parent);

    // Create the new post
    const newPostHtml = createPost(post);

    // Add the new post to the top of the feed
    container.prepend(newPostHtml);

    console.log(newPostHtml);
    console.log(container);
}
function createPost(post) {
    const { id, title:heading, media } = post;

    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    const title = document.createElement("h2");
    title.textContent = heading;

    const image = document.createElement("img");
    image.src = media;
    image.alt = "Post Image";
    image.classList.add("post-image");
     
    const link = document.createElement("a");
    link.href = `/singelPost/index.html?id=${id}`;
    link.textContent = "Read More";
    link.classList.add("post-link");


    const deleteButton = renderDeletPost(id);
   

    postContainer.append(title); 
    postContainer.append(image); 
    postContainer.append(link); 
    postContainer.append(deleteButton);
   
    

     console.log("hei hei", link, deleteButton)

    return postContainer;
}