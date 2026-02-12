const boxMenu = document.querySelectorAll(".boxMenu");
function moveIndicator(element) {
    const boxMenus = element.closest(".boxMenu");
    const indicator = boxMenus.querySelector(".indicator");
    const sectionNum = boxMenus.parentElement.querySelector(".number").innerText;
    indicator.style.height = "";
    indicator.style.top = "";
    indicator.style.transform = "";

    if (sectionNum === "3") {
        indicator.style.width = `7px`;
        indicator.style.left = `${element.offsetLeft + element.offsetWidth / 2 - 3.5}px`;
    } else {
        indicator.style.width = `${element.offsetWidth}px`;
        indicator.style.left = `${element.offsetLeft}px`;

        if (sectionNum === "7" || sectionNum === "8") {
            indicator.style.height = `${element.offsetHeight}px`;
            indicator.style.top = `${element.offsetTop}px`;
            indicator.style.transform = "none";
        }
    }
}
function updateAllIndicators() {
    document.querySelectorAll(".letter1.active").forEach((activeItem) => {
        moveIndicator(activeItem);
    });
}

boxMenu.forEach((box) => {
    const items = box.querySelectorAll(".letter1");

    items.forEach((item) => {
        item.addEventListener("click", () => {
            box.querySelector(".letter1.active")?.classList.remove("active");
            item.classList.add("active");
            moveIndicator(item);
        });
    });
    const initialActive = box.querySelector(".letter1.active");
    if (initialActive) {
        setTimeout(() => moveIndicator(initialActive), 100);
    }
});
window.addEventListener("resize", updateAllIndicators);
