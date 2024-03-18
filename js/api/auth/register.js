import { registerUrl } from "../../constants/api.js";

export async function register(userDetails) {
    
    console.log("hei hei ", JSON.stringify(userDetails))

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Content-Security-Policy": "default-src *;" },
        body: JSON.stringify(userDetails) //+ "&accessToken=" + "haha",
        //må legge inn accessToken her, fx + accessToken: getToke()
    };
    //JSON.stringify(userDetails),
    
    const response = await fetch(registerUrl, options);
    const json = await response.json();

    console.log(response);

    if(response.ok){
        return json;
    }

    throw new Error(json.errors[0].message);
}
