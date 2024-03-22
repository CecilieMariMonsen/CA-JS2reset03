
/*
export function renderPost(parent, post) {
    const container = document.querySelector(parent);

    container.innerHTML = "";

    const postHtml = createPost(post);

    container.append(postHtml);

    console.log(postHtml);

    console.log(container, post);
}


function createPost(post) {
    const { id, title: heading } = post;

    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    const title = document.createElement("h2");
    title.textContent = heading;

    const link = document.createElement("a");
    link.href = `/singelPost/index.html?id=${id}`;
    link.textContent = "Read More";
    link.classList.add("post-link");

    postContainer.append(title);
    postContainer.append(link);

    return postContainer;
} */

export function renderPost(parent, post, postId) {
    const container = document.querySelector(parent);

    container.innerHTML = "";

    const postHtml = createPost(post, postId);

    container.append(postHtml);

    console.log(postHtml);
    console.log(container, post);
}

function createPost(post, postId) {
    const { title: heading, body, media, created } = post;

    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    const title = document.createElement("h2");
    title.textContent = heading;

    const content = document.createElement("p");// Opprett en p tag
    content.textContent = body;
 
 
     //const image = document.createElement("src");// Opprett en img tag
    //image.textContent = media;
    //const image = document.createElement("img");// Opprett en img tag
      //const image = document.createElement("img");// Opprett en img tag
      const image = document.createElement("img");
      image.src = media;
      image.alt = "Post Image";

      const publish = document.createElement("p");// Opprett en p tag
      content.textContent = created;


    const link = document.createElement("a");
    link.href = `/singelPost/index.html?id=${postId}`; // Bruk postId for å lage lenken
    //link.textContent = "Read More"; //slettes om ikke brukt
    link.classList.add("post-link");

    postContainer.append(title);
    postContainer.append(content);
    postContainer.append(link);
    postContainer.append(image);
    postContainer.append(publish);

    return postContainer;
}

//imdocument.getElementById("image").innerHTML = post.