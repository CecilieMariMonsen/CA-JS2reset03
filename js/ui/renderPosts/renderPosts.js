export function renderPosts(parent, posts) {
    const container = document.querySelector(parent);

    container.innerHTML = "";

    const postsHtml = posts.map((post) => {
        return createPost(post);
    });

    container.append(...postsHtml);

    console.log(...postsHtml);

    console.log(container, posts);
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

    postContainer.append(title);
    postContainer.append(image); 
    postContainer.append(link); 
    

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


