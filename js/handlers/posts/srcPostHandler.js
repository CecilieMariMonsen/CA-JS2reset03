import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderSearchResults} from "../../ui/renderPosts/renderSrcPost.js";
import { srcPosts } from "../../api/posts/srcPost.js";
//import { renderSearchResults } from "../../ui/renderPosts/renderSrcPost.js";

document.addEventListener("DOMContentLoaded", srcPostHandler);

export async function srcPostHandler() { 
    const form = document.querySelector("#searchForm");
    const searchInput = document.querySelector("#searchInput");
    
    console.log(searchInput);
    
    if (form && searchInput) {
        form.addEventListener("submit", (event) => handleSearchForm(event, searchInput));
    } else {
        console.log("Search form or input not found.");
    }
}

function searchPosts(posts, searchTerm) {
    return posts.filter(post => post.tags && post.tags.includes(searchTerm));
}

async function handleSearchForm(event, searchInput) {
    event.preventDefault();

     console.log(searchInput.value);

    const searchQuery = searchInput ? searchInput.value.trim() : event.target ? event.target.value.trim() : '';
    console.log("Search query:", searchQuery);

    try {
        const posts = await srcPosts(searchQuery);
        console.log("Fetched posts:", posts);

        const filteredPosts = searchPosts(posts, searchQuery);
        
        renderSearchResults("#srcResualt", filteredPosts);
        console.log("Posts rendered");
        
        if (searchInput) searchInput.value = "";
        
    } catch (error) {
        console.error("Error details:", error);
        displayMessage("#posts", "danger", error.message);
    }
}





