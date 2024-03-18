

import { login } from "../../api/auth/login.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import * as storage from "../../helpers/storage/index.js"; 

//console.log(storage.load("accessToken"));

export function loginFormHandler() {
  const form = document.querySelector("#loginForm");
  
  if (form) {
    form.addEventListener("submit", handleLoginForm);
  } else {
    console.log("login not found.");
  }

  
}

async function handleLoginForm(event) {
  event.preventDefault();
  console.log(event)


  const form = event.target;
  const formData = new FormData(form);
  //const entries = formData.entries();
  const userDetails = Object.fromEntries(formData);

  const fieldset = form.querySelector("fieldset");


  try {
    fieldset.disabled = true;
    const { accessToken } = await login(userDetails);
    storage.save("accessToken", accessToken);
    window.location.href = "/thePosts/index.html";
    
  } catch (error){
    console.log(error);
    displayMessage("#message", "danger", error.message);
  }
  finally{
    fieldset.disabled = false;
  }

 ;
}