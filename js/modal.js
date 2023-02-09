export const modal = () => {
    const modal = document.querySelector(".search-model");
    const modalBtn = document.querySelector(".icon_search");
    const modalCloseBtn = document.querySelector(".search-close-switch");

    modalBtn.addEventListener("click", () => {
        modal.style.display = "block";
    })

    modalCloseBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}