let images = [];
images["./images/mountain-lake.jpg"] = '<p><a href="https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7">Image by vecstock</a> on Freepik</p>';
images["./images/golden.jpg"] = '<p><a href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>';
images["./images/garden.jpg"] = '<p><a href="https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>';
images["./images/small-house.jpg"] = '<p><a href="https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>';
images["./images/snow.jpg"] = '<p><a href="https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>';

const showImgs = () => {
    const imgArea = document.getElementById("picTable");
    for(let img in images){
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const tr2 = document.createElement("tr");
        const td2 = document.createElement("td");
        let newimg = document.createElement("img");
        newimg.src = img;
        td.append(newimg);
        tr.append(td);
        imgArea.append(tr);
        td2.innerHTML = images[img];
        tr2.append(td2);
        imgArea.append(tr2);
    }
};

showImgs();