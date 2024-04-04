//import { getPosts } from "../../api/posts/getPosts.js";
import { renderPosts } from "../../ui/renderPosts/renderPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { filterPost } from "../../api/posts/filterPosts.js";

export async function filterPostsHandler() {
    if (document.querySelector("#dateFilterButton")) {
        document.querySelector("#dateFilterButton").addEventListener('click', (event) => handleFilterButton(event, 'date'));
    }
   else {
        console.log("Date filter button not found.");
   }

   if (document.querySelector("#titleSortingPost")) {
       document.querySelector("#titleSortingPost").addEventListener('click', (event) => handleFilterButton(event, 'alphabetical'));
} else {
       console.log("Title sorting button not found.");
}
}
    
async function handleFilterButton(event, filterType) {
    event.preventDefault();

    try {
        const posts = await filterPost();

        let sortedPosts;
        if (filterType === 'date') {
            sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)); 
        } else if (filterType === 'alphabetical') {
            sortedPosts = posts.sort((a, b) => a.title.localeCompare(b.title)); 
            throw new Error(`Unknown filter type: ${filterType}`);
        }

        renderPosts("#postContainer", sortedPosts); 

    } catch (error) {
        console.error("Error details:", error);
        displayMessage("#posts", "danger", error.message);
    }
}