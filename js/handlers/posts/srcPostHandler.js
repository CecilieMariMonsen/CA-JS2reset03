/*import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPost } from "../../ui/renderPosts/renderPosts.js";
import { srcPosts } from "../../api/posts/srcPost.js";

export function srcPostHandler() { 
    const form = document.querySelector("#searchInput");
    
    if (form) {
        form.addEventListener("submit", handleSearchForm);

        const search = document.querySelector("#search");
       
        if(search === null) {
            console.log("Search not found.");
        }
        search.addEventListener("input", handleSearchForm);
    }
    else {
        console.log("Search not found.");
    }

}
    try {
        const posts = await getPosts(srcPosts);
        renderPost("#posts", posts);
    } catch (error) {
        console.log(error);
        displayMessage("#posts", "danger", error.message);
    }*/
/*
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPost } from "../../ui/renderPosts/renderPosts.js";
import { srcPosts } from "../../api/posts/srcPost.js";

export function srcPostHandler() {
    const form = document.querySelector("#searchForm");
    const searchInput = document.querySelector("#searchInput");

    const handleSearchForm = async (event) => {
        event.preventDefault();

        try {
            const posts = await srcPosts(searchInput.value);
            renderPost("#posts", posts);
        } catch (error) {
            console.log(error);
            displayMessage("#posts", "danger", error.message);
        }
    };

    if (form && searchInput) {
        form.addEventListener("submit", handleSearchForm);
        searchInput.addEventListener("input", handleSearchForm);
    } else {
        console.log("Search form or input not found.");
    }
}

import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPost } from "../../ui/renderPosts/renderPosts.js";
import { srcPosts } from "../../api/posts/srcPost.js";

export async function srcPostHandler() { 
    const form = document.querySelector("#searchForm");
    
    if (form) {
        form.addEventListener("submit", handleSearchForm);

        const searchInput = document.querySelector("#searchInput");
       
        if (searchInput === null) {
            console.log("Search input not found.");
        }
        searchInput.addEventListener("input", handleSearchForm);
    } else {
        console.log("Search form not found.");
    }
}

async function handleSearchForm(event) {
    event.preventDefault();

    const searchQuery = event.target.value.trim();

    try {
        const posts = await srcPosts(searchQuery);
        renderPost("#posts", posts);
        document.querySelector("#searchInput").value = "";
    } catch (error) {
        console.error(error);
        displayMessage("#posts", "danger", error.message);
    }
}*/

import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPosts } from "../../ui/renderPosts/renderPosts.js";
import { srcPosts } from "../../api/posts/srcPost.js";


export async function srcPostHandler() { 
    const form = document.querySelector("#searchForm");
    const searchInput = document.querySelector("#searchInput");
    
    if (form && searchInput) {
        form.addEventListener("submit", (event) => handleSearchForm(event, searchInput));
        
        searchInput.addEventListener("input", handleSearchForm);
    } else {
        console.log("Search form or input not found.");
    }
}

async function handleSearchForm(event, searchInput) {
    event.preventDefault();

    const searchQuery = (searchInput || event.target).value.trim();
    console.log("Search query:", searchQuery);
    try {
        const posts = await srcPosts(searchQuery);
        console.log("Fetched posts:", posts);
        renderPosts("#posts", posts);
        console.log("Posts rendered");
        if (searchInput) searchInput.value = "";
    } catch (error) {
        console.error("Error details:", error);
        displayMessage("#posts", "danger", error.message);
    }
}


/*
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPosts } from "../../ui/renderPosts/renderPosts.js";
import { srcPosts } from "../../api/posts/srcPost.js";

document.getElementById('searchInput').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase().trim();

    if (!searchQuery) {
        console.log('Search query is empty');
        return;
    }

    console.log('Search Query:', searchQuery);

    const searchResultsElement = document.getElementById('posts');
    searchResultsElement.innerHTML = '';

    const apiUrl = postsURL + '?_tag=' + searchQuery;
    console.log('API URL:', apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.title;
                searchResultsElement.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            searchResultsElement.textContent = 'An error occurred while fetching data';
        });
});*/
/*
import { displayMessage } from "../../ui/common/displayMessage.js";
import { postsURL } from "../../constants/api.js";

document.getElementById('searchInput').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase().trim();

    if (!searchQuery) {
        console.log('Search query is empty');
        return;
    }

    console.log('Search Query:', searchQuery);

    const searchResultsElement = document.getElementById('posts');
    searchResultsElement.innerHTML = '';

    const apiUrl = postsURL + '?_tag=' + searchQuery;
    console.log('API URL:', apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.title;
                searchResultsElement.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayMessage('error', 'An error occurred while fetching data', '.message-container');
        });
});
*/


