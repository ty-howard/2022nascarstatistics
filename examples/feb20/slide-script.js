const slide = () => {
    const currentImage = document.querySelector("#slideshow :not(.hidden)");
    let nextImage = currentImage.nextElementSibling;

    if(nextImage == null) {
        nextImage = document.querySelector("#slideshow :first-child");
    }

    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
};

setInterval(slide, 5000); //setInterval(call Slide Function, every 1 second);