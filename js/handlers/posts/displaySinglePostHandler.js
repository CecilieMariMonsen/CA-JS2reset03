
import { getSinglePosts } from "../../api/posts/getSinglePost.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPost } from "../../ui/renderPosts/renderSingelPost.js";

export async function displaySinglePostHandler(){

    const querystring = window.location.search;
    const urlParams = new URLSearchParams(querystring);
    //console.log(urlParams);
    const id = urlParams.get("id");

    try {
        if (!id) {
            throw new Error("No ID was provided");
        }

        const post = await getSinglePosts(id);
        if (!post) {
            throw new Error("Post not found");
        }

        document.title = `${post.id} | JS 2 `;
        document.getElementById("title").innerHTML = post.title;
        document.getElementById("content").innerHTML = post.body;
        document.getElementById("imagepost").innerHTML = post.media;
        document.getElementById("publish").innerHTML = post.created;
       //console.log(post);
        renderPost("#post", post);

    } catch (error) {
        console.log(error);
        displayMessage("#post", "danger", error.message);
    }
}



