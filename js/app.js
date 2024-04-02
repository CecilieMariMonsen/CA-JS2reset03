import { registerFormHandler } from "./handlers/auth/registrerFormHandler.js";
import { loginFormHandler } from "../js/handlers/auth/loginFormHandler.js";
import { displayPostsHandler } from "../js/handlers/posts/displayPostsHandler.js";
import { displaySinglePostHandler } from "./handlers/posts/displaySinglePostHandler.js";
import { srcPostHandler } from "./handlers/posts/srcPostHandler.js";
import { newPostFormHandler } from "./handlers/posts/newPostHandler.js";
//import { deletePostHandler} from "./handlers/posts/deletPostHandler.js"; 
import { editPostFormHandler } from "./handlers/posts/editPosFormtHandler.js";

function router() {
    const pathname = window.location.pathname;
console.log(pathname);

   
    switch(pathname){
        case "/":
        case "/index.html":
        registerFormHandler();     
        break;
        case "/auth/login/index.html":
            loginFormHandler();
            break; 

        case "/thePosts/":
        case "/thePosts/index.html":
              displayPostsHandler();
              newPostFormHandler();
             // deletePostHandler();
              srcPostHandler();
        break; 

        case "/singelPost/":
        case "/singelPost/index.html":
              displaySinglePostHandler();
        break; 

        case "/editPost/":
        case "/editPost/index.html":
              editPostFormHandler();
        break; 

        

        
    }
    
}

 
router(); 