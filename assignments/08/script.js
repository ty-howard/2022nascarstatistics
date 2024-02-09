const togNav = () => {
    const tri = document.getElementById("triangle");
    const nav = document.getElementById("nav-items");
    nav.classList.toggle("hide");
    if(nav.classList.contains("hide")){
        console.log("has hide");
        triangle.classList.add("down");
        triangle.classList.remove("up");
    }
    else {
        console.log("no hide");
        triangle.classList.add("up");
        triangle.classList.remove("down");
    }
};

const toEx1 = () => {
    const ex1 = document.getElementById("ex1-cont").classList.remove("hide");
    const ex2 = document.getElementById("ex2-cont").classList.add("hide");
};

const toEx2 = () => {
    const ex2 = document.getElementById("ex2-cont").classList.remove("hide");
    const ex1 = document.getElementById("ex1-cont").classList.add("hide");
};

const changeImg = () => {
    const tempEntry = document.getElementById("text").value;
    const entry = tempEntry.charAt(tempEntry.length - 1);
    const image = document.getElementById("mainimg");
    
    if(entry == "b"){
        image.src="./images/read.jpg";
    }
    else if(entry == "c"){
        image.src="./images/clown.jpg";
    }
    else if(entry == "p"){
        image.src="./images/birthday.jpg";
    }
    else if(entry == "r"){
        image.src="./images/rain.jpg";
    }
    else if(entry == "s"){
        image.src="./images/shovel.jpg";
    }
    else if(entry == "w"){
        image.src="./images/work.jpg";
    }
};

const yoga = () => {
    let output = 0;
    output = document.getElementById("yogaslide").value;
    image = document.getElementById("yogaimg");
    image.src="./images/yoga" + output + ".jpg";
};

document.getElementById("triangle").onclick = togNav;
document.getElementById("ex1").onclick = toEx1;
document.getElementById("ex2").onclick = toEx2;
document.getElementById("text").onkeyup = changeImg;
document.getElementById("yogaslide").oninput = yoga;