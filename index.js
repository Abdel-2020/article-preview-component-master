function shareButtonClicked(){
//Find the share button and store it in the variable shareButton.
 let shareButton = document.querySelector(".profile-share-button");

 shareButton.addEventListener("click", e => {
     let socials = document.querySelector(".socials");
    socials.style.display="flex";
    console.log(e);
 })
};


shareButtonClicked();