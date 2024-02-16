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

let updateCount;
let pos = 0;
let direction = 1;

const startStopCount = (e) => {
    const ball = document.getElementById("ball");
    const root = document.querySelector(":root");

    if (e.target.innerHTML.toLowerCase() === "start") {
        e.target.innerHTML = "Stop";

        updateCount = setInterval(() => {
            pos += direction;
            root.style.setProperty("--ball-top", pos + "px");

            if (pos === 410 || pos === 0) {
                direction *= -1; // Change direction
            }
        }, 2);

    } else {
        e.target.innerHTML = "Start";
        clearInterval(updateCount);
    }
};

const imageDesc = {
    yoga1: "Triangle",
    yoga2: "Downward Dog",
    yoga3: "Tree",
    yoga4: "Sitting Triangle",
    yoga5: "Crossed-Leg Lean",
    yoga6: "Forward Lunge",
    yoga7: "Side Lunge",
    yoga8: "Push"
}

const showDesc = (e) => {
    const imageId = e.target.id;
    const description = imageDesc[imageId];
    document.getElementById("desc").textContent = description;
}


document.getElementById("triangle").onclick = togNav;
document.getElementById("ex1").onclick = toEx1;
document.getElementById("ex2").onclick = toEx2;
document.getElementById("start").onclick = startStopCount;
for (let i = 1; i < 9; i++) {
    document.getElementById("yoga" + i).onclick = showDesc;
    };