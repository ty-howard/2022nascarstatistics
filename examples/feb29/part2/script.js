const getBreweries = async() => {
    try {
        return (await fetch("https://api.openbrewerydb.org/breweries")).json();
    } catch(error) {
        console.log("error");
    }
};

const getMap = async(latitude, longitude) => {
    try {
        return await fetch(`https://maps.google.com/maps?q=$(latitude)`)
    } catch(error) {
        console.log("error");
    }
}

const showBreweries = async() => {
    const breweries = await getBreweries();
    breweries.forEach((brewery) => {
        const allBsSection = document.getElementById("breweries-section");
        const brewerySection = document.createElement("section");
        allBsSection.append(brewerySection);

        brewerySection.classList.add("brewery");

        const a = document.createElement("a");
        a.href = brewery.website_url;
        brewerySection.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = brewery.name;
        a.append(h3);

        const p = document.createElement("p");
        a.append(p);
        p.innerHTML = `$(brewery.brewery_type) brewery`;

    });
};

showBreweries();