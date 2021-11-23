const linkInsta = document.querySelector('#linkInsta');
const linkSnapchat = document.querySelector('#linkSnapchat');
const linkTwitter = document.querySelector('#linkTwitter');
const linkFacebook = document.querySelector('#linkFacebook');


function popOutWindow() {
    window.open('ShareRecipe.html', 'popup', 'width=400,height=200');
    return false;
}

linkInsta.addEventListener("click", popOutWindow);
linkSnapchat.addEventListener("click", popOutWindow);
linkTwitter.addEventListener("click", popOutWindow);
linkFacebook.addEventListener("click", popOutWindow);

