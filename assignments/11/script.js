class Building {
    constructor(title, loc, start, end, arch, cost, own, pic) {
        this.title = title;
        this.loc = loc;
        this.start = start;
        this.end = end;
        this.arch = arch;
        this.cost = cost;
        this.pic = pic;
        this.own = own;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("bldg");
        section.onclick = () => this.openModal();

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        const imageSection = document.createElement("section");
        section.append(imageSection);
        const image = document.createElement("img");
        image.src = "images/" + this.pic;
        imageSection.append(image);

        return section;
    }

    openModal() {
        const modal = document.getElementById("myModal");
        const modalContent = document.getElementById("modal-content");
        modalContent.innerHTML = "";
        
        const closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.onclick = () => modal.style.display = "none";
    
        modal.style.display = "block";
        
        const columnsContainer = document.createElement("div");
        columnsContainer.classList.add("columns");
        
        const dataColumn = document.createElement("div");
        dataColumn.classList.add("one");
        
        dataColumn.append(this.name(this.title));
        dataColumn.append(this.paragraph("Location", this.loc));
        dataColumn.append(this.paragraph("Construction Start Date", this.start));
        dataColumn.append(this.paragraph("Construction End Date", this.end));
        dataColumn.append(this.paragraph("Architect", this.arch));
        dataColumn.append(this.paragraph("Adjusted Cost", this.cost));
        dataColumn.append(this.paragraph("Owner", this.own));
    
        const imageColumn = document.createElement("div");
        imageColumn.classList.add("one");
    
        const image = document.createElement("img");
        image.src = "images/" + this.pic;
        image.style.width = "100%";
        imageColumn.append(image);
    
        columnsContainer.append(dataColumn);
        columnsContainer.append(imageColumn);
    
        modalContent.append(columnsContainer);
    }

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}:</strong> ${info}`;
        return p;
    }

    name(title) {
        const h4 = document.createElement("h4");
        h4.innerHTML = `${title}`;
        return h4;
    }
}

const bldgs = [];
bldgs.push(new Building("Eiffel Tower", "Paris, France", "January 28, 1887", "March 15, 1889", "Stephen Sauvestre", "$37 million USD", "City of Paris", "tower.jpg"));
bldgs.push(new Building("Empire State Building", "New York, USA", "March 17, 1930", "April 11, 1931", "Shreve, Lamb, and Harmon Architectural Firm", "$637 million USD", "Empire State Realty Trust", "empire.jpg"));
bldgs.push(new Building("Florence Cathedral", "Florence, Italy", "September 9, 1296", "1436", "Arnolfo di Cambio", "Unknown", "Archdiocese of Florence", "cathedral.jpg"));
bldgs.push(new Building("Neuschwanstein Castle","Hohenschwangau, Germany","September 5, 1869","1886","Eduard Riedel","16 million USD","Bavarian Palace Department","castle.jpg"));

bldgs.forEach((building) => {
    document.getElementById("bldg-list").append(building.item);
});