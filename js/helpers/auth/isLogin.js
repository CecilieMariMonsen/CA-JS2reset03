import * as storage from "../storage/index.js";

export function isLoggedIn() {
    const token = storage.load("accessToken");
    if (token) {
        return true;
    }

    return false;
}