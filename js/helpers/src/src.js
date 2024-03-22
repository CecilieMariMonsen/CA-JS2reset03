
//import { getPosts } from "../../api/posts/getPosts.js";
//import { displayMessage } from "../../ui/common/displayMessage.js";
//import { renderPost } from "../../ui/renderPosts/renderPosts.js";

/*import { postsURL } from "../../constants/api.js";

document.getElementById('searchInput').addEventListener('input', function() {
    var searchQuery = this.value.toLowerCase();
    console.log('Search Query:', searchQuery);

    var searchResultsElement = document.getElementById('posts');

    searchResultsElement.innerHTML = '';

    // Gjør en forespørsel til API-en med det aktuelle søkeordet
    var apiUrl = postsURL + '?_tag=' + searchQuery; // Endre URL-en basert på API-dokumentasjonen
    console.log('API URL:', apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(function(item) {
                // Opprett et element for hvert søkeresultat og legg til det i DOM-en
                var li = document.createElement('li');
                li.textContent = item.title; // Anta at tittelen er det relevante elementet å vise
                searchResultsElement.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});*/
