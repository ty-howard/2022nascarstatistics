const addStar = () => {
    const area = document.getElementById("stars");
    area.innerHTML += '<section id="starobj"><img src="./images/star.png"></section>';
}

document.getElementById("stars").onclick = addStar;

var slider = document.getElementById("myRange");

slider.oninput = function() {
  let output = 0;
  output = this.value;
  document.getElementById("rotimg").style.rotate = this.value + "deg";
}

const myImg = document.getElementById("click-img");
const changeImg = () => {
  if (myImg.src.endsWith("https://place-hold.it/200/EEEEEE")) {
    myImg.src = "https://place-hold.it/200/615756";
  } else {
    myImg.src = "https://place-hold.it/200/EEEEEE";
  }
}

document.getElementById("click-img").onclick = changeImg;