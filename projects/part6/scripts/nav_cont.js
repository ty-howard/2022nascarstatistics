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

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
      result.innerHTML = json.message;
    } else {
      console.log(response);
      result.innerHTML = json.message;
    }
  })
  .catch(error => {
    console.log(error);
    result.innerHTML = "Something went wrong!";
  });
});



document.getElementById("triangle").onclick = togNav;