

let accessToken;

const Spotify = {

getAccessToken() {
    if(accessToken){
        return accessToken;
    } else {
        const accessToken = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessToken && expiresInMatch) {
            accessToken = accessToken[1];
            cosnt expiresIn = Number(expiresInMatch[1]);
            
        }
    }
}
};










export default Spotify;