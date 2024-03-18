import { register } from "../../api/auth/register.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
//import { getToken } from "../../helpers/auth/getToken.js";

export function registerFormHandler() {
  const form = document.querySelector("#registerForm");
  form.addEventListener("submit", handleRegisterForm);
}

async function handleRegisterForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const entries = formData.entries();
  const userDetails = Object.fromEntries(entries);
  console.log(userDetails);

  const fieldset = form.querySelector("fieldset");

  try {
    fieldset.disabled = true;
    await register(userDetails);
    displayMessage("#message", "success", 'You are now registered, pleas <a href="/auth/login/index.html">Login</a>');
    form.reset();
  } catch (error){
    console.log(error);
    displayMessage("#message", "danger", error.message);
  }
  finally{
    fieldset.disabled = false;
  }
}