const getCrafts = async() => {
    const url = "https://portiaportia.github.io/json/crafts.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        alert("Error");
    }
};

const showCrafts = async () => {
    const crafts = await getCrafts();

    // Clear existing content in gallery
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = '';

    // Loop through crafts and create img elements for images
    crafts.forEach((craft) => {
        const img = document.createElement("img");
        img.src = "./images/" + craft.image; // Assuming craft object has a property image with the image file name
        img.alt = "Craft Image"; // You can set an appropriate alt text here for accessibility
        gallery.appendChild(img);
    });
};

showCrafts();