// Toggles the nav items to show/hide when the hamburger menu is clicked
const toggleHamburger = () => {
  document.getElementById("nav-items").classList.toggle("hide");
};

// Calls the toggleHamburger function when the hamburger menu is clicked
window.onload = () => {
  document.getElementById("hamburger").onclick = toggleHamburger;
};
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
