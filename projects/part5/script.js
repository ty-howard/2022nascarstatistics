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

const getPlanes = async() => {
  const url = "./planes.json";

  try {
    const response = await fetch(url);
    return response.json();
  } catch(error){
    alert("Error");
  }
};

const showPlanes = async() => {
  const planes = await getPlanes();

  planes.forEach((plane) => {
    document.getElementById("al_resultscont").append(getPlaneSection(plane));
  });
};

const getPlaneSection = (plane) => {
  const result = document.createElement("section");
  result.classList.add("one");
  result.setAttribute("id","result");

  const columns = document.createElement("div");
  columns.classList.add("columns");
  result.append(columns);

  const imgSection = document.createElement("section");
  imgSection.classList.add("one");
  imgSection.setAttribute("id","resimg");
  columns.append(imgSection);

  const img = document.createElement("img");
  img.src = "./images/111hq.jpeg";
  imgSection.append(img);

  const txtSection = document.createElement("section");
  txtSection.classList.add("one");
  txtSection.setAttribute("id","restxt");
  columns.append(txtSection);

  const al = document.createElement("p");
  al.innerHTML = "Airline: Delta";
  txtSection.append(al);

  const ac = document.createElement("p");
  ac.innerHTML = "Aircraft: A350";
  txtSection.append(ac);

  const ali = document.createElement("p");
  ali.innerHTML = "Alliance: SkyTeam";
  txtSection.append(ali);

  const reg = document.createElement("p");
  reg.innerHTML = "Registration: N123AZ";
  txtSection.append(reg);

  const hr = document.createElement("hr");
  result.append(hr);

  const h4 = document.createElement("h4");
  h4.innerHTML = "Logged on 2/11/2024 by Admin";
  result.append(h4);

  return result;
}

document.getElementById("triangle").onclick = togNav;
showPlanes();