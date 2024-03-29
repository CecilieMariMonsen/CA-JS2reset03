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
    const { id, title:heading, media } = post;
    //console.log("hvor er id", id) 

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

    /*const editPost = document.createElement("a");
    editPost.href = `/editPost/index.html?id=${id}`;
    editPost.textContent = "Edit Post";
    editPost.classList.add("editpost-link");*/

    // Create an edit button
    const editButton = document.createElement("a");
    editButton.textContent = "Edit";
    editButton.classList.add("post-edit-button");
    editButton.onclick = () => {
        window.location.href = `/editPost/index.html?id=${id}`; // Replace with your edit post page URL
    };


    
    const deleteButton = document.createElement("a");
    deleteButton.href = `/singelPost/index.html?id=${id}`;
    deleteButton.textContent = "DELETE";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action
        if (id !== null ){
            deletePostHandler(id); // Call the deletePostFormHandler function when the button is clicked
        }
    });

    postContainer.append(title);
    postContainer.append(image); 
    postContainer.append(link); 
    postContainer.append(editButton);
    postContainer.append(deleteButton);
    

    return postContainer;

}

/*
function getOistById(id) {
    // Iterate through the posts array
    for (var i = 0; i < posts.length; i++) {
        // Check if the current post's ID matches the specified ID
        if (posts[i].id === id) {
            // Return the post
            return posts[i];
        }
    }
    // Return null if no post with the specified ID is found
    return null;
}



Hanna Nikoline Støen
14:43
var foo = getParameterByName('foo'); // "lorem"
const urlParams = new URLSearchParams(queryString);
Hanna Nikoline Støen
14:46
const queryString = window.location.search;
Hanna Nikoline Støen
15:11
docuemnt.getElementById(“myDiv”).innerHTML=”Value is ” + val;
Hanna Nikoline Støen
15:31*/


