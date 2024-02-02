let pos = 0;

const colorSquare = () => {
    document.getElementById("square").classList.add("rainbow");
    console.log("confirm colorSquare");
};

const moveUp = () => {
    pos -=10;
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", pos + "px");
    console.log("confirm moveUp");
}

const moveDown = () => {
    pos +=10;
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", pos + "px");
    console.log("confirm moveDown");
}

const addCircle = () => {
    const area = document.getElementById("circlearea");
    //area.innerHTML += "<section class='circle'></section>";
    const ball = document.createElement("section");
    ball.classList.add("circle");
    area.append(ball);
    console.log("confirm addCircle");

}

document.getElementById("btn-color").onclick = colorSquare;
document.getElementById("btn-moveup").onclick = moveUp;
document.getElementById("btn-movedown").onclick = moveDown;
document.getElementById("btn-add-circle").onclick = addCircle;