export function renderSearchResults(parent, posts) {

    const container = document.querySelector(parent);
    console.log(container);

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
    console.log("Creating post:", post);
    const { id, title:heading, media, tags } = post;    

    const postContainer = document.createElement("div");
    postContainer.classList.add("srcPost", "card", "m-2");

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
    link.classList.add("post-link", "btn", "btn-secondary", "btn-sm");

    console.log("Created post:", postContainer);

    const editButton = document.createElement("a");
    editButton.textContent = "Edit";
    editButton.classList.add("post-edit-button", "btn", "btn-secondary", "btn-sm");
    editButton.onclick = () => {
    window.location.href = `/editPost/index.html?id=${id}`; 
    };

    const deleteButton = document.createElement("a");
    deleteButton.href = `/singelPost/index.html?id=${id}`;
    deleteButton.textContent = "DELETE";
    deleteButton.classList.add("delete-button", "btn", "btn-sm", "btn-secondary");

    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (id !== null ){
            deletePostHandler(id);
        }
    });

    const linkContainer = document.createElement("div");
     linkContainer.classList.add("link-div");
     linkContainer.append(link, editButton, deleteButton);

    postContainer.append( image, title, tagParagraph, linkContainer);

    console.log("Created post:", postContainer);

    return postContainer;

}