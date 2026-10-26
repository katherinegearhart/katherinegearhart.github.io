var imgs = document.querySelectorAll(".gallery img");

imgs.forEach(function (img) {
    var tag = img.alt;

    // Add link and source to image
    var link = document.createElement("a");
    link.href = "/photo/" + tag + ".html";
    img.insertAdjacentElement("beforebegin",link);
    link.appendChild(img);
    img.src = "/photo/70Avif/" + tag + ".avif"

    // Calculate aspect ratio
    function setRatio() {
        var ratio = img.naturalWidth / img.naturalHeight;
        var item = img.closest(".gallery > *");
        item.style.setProperty("--ratio", ratio);
    }
    img.addEventListener("load", setRatio);
});
