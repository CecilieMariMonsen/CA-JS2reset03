import { registerFormHandler } from "./handlers/auth/registrerFormHandler.js";
import { loginFormHandler } from "../js/handlers/auth/loginFormHandler.js";
import { displayPostsHandler } from "../js/handlers/posts/displayPostsHandler.js";


function router() {
    const pathname = window.location.pathname;
console.log(pathname);

   
    switch(pathname){
        case "/":
        case "/index.html":
        registerFormHandler();     
        break;

        case "/auth/login/":
        case "/login/index.html":
            loginFormHandler();
            break; 

        case "/thePosts":
        case "/thePosts/index.html":
              displayPostsHandler();
        break; 

        
    }
    
}

 
router(); 