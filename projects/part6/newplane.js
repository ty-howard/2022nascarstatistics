const submitNewPlane = (e) => {
    e.preventDefault(); //don't refresh the page
    
    const form = e.target;
    const date = form.elements["date"].value;
    const airline = form.elements["airline"].value;
    const aircraft = form.elements["aircraft"].value;
    const alliance = form.elements["alliance"].value;
    const reg = form.elements["reg"].value;
    console.log("Plane" + reg + "logged with date" + date);
    /*Flight Data*/
    const orig = form.elements["orig"].value;
    const dest = form.elements["dest"].value;
    const hrs = form.elements["hrs"].value;
    const mins = form.elements["mins"].value;
    console.log("Flight Origin: " + orig + " Destination: " + dest + "Hours: " + hrs + " Minutes: " + mins);
}

document.getElementById("new-plane").onsubmit = submitNewPlane;