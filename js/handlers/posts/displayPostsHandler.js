import { getPosts } from "../../api/posts/getPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPosts } from "../../ui/renderPosts/renderPosts.js";


export async function displayPostsHandler() {
    try {
        const posts = await getPosts();
        renderPosts("#posts", posts);
    } catch (error) {
        console.log(error);
        displayMessage("#posts", "danger", error.message);
    }
}