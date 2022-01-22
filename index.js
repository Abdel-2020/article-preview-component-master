

function shareButtonClicked() {
    //Find the share buttons and store them in the variable shareButton.
    let shareButton = document.querySelectorAll(".profile-share-button");

    for (i = 0; i < shareButton.length; i++) {
        shareButton[i].addEventListener("click", e => {
            let socials = document.querySelector(".socials");
            if (socials.style.display == "none") {
                socials.style.display = "flex";
            } else {
                socials.style.display = "none";
            };
            console.log(e);
        })
    }
};

shareButtonClicked();