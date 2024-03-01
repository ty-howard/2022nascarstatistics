const getHouses = async() => {
    const url = "https://portiaportia.github.io/json/house-plans.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        alert("Error");
    }
};

const showHouses = async() => {
    const houses = await getHouses();

    houses.forEach((house) => {
        document.getElementById("house-section").append(getHouseSection(house));
    });
};

const getHouseSection = (house) => {
    const section = document.createElement("section");
    section.classList.add("house");
    
    const h3 = document.createElement("h3");
    h3.innerHTML = house.name;
    section.append(h3);

    const details = document.createElement("div");
    details.classList.add("details", "columns");
    section.append(details);

    const imgSection = document.createElement("section");
    imgSection.classList.add("one");
    const img = document.createElement("img");
    img.src = "https://portiaportia.github.io/json/images/house-plans/" + house.main_image;
    imgSection.append(img);
    details.append(imgSection);

    const detSection = document.createElement("section");
    detSection.classList.add("three", "detSec");

    const size = document.createElement("p");
    size.innerHTML = "Size: " + house.size + " square feet";
    detSection.append(size);

    const bedrooms = document.createElement("p");
    bedrooms.innerHTML = "Bedrooms: " + house.bedrooms;
    detSection.append(bedrooms);

    const baths = document.createElement("p");
    baths.innerHTML = "Bathrooms: " + house.bathrooms;
    detSection.append(baths);

    const feats = document.createElement("p");
    feats.innerHTML = "Features: " + house.features.join(", ");
    detSection.append(feats);
    details.append(detSection);

    const plans = document.createElement("div");
    plans.classList.add("columns");
    house.floor_plans.forEach((floor_plan)=>{
        const planSection = document.createElement("section");
        planSection.classList.add("one");
        const h3 = document.createElement("h3");
        h3.innerHTML = floor_plan.name;
        planSection.append(h3);
        const planImg = document.createElement("img");
        planImg.classList.add("planImg");
        planImg.src = "https://portiaportia.github.io/json/images/house-plans/" + floor_plan.image;
        planSection.append(planImg);
        plans.append(planSection);
    });
    section.append(plans);

    return section;
}

showHouses();