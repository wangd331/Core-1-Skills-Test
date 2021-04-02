let caption = document.querySelector(".caption");

function showCaption() {
    caption.style.display = "block";
}

let container = document.querySelector("#container");
function zoomIn() {
    container.style.transform = "scale(2,2) translate(25%,25%)";
}
function zoomOut() {
    container.style.transform = "scale(1,1)";
}