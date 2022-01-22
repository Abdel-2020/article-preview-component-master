
//Share button function
function shareButtonClicked() {
    //Find the share buttons and store them in the variable shareButton.
    let shareButton = document.querySelectorAll(".profile-share-button");
//loop between both to check if they are clicked.
    for (i = 0; i < shareButton.length; i++) {
        //if one is clicked, check if the social icons are showing. If not display them. 
        shareButton[i].addEventListener("click", e => {
            let socials = document.querySelector(".socials");
            if (socials.style.display == "none") {
                socials.style.display = "flex";
            } else {
                socials.style.display = "none";
            };
            //I use this to debug when testing if it's registering button clicks. 
            console.log(e);
        })
    }
};

//Share button function call
shareButtonClicked();