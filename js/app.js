import { registerFormHandler } from "./handlers/auth/registrerFormHandler.js";
import { loginFormHandler } from "../js/handlers/auth/loginFormHandler.js";
import { displayPostsHandler } from "../js/handlers/posts/displayPostsHandler.js";
import { displaySinglePostHandler } from "./handlers/posts/displaySinglePostHandler.js";
import { srcPostHandler } from "./handlers/posts/srcPostHandler.js";

function router() {
    const pathname = window.location.pathname;
console.log(pathname);

   
    switch(pathname){
        case "/":
        case "/index.html":
        registerFormHandler();     
        break;

        case "/auth/login/":
        case "/auth/login/index.html":
            loginFormHandler();
            break; 

        case "/thePosts/":
        case "/thePosts/index.html":
              displayPostsHandler();
              srcPostHandler();
        break; 

        case "/singelPost/":
        case "/singelPost/index.html":
              displaySinglePostHandler();
        break; 

        

        
    }
    
}

 
router(); 