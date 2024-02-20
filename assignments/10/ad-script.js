const ad = () => {
    const currentAd = document.querySelector("#ads :not(.hide)");
    let nextAd = currentAd.nextElementSibling;

    if(nextAd == null) {
        nextAd = document.querySelector("#ads :first-child");
    }

    currentAd.classList.add("hide");
    nextAd.classList.remove("hide");
}

setInterval(ad, 2000);