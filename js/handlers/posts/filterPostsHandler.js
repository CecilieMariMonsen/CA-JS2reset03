import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderSearchResults} from "../../ui/renderPosts/renderSrcPost.js";
import { srcPosts } from "../../api/posts/srcPost.js";


document.addEventListener("DOMContentLoaded", filterPostHandler);

  let filterPosts = {
        
    } 
export async function filterPostHandler() {  
    const form = document.querySelector("#filterForm");
    const searchInput = document.querySelector("#filterInput");



   // document.querySelector("#tøm").addEventListener('click', (event) => renderPosts("#posts", posts)); 
    // renderPosts("#posts", posts);
    
    console.log(searchInput);
    
    if (form && searchInput) {
        form.addEventListener("submit", (event) => handleFilterForm(event, searchInput));
    } else {
        console.log("Search form or input not found.");
    }
}

function searchPosts(posts, searchTerm) {
    return posts.filter(post => post.tags && post.tags.includes(searchTerm));
}

async function handleFilterForm(event, searchInput) {
    event.preventDefault();

  

     console.log(searchInput.value);

    const searchQuery = searchInput ? searchInput.value.trim() : event.target ? event.target.value.trim() : '';
   console.log("Search query:", searchQuery);

    try {
        const posts = await srcPosts(searchQuery);
        console.log("Fetched posts:", posts);

       filterPosts = searchPosts(posts, searchQuery);
        
        renderSearchResults("#srcResualt", filterPosts); 
       
        console.log("Posts rendered");
        
        if (searchInput) searchInput.value = "";
        
    } catch (error) {
        console.error("Error details:", error);
        displayMessage("#posts", "danger", error.message);
    }
}















// //import { getPosts } from "../../api/posts/getPosts.js";
// import { renderPosts } from "../../ui/renderPosts/renderPosts.js";
// import { displayMessage } from "../../ui/common/displayMessage.js";
// import { filterPost } from "../../api/posts/filterPosts.js";

// export async function filterPostsHandler() {
//     if (document.querySelector("#dateFilterButton")) {
//         document.querySelector("#dateFilterButton").addEventListener('click', (event) => handleFilterButton(event, 'date'));
//     }
//    else {
//         console.log("Date filter button not found.");
//    }

//    if (document.querySelector("#titleSortingPost")) {
//        document.querySelector("#titleSortingPost").addEventListener('click', (event) => handleFilterButton(event, 'alphabetical'));
// } else {
//        console.log("Title sorting button not found.");
// }
// }
    
// async function handleFilterButton(event, filterType) {
//     event.preventDefault();

//     try {
//         const posts = await filterPost();

//         let sortedPosts;
//         if (filterType === 'date') {
//             sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)); 
//         } else if (filterType === 'alphabetical') {
//             sortedPosts = posts.sort((a, b) => a.title.localeCompare(b.title)); 
//             throw new Error(`Unknown filter type: ${filterType}`);
//         }

//         renderPosts("#postContainer", sortedPosts); 

//     } catch (error) {
//         console.error("Error details:", error);
//         displayMessage("#posts", "danger", error.message);
//     }
// }