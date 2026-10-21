var imgs = document.querySelectorAll("img");
for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i]
    var tag = img.alt;

    // Exclude non-photos
    if (tag === "") {
        continue;
    }
    img.src = "photo/80Avif/" + tag + ".avif"

    var link = document.createElement("a");
    link.href = tag + ".html";

    // Add link to image
    img.insertAdjacentElement("beforebegin",link);
    link.appendChild(img);

    // Calculate aspect ratio
    function setRatio() {
        var ratio = img.naturalWidth / img.naturalHeight;
        var item = img.closest(".gallery > *");
        item.style.setProperty("--ratio", ratio);
    }
    if (img.complete) {
        setRatio();
    } else {
        img.addEventListener("load", setRatio);
    }
 }
