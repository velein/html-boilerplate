/**
 * This is really just an example code. Feel free to remove it :)
 */

const getUserAgent = (): string => window.navigator.userAgent;

window.onload = () => {
    console.log(`You are using ${getUserAgent()}`);
};
