import { renderDeletPost } from "../../ui/renderPosts/renderDeletPost.js";

export function addPostToFeed(parent, post) {
    const container = document.querySelector(parent);
    
    const newPostHtml = createPost(post);

    container.prepend(newPostHtml);

    console.log(newPostHtml);
    console.log(container);
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


    const deleteButton = renderDeletPost(id);
   

    postContainer.append(title, image, tagParagraph, link, deleteButton);


    return postContainer;
}