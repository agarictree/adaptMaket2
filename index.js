let gallery = document.getElementsByClassName("gallery")[0];
let containers = Array.from(gallery.children);
let infoElem;
function enter(e) {
    infoElem = document.createElement("div");
    infoElem.className = "infoText";
    infoElem.innerHTML = "apartament: 30m<br>living room: 19m<br>kitchen: 6m";
    e.target.append(infoElem);
}
function leave(e) {
    infoElem.remove();
    infoElem = null;
}
containers.forEach(elem => {
    elem.addEventListener("mouseenter", enter);
    elem.addEventListener("mouseleave", leave);
})