var imgs = document.querySelectorAll("img");
for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i]
    var tag = img.alt;

    // Exclude non-photos
    if (tag === "") {
        continue;
    }
    img.src = "80Avif/" + tag + ".avif"
}

var city = document.querySelector(".city");
if (city) {
    var cityDiv = document.createElement("div");
    cityDiv.style.display = "flex";
    cityDiv.style.alignItems = "center";
    cityDiv.style.gap = "15px";
    city.before(cityDiv);

    var cityIcon = document.createElement ("img");
    cityIcon.src = "/icon/city.png";
    cityIcon.style.height = "24pt";
    cityDiv.append(cityIcon, city);
}

var place = document.querySelector(".place");
if (place) {
    var placeDiv = document.createElement("div");
    placeDiv.style.display = "flex";
    placeDiv.style.alignItems = "center";
    placeDiv.style.gap = "15px";
    place.before(placeDiv);

    var placeIcon = document.createElement ("img");
    placeIcon.src = "/icon/place.png";
    placeIcon.style.height = "24pt";
    placeDiv.append(placeIcon, place);
}

var date = document.querySelector(".date");
if (date) {
    var dateDiv = document.createElement("div");
    dateDiv.style.display = "flex";
    dateDiv.style.alignItems = "center";
    dateDiv.style.gap = "15px";
    date.before(dateDiv);

    var dateIcon = document.createElement ("img");
    dateIcon.src = "/icon/date.png";
    dateIcon.style.height = "24pt";
    dateDiv.append(dateIcon, date);
}

var note = document.querySelector(".note");
if (note) {
    var noteDiv = document.createElement("div");
    noteDiv.style.display = "flex";
    noteDiv.style.alignItems = "center";
    noteDiv.style.gap = "15px";
    note.before(noteDiv);

    var noteIcon = document.createElement ("img");
    noteIcon.src = "/icon/note.png";
    noteIcon.style.height = "24pt";
    noteDiv.append(noteIcon, note);
}
