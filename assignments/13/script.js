const getCrafts = async() => {
    const url = "https://portiaportia.github.io/json/crafts.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        alert("Error");
    }
};

const showCrafts = async() => {
    const crafts = await getCrafts();

    crafts.forEach((craft) => {
        document.getElementById("gallery").append(getCraftSection(craft));
    });
};

const getCraftSection = (craft) => {
    const section = document.createElement("section");
    section.classList.add("house");
    
    const h3 = document.createElement("h3");
    h3.innerHTML = craft.name;
    section.append(h3);

    return section;
}

showCrafts();