import { getSinglePosts } from "../../api/posts/getSinglePost.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPost } from "../../ui/renderPosts/renderSingelPost.js";

export async function displaySinglePostHandler(){

    const querystring = window.location.search;
    const urlParams = new URLSearchParams(querystring);
    console.log(urlParams);
    const id = urlParams.get("id");

    try {
        if (!id) {
            throw new Error("No ID was provided");
        }

        const post = await getSinglePosts(id); // Pass id til getSinglePosts funksjonen
        if (!post) {
            throw new Error("Post not found");
        }

        document.title = `${post.id} | JS 2 `;
        document.getElementById("title").innerHTML = post.title;
        document.getElementById("content").innerHssTML = post.body;
        document.getElementById("imagepost").innerHTML = post.media;
        document.getElementById("publish").innerHTML = post.created;
        console.log(post);
        renderPost("#post", post);

    } catch (error) {
        console.log(error);
        displayMessage("#post", "danger", error.message);
    }
}



/*
import { getSinglePosts } from "../../api/posts/getSinglePost.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPost } from "../../ui/renderPosts/renderSingelPost.js";

export async function displaySinglePostHandler(){

    const querystring = window.location.search;

    const urlParams = new URLSearchParams(querystring);

    console.log(urlParams);

    const id = urlParams.get("id");


    try {
        if (!id) {
            throw new Error("No ID was provided");
        }

        function getPostById (id) {
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
        const post = await getSinglePosts(); 
        document.title = `${post.id} | JS 2 `;
        document.getElementById("title").innerHTML = post.title;
        console.log(post);
        renderPost("#post", post);
        //kan være vi trenger render post
    
    } catch (error) {
        console.log(error);
        displayMessage("#post", "danger", error.message);
    }

}


*/








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
}*/
