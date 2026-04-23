

function autoResize(el) {
    const maxHeight = 120; 

    el.style.height = "auto";

    if (el.scrollHeight > maxHeight) {
        el.style.height = maxHeight + "px";
        el.style.overflowY = "auto"; // ativa scroll
    } else {
        el.style.height = el.scrollHeight + "px";
        el.style.overflowY = "hidden"; // sem scroll
    }
}