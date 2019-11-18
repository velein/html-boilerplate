import getWindowUserAgent from "./modules/userAgent";

window.onload = () => {
    console.log("You are using:", getWindowUserAgent());
};
 