const boxMenu = document.querySelectorAll(".boxMenu");
boxMenu.forEach((boxMenus) => {
    const wrapItem = boxMenus.querySelector(".wrapItem");
    const items = boxMenus.querySelectorAll(".letter1");
    const indicator = boxMenus.querySelector(".indicator");
    function moveIndicator(element) {
        const sectionNum = boxMenus.parentElement.querySelector(".number").innerText;

        if (sectionNum === "3") {
            indicator.style.width = `7px`;
            indicator.style.left = `${element.offsetLeft + element.offsetWidth / 2 - 3.5}px`;
        }
        // Section 7 & 8 thường có gap hoặc padding khác biệt
        else {
            indicator.style.width = `${element.offsetWidth}px`;
            indicator.style.left = `${element.offsetLeft}px`;

            // Nếu là section 7, 8 có thể cần chỉnh chiều cao linh hoạt
            if (sectionNum === "7" || sectionNum === "8") {
                indicator.style.height = `${element.offsetHeight}px`;
                indicator.style.top = `${element.offsetTop}px`;
                indicator.style.transform = "none";
            }
        }
    }
    const initialActive = boxMenus.querySelector(".letter1.active");
    if (initialActive) {
        moveIndicator(initialActive);
    }
    items.forEach((item) => {
        item.addEventListener("click", () => {
            const currentActive1 = boxMenus.querySelector(".letter1.active");
            if (currentActive1) {
                currentActive1.classList.remove("active");
            }
            item.classList.add("active");
            moveIndicator(item);
        });
    });
});
