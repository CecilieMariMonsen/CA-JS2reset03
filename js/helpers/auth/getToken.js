import * as storage from "../storage/index.js";

export function getToken() {
    const token = storage.load("accessToken");
    console.log(token)
    return token;
}